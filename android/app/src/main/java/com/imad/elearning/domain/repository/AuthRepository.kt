package com.imad.elearning.domain.repository

import com.google.firebase.auth.AuthCredential
import com.google.firebase.auth.AuthResult
import com.imad.elearning.data.model.User
import com.imad.elearning.utils.Resource
import kotlinx.coroutines.flow.Flow

interface AuthRepository {
    
    suspend fun signInWithEmailAndPassword(email: String, password: String): Resource<AuthResult>
    
    suspend fun signUpWithEmailAndPassword(
        email: String, 
        password: String, 
        displayName: String
    ): Resource<AuthResult>
    
    suspend fun signInWithPhoneNumber(phoneNumber: String): Resource<String> // Returns verification ID
    
    suspend fun verifyPhoneNumber(verificationId: String, code: String): Resource<AuthResult>
    
    suspend fun signInWithCredential(credential: AuthCredential): Resource<AuthResult>
    
    suspend fun signInWithGoogle(idToken: String): Resource<AuthResult>
    
    suspend fun signOut(): Resource<Unit>
    
    suspend fun sendPasswordResetEmail(email: String): Resource<Unit>
    
    suspend fun sendEmailVerification(): Resource<Unit>
    
    suspend fun reloadUser(): Resource<Unit>
    
    suspend fun deleteAccount(): Resource<Unit>
    
    suspend fun updatePassword(newPassword: String): Resource<Unit>
    
    suspend fun updateEmail(newEmail: String): Resource<Unit>
    
    suspend fun reauthenticate(credential: AuthCredential): Resource<Unit>
    
    fun getCurrentUser(): Flow<User?>
    
    fun getCurrentUserId(): String?
    
    fun isUserSignedIn(): Boolean
    
    fun isEmailVerified(): Boolean
    
    suspend fun saveUserToDatabase(user: User): Resource<Unit>
    
    suspend fun getUserFromDatabase(userId: String): Resource<User?>
    
    suspend fun updateUserProfile(user: User): Resource<Unit>
    
    suspend fun uploadProfileImage(userId: String, imageUri: String): Resource<String>
    
    suspend fun checkEmailExists(email: String): Resource<Boolean>
    
    suspend fun checkPhoneExists(phoneNumber: String): Resource<Boolean>
    
    fun getAuthStateFlow(): Flow<Boolean>
}