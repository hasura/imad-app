package com.imad.elearning.presentation

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.core.view.WindowCompat
import com.imad.elearning.presentation.auth.AuthViewModel
import com.imad.elearning.presentation.navigation.ELearningNavigation
import com.imad.elearning.presentation.splash.SplashScreen
import com.imad.elearning.presentation.theme.ELearningTheme
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    
    private val authViewModel: AuthViewModel by viewModels()
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Enable edge-to-edge
        WindowCompat.setDecorFitsSystemWindows(window, false)
        
        setContent {
            ELearningTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val authState by authViewModel.authState.collectAsState()
                    val isLoading by authViewModel.isLoading.collectAsState()
                    
                    when {
                        isLoading -> {
                            SplashScreen()
                        }
                        authState -> {
                            // User is authenticated, show main app
                            ELearningNavigation(isAuthenticated = true)
                        }
                        else -> {
                            // User is not authenticated, show auth flow
                            ELearningNavigation(isAuthenticated = false)
                        }
                    }
                }
            }
        }
    }
}