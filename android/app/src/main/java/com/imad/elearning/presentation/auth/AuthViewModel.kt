package com.imad.elearning.presentation.auth

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.imad.elearning.data.model.User
import com.imad.elearning.domain.repository.AuthRepository
import com.imad.elearning.utils.Resource
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import timber.log.Timber
import javax.inject.Inject

@HiltViewModel
class AuthViewModel @Inject constructor(
    private val authRepository: AuthRepository
) : ViewModel() {

    private val _authState = MutableStateFlow(false)
    val authState: StateFlow<Boolean> = _authState.asStateFlow()

    private val _isLoading = MutableStateFlow(true)
    val isLoading: StateFlow<Boolean> = _isLoading.asStateFlow()

    private val _currentUser = MutableStateFlow<User?>(null)
    val currentUser: StateFlow<User?> = _currentUser.asStateFlow()

    private val _authError = MutableStateFlow<String?>(null)
    val authError: StateFlow<String?> = _authError.asStateFlow()

    private val _signInLoading = MutableStateFlow(false)
    val signInLoading: StateFlow<Boolean> = _signInLoading.asStateFlow()

    private val _signUpLoading = MutableStateFlow(false)
    val signUpLoading: StateFlow<Boolean> = _signUpLoading.asStateFlow()

    init {
        checkAuthState()
        observeAuthState()
        observeCurrentUser()
    }

    private fun checkAuthState() {
        viewModelScope.launch {
            try {
                val isSignedIn = authRepository.isUserSignedIn()
                _authState.value = isSignedIn
                
                if (isSignedIn) {
                    val userId = authRepository.getCurrentUserId()
                    userId?.let { id ->
                        when (val result = authRepository.getUserFromDatabase(id)) {
                            is Resource.Success -> {
                                _currentUser.value = result.data
                            }
                            is Resource.Error -> {
                                Timber.e("Failed to get user data: ${result.message}")
                            }
                            else -> {}
                        }
                    }
                }
            } catch (e: Exception) {
                Timber.e(e, "Error checking auth state")
            } finally {
                _isLoading.value = false
            }
        }
    }

    private fun observeAuthState() {
        viewModelScope.launch {
            authRepository.getAuthStateFlow().collect { isAuthenticated ->
                _authState.value = isAuthenticated
                if (!isAuthenticated) {
                    _currentUser.value = null
                }
            }
        }
    }

    private fun observeCurrentUser() {
        viewModelScope.launch {
            authRepository.getCurrentUser().collect { user ->
                _currentUser.value = user
            }
        }
    }

    fun signInWithEmailAndPassword(email: String, password: String) {
        viewModelScope.launch {
            _signInLoading.value = true
            _authError.value = null
            
            when (val result = authRepository.signInWithEmailAndPassword(email, password)) {
                is Resource.Success -> {
                    Timber.d("Sign in successful")
                    // User data will be updated through the observer
                }
                is Resource.Error -> {
                    _authError.value = result.message
                    Timber.e("Sign in failed: ${result.message}")
                }
                else -> {}
            }
            
            _signInLoading.value = false
        }
    }

    fun signUpWithEmailAndPassword(email: String, password: String, displayName: String) {
        viewModelScope.launch {
            _signUpLoading.value = true
            _authError.value = null
            
            when (val result = authRepository.signUpWithEmailAndPassword(email, password, displayName)) {
                is Resource.Success -> {
                    Timber.d("Sign up successful")
                    // Send email verification
                    sendEmailVerification()
                }
                is Resource.Error -> {
                    _authError.value = result.message
                    Timber.e("Sign up failed: ${result.message}")
                }
                else -> {}
            }
            
            _signUpLoading.value = false
        }
    }

    fun signInWithGoogle(idToken: String) {
        viewModelScope.launch {
            _signInLoading.value = true
            _authError.value = null
            
            when (val result = authRepository.signInWithGoogle(idToken)) {
                is Resource.Success -> {
                    Timber.d("Google sign in successful")
                }
                is Resource.Error -> {
                    _authError.value = result.message
                    Timber.e("Google sign in failed: ${result.message}")
                }
                else -> {}
            }
            
            _signInLoading.value = false
        }
    }

    fun signOut() {
        viewModelScope.launch {
            when (val result = authRepository.signOut()) {
                is Resource.Success -> {
                    Timber.d("Sign out successful")
                }
                is Resource.Error -> {
                    Timber.e("Sign out failed: ${result.message}")
                }
                else -> {}
            }
        }
    }

    fun sendPasswordResetEmail(email: String) {
        viewModelScope.launch {
            when (val result = authRepository.sendPasswordResetEmail(email)) {
                is Resource.Success -> {
                    Timber.d("Password reset email sent")
                    // Show success message to user
                }
                is Resource.Error -> {
                    _authError.value = result.message
                    Timber.e("Password reset failed: ${result.message}")
                }
                else -> {}
            }
        }
    }

    fun sendEmailVerification() {
        viewModelScope.launch {
            when (val result = authRepository.sendEmailVerification()) {
                is Resource.Success -> {
                    Timber.d("Email verification sent")
                }
                is Resource.Error -> {
                    Timber.e("Email verification failed: ${result.message}")
                }
                else -> {}
            }
        }
    }

    fun reloadUser() {
        viewModelScope.launch {
            when (val result = authRepository.reloadUser()) {
                is Resource.Success -> {
                    Timber.d("User reloaded")
                    // Check if email is now verified
                    checkEmailVerification()
                }
                is Resource.Error -> {
                    Timber.e("User reload failed: ${result.message}")
                }
                else -> {}
            }
        }
    }

    private fun checkEmailVerification() {
        val isEmailVerified = authRepository.isEmailVerified()
        val currentUser = _currentUser.value
        if (isEmailVerified && currentUser != null && !currentUser.isEmailVerified) {
            // Update user in database
            updateUserProfile(currentUser.copy(isEmailVerified = true))
        }
    }

    fun updateUserProfile(user: User) {
        viewModelScope.launch {
            when (val result = authRepository.updateUserProfile(user)) {
                is Resource.Success -> {
                    Timber.d("User profile updated")
                    _currentUser.value = user
                }
                is Resource.Error -> {
                    Timber.e("User profile update failed: ${result.message}")
                }
                else -> {}
            }
        }
    }

    fun clearAuthError() {
        _authError.value = null
    }

    fun isEmailVerified(): Boolean {
        return authRepository.isEmailVerified()
    }

    fun getCurrentUserId(): String? {
        return authRepository.getCurrentUserId()
    }
}