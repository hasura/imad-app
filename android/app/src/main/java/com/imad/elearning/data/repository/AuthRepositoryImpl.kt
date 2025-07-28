package com.imad.elearning.data.repository

import android.net.Uri
import com.google.firebase.auth.AuthCredential
import com.google.firebase.auth.AuthResult
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseAuthException
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.auth.PhoneAuthCredential
import com.google.firebase.auth.PhoneAuthProvider
import com.google.firebase.auth.UserProfileChangeRequest
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.storage.FirebaseStorage
import com.imad.elearning.data.model.User
import com.imad.elearning.data.model.UserRole
import com.imad.elearning.domain.repository.AuthRepository
import com.imad.elearning.utils.Resource
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.tasks.await
import timber.log.Timber
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class AuthRepositoryImpl @Inject constructor(
    private val firebaseAuth: FirebaseAuth,
    private val firestore: FirebaseFirestore,
    private val storage: FirebaseStorage
) : AuthRepository {

    override suspend fun signInWithEmailAndPassword(email: String, password: String): Resource<AuthResult> {
        return try {
            val result = firebaseAuth.signInWithEmailAndPassword(email, password).await()
            Timber.d("User signed in: ${result.user?.uid}")
            Resource.Success(result)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Sign in failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Sign in failed")
            Resource.Error("Sign in failed: ${e.message}")
        }
    }

    override suspend fun signUpWithEmailAndPassword(
        email: String,
        password: String,
        displayName: String
    ): Resource<AuthResult> {
        return try {
            val result = firebaseAuth.createUserWithEmailAndPassword(email, password).await()
            
            // Update display name
            result.user?.updateProfile(
                UserProfileChangeRequest.Builder()
                    .setDisplayName(displayName)
                    .build()
            )?.await()
            
            // Create user document in Firestore
            result.user?.let { firebaseUser ->
                val user = User(
                    id = firebaseUser.uid,
                    email = email,
                    displayName = displayName,
                    role = UserRole.STUDENT,
                    isEmailVerified = firebaseUser.isEmailVerified
                )
                saveUserToDatabase(user)
            }
            
            Timber.d("User created: ${result.user?.uid}")
            Resource.Success(result)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Sign up failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Sign up failed")
            Resource.Error("Sign up failed: ${e.message}")
        }
    }

    override suspend fun signInWithPhoneNumber(phoneNumber: String): Resource<String> {
        return try {
            // This would typically require a verification callback
            // For now, returning a placeholder implementation
            Resource.Error("Phone authentication requires activity context")
        } catch (e: Exception) {
            Timber.e(e, "Phone sign in failed")
            Resource.Error("Phone sign in failed: ${e.message}")
        }
    }

    override suspend fun verifyPhoneNumber(verificationId: String, code: String): Resource<AuthResult> {
        return try {
            val credential = PhoneAuthProvider.getCredential(verificationId, code)
            val result = firebaseAuth.signInWithCredential(credential).await()
            
            // Create user document if new user
            result.user?.let { firebaseUser ->
                val existingUser = getUserFromDatabase(firebaseUser.uid)
                if (existingUser.data == null) {
                    val user = User(
                        id = firebaseUser.uid,
                        phoneNumber = firebaseUser.phoneNumber ?: "",
                        displayName = firebaseUser.displayName ?: "",
                        role = UserRole.STUDENT,
                        isPhoneVerified = true
                    )
                    saveUserToDatabase(user)
                }
            }
            
            Timber.d("Phone verification successful: ${result.user?.uid}")
            Resource.Success(result)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Phone verification failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Phone verification failed")
            Resource.Error("Phone verification failed: ${e.message}")
        }
    }

    override suspend fun signInWithCredential(credential: AuthCredential): Resource<AuthResult> {
        return try {
            val result = firebaseAuth.signInWithCredential(credential).await()
            Timber.d("Credential sign in successful: ${result.user?.uid}")
            Resource.Success(result)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Credential sign in failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Credential sign in failed")
            Resource.Error("Sign in failed: ${e.message}")
        }
    }

    override suspend fun signInWithGoogle(idToken: String): Resource<AuthResult> {
        return try {
            val credential = GoogleAuthProvider.getCredential(idToken, null)
            val result = firebaseAuth.signInWithCredential(credential).await()
            
            // Create user document if new user
            result.user?.let { firebaseUser ->
                val existingUser = getUserFromDatabase(firebaseUser.uid)
                if (existingUser.data == null) {
                    val user = User(
                        id = firebaseUser.uid,
                        email = firebaseUser.email ?: "",
                        displayName = firebaseUser.displayName ?: "",
                        profileImageUrl = firebaseUser.photoUrl?.toString() ?: "",
                        role = UserRole.STUDENT,
                        isEmailVerified = firebaseUser.isEmailVerified
                    )
                    saveUserToDatabase(user)
                }
            }
            
            Timber.d("Google sign in successful: ${result.user?.uid}")
            Resource.Success(result)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Google sign in failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Google sign in failed")
            Resource.Error("Google sign in failed: ${e.message}")
        }
    }

    override suspend fun signOut(): Resource<Unit> {
        return try {
            firebaseAuth.signOut()
            Timber.d("User signed out")
            Resource.Success(Unit)
        } catch (e: Exception) {
            Timber.e(e, "Sign out failed")
            Resource.Error("Sign out failed: ${e.message}")
        }
    }

    override suspend fun sendPasswordResetEmail(email: String): Resource<Unit> {
        return try {
            firebaseAuth.sendPasswordResetEmail(email).await()
            Timber.d("Password reset email sent to: $email")
            Resource.Success(Unit)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Password reset failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Password reset failed")
            Resource.Error("Password reset failed: ${e.message}")
        }
    }

    override suspend fun sendEmailVerification(): Resource<Unit> {
        return try {
            firebaseAuth.currentUser?.sendEmailVerification()?.await()
            Timber.d("Email verification sent")
            Resource.Success(Unit)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Email verification failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Email verification failed")
            Resource.Error("Email verification failed: ${e.message}")
        }
    }

    override suspend fun reloadUser(): Resource<Unit> {
        return try {
            firebaseAuth.currentUser?.reload()?.await()
            Timber.d("User reloaded")
            Resource.Success(Unit)
        } catch (e: Exception) {
            Timber.e(e, "User reload failed")
            Resource.Error("User reload failed: ${e.message}")
        }
    }

    override suspend fun deleteAccount(): Resource<Unit> {
        return try {
            val userId = firebaseAuth.currentUser?.uid
            firebaseAuth.currentUser?.delete()?.await()
            
            // Delete user data from Firestore
            userId?.let {
                firestore.collection("users").document(it).delete().await()
            }
            
            Timber.d("Account deleted")
            Resource.Success(Unit)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Account deletion failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Account deletion failed")
            Resource.Error("Account deletion failed: ${e.message}")
        }
    }

    override suspend fun updatePassword(newPassword: String): Resource<Unit> {
        return try {
            firebaseAuth.currentUser?.updatePassword(newPassword)?.await()
            Timber.d("Password updated")
            Resource.Success(Unit)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Password update failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Password update failed")
            Resource.Error("Password update failed: ${e.message}")
        }
    }

    override suspend fun updateEmail(newEmail: String): Resource<Unit> {
        return try {
            firebaseAuth.currentUser?.updateEmail(newEmail)?.await()
            Timber.d("Email updated to: $newEmail")
            Resource.Success(Unit)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Email update failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Email update failed")
            Resource.Error("Email update failed: ${e.message}")
        }
    }

    override suspend fun reauthenticate(credential: AuthCredential): Resource<Unit> {
        return try {
            firebaseAuth.currentUser?.reauthenticate(credential)?.await()
            Timber.d("Reauthentication successful")
            Resource.Success(Unit)
        } catch (e: FirebaseAuthException) {
            Timber.e(e, "Reauthentication failed")
            Resource.Error(getAuthErrorMessage(e))
        } catch (e: Exception) {
            Timber.e(e, "Reauthentication failed")
            Resource.Error("Reauthentication failed: ${e.message}")
        }
    }

    override fun getCurrentUser(): Flow<User?> = callbackFlow {
        val listener = FirebaseAuth.AuthStateListener { auth ->
            trySend(auth.currentUser?.let { firebaseUser ->
                User(
                    id = firebaseUser.uid,
                    email = firebaseUser.email ?: "",
                    displayName = firebaseUser.displayName ?: "",
                    phoneNumber = firebaseUser.phoneNumber ?: "",
                    profileImageUrl = firebaseUser.photoUrl?.toString() ?: "",
                    isEmailVerified = firebaseUser.isEmailVerified,
                    lastLoginAt = System.currentTimeMillis()
                )
            })
        }
        
        firebaseAuth.addAuthStateListener(listener)
        awaitClose { firebaseAuth.removeAuthStateListener(listener) }
    }

    override fun getCurrentUserId(): String? = firebaseAuth.currentUser?.uid

    override fun isUserSignedIn(): Boolean = firebaseAuth.currentUser != null

    override fun isEmailVerified(): Boolean = firebaseAuth.currentUser?.isEmailVerified ?: false

    override suspend fun saveUserToDatabase(user: User): Resource<Unit> {
        return try {
            firestore.collection("users")
                .document(user.id)
                .set(user)
                .await()
            Timber.d("User saved to database: ${user.id}")
            Resource.Success(Unit)
        } catch (e: Exception) {
            Timber.e(e, "Failed to save user to database")
            Resource.Error("Failed to save user: ${e.message}")
        }
    }

    override suspend fun getUserFromDatabase(userId: String): Resource<User?> {
        return try {
            val document = firestore.collection("users")
                .document(userId)
                .get()
                .await()
            
            val user = document.toObject(User::class.java)
            Timber.d("User retrieved from database: $userId")
            Resource.Success(user)
        } catch (e: Exception) {
            Timber.e(e, "Failed to get user from database")
            Resource.Error("Failed to get user: ${e.message}")
        }
    }

    override suspend fun updateUserProfile(user: User): Resource<Unit> {
        return try {
            firestore.collection("users")
                .document(user.id)
                .set(user.copy(updatedAt = System.currentTimeMillis()))
                .await()
            Timber.d("User profile updated: ${user.id}")
            Resource.Success(Unit)
        } catch (e: Exception) {
            Timber.e(e, "Failed to update user profile")
            Resource.Error("Failed to update profile: ${e.message}")
        }
    }

    override suspend fun uploadProfileImage(userId: String, imageUri: String): Resource<String> {
        return try {
            val ref = storage.reference.child("profile_images/$userId.jpg")
            val uploadTask = ref.putFile(Uri.parse(imageUri)).await()
            val downloadUrl = uploadTask.storage.downloadUrl.await()
            Timber.d("Profile image uploaded: $downloadUrl")
            Resource.Success(downloadUrl.toString())
        } catch (e: Exception) {
            Timber.e(e, "Failed to upload profile image")
            Resource.Error("Failed to upload image: ${e.message}")
        }
    }

    override suspend fun checkEmailExists(email: String): Resource<Boolean> {
        return try {
            val signInMethods = firebaseAuth.fetchSignInMethodsForEmail(email).await()
            val exists = signInMethods.signInMethods?.isNotEmpty() == true
            Resource.Success(exists)
        } catch (e: Exception) {
            Timber.e(e, "Failed to check email existence")
            Resource.Error("Failed to check email: ${e.message}")
        }
    }

    override suspend fun checkPhoneExists(phoneNumber: String): Resource<Boolean> {
        return try {
            // Query Firestore for phone number
            val query = firestore.collection("users")
                .whereEqualTo("phoneNumber", phoneNumber)
                .limit(1)
                .get()
                .await()
            
            val exists = !query.isEmpty
            Resource.Success(exists)
        } catch (e: Exception) {
            Timber.e(e, "Failed to check phone existence")
            Resource.Error("Failed to check phone: ${e.message}")
        }
    }

    override fun getAuthStateFlow(): Flow<Boolean> = callbackFlow {
        val listener = FirebaseAuth.AuthStateListener { auth ->
            trySend(auth.currentUser != null)
        }
        
        firebaseAuth.addAuthStateListener(listener)
        awaitClose { firebaseAuth.removeAuthStateListener(listener) }
    }

    private fun getAuthErrorMessage(exception: FirebaseAuthException): String {
        return when (exception.errorCode) {
            "ERROR_INVALID_EMAIL" -> "Invalid email address"
            "ERROR_WRONG_PASSWORD" -> "Incorrect password"
            "ERROR_USER_NOT_FOUND" -> "No account found with this email"
            "ERROR_USER_DISABLED" -> "This account has been disabled"
            "ERROR_TOO_MANY_REQUESTS" -> "Too many failed attempts. Please try again later"
            "ERROR_EMAIL_ALREADY_IN_USE" -> "An account with this email already exists"
            "ERROR_WEAK_PASSWORD" -> "Password is too weak"
            "ERROR_INVALID_CREDENTIAL" -> "Invalid credentials"
            "ERROR_ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL" -> "Account exists with different sign-in method"
            else -> exception.message ?: "Authentication failed"
        }
    }
}