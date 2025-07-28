package com.imad.elearning

import android.app.Application
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.hilt.work.HiltWorkerFactory
import androidx.work.Configuration
import com.google.firebase.FirebaseApp
import com.google.firebase.crashlytics.FirebaseCrashlytics
import com.razorpay.Checkout
import dagger.hilt.android.HiltAndroidApp
import timber.log.Timber
import javax.inject.Inject

@HiltAndroidApp
class ELearningApplication : Application(), Configuration.Provider {

    @Inject
    lateinit var workerFactory: HiltWorkerFactory

    override fun onCreate() {
        super.onCreate()
        
        // Initialize Firebase
        FirebaseApp.initializeApp(this)
        
        // Initialize Crashlytics
        FirebaseCrashlytics.getInstance().setCrashlyticsCollectionEnabled(!BuildConfig.DEBUG)
        
        // Initialize Timber for logging
        if (BuildConfig.DEBUG) {
            Timber.plant(Timber.DebugTree())
        }
        
        // Initialize Razorpay
        Checkout.preload(applicationContext)
        
        // Create notification channels
        createNotificationChannels()
        
        Timber.d("ELearningApplication initialized")
    }

    override fun getWorkManagerConfiguration(): Configuration {
        return Configuration.Builder()
            .setWorkerFactory(workerFactory)
            .build()
    }

    private fun createNotificationChannels() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            
            // Course Updates Channel
            val courseUpdatesChannel = NotificationChannel(
                CHANNEL_COURSE_UPDATES,
                "Course Updates",
                NotificationManager.IMPORTANCE_DEFAULT
            ).apply {
                description = "Notifications about new lessons, assignments, and course updates"
            }
            
            // Live Classes Channel
            val liveClassesChannel = NotificationChannel(
                CHANNEL_LIVE_CLASSES,
                "Live Classes",
                NotificationManager.IMPORTANCE_HIGH
            ).apply {
                description = "Notifications about upcoming and ongoing live classes"
            }
            
            // Downloads Channel
            val downloadsChannel = NotificationChannel(
                CHANNEL_DOWNLOADS,
                "Downloads",
                NotificationManager.IMPORTANCE_LOW
            ).apply {
                description = "Download progress notifications"
            }
            
            // General Channel
            val generalChannel = NotificationChannel(
                CHANNEL_GENERAL,
                "General",
                NotificationManager.IMPORTANCE_DEFAULT
            ).apply {
                description = "General app notifications"
            }
            
            // Marketing Channel
            val marketingChannel = NotificationChannel(
                CHANNEL_MARKETING,
                "Offers & Promotions",
                NotificationManager.IMPORTANCE_LOW
            ).apply {
                description = "Special offers, discounts, and promotional content"
            }
            
            notificationManager.createNotificationChannels(
                listOf(
                    courseUpdatesChannel,
                    liveClassesChannel,
                    downloadsChannel,
                    generalChannel,
                    marketingChannel
                )
            )
        }
    }

    companion object {
        const val CHANNEL_COURSE_UPDATES = "course_updates"
        const val CHANNEL_LIVE_CLASSES = "live_classes"
        const val CHANNEL_DOWNLOADS = "downloads"
        const val CHANNEL_GENERAL = "general"
        const val CHANNEL_MARKETING = "marketing"
    }
}