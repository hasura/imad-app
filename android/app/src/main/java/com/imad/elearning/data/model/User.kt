package com.imad.elearning.data.model

import android.os.Parcelable
import androidx.room.Entity
import androidx.room.PrimaryKey
import com.google.firebase.firestore.DocumentId
import kotlinx.parcelize.Parcelize

@Parcelize
@Entity(tableName = "users")
data class User(
    @PrimaryKey
    @DocumentId
    val id: String = "",
    val email: String = "",
    val displayName: String = "",
    val phoneNumber: String = "",
    val profileImageUrl: String = "",
    val role: UserRole = UserRole.STUDENT,
    val isEmailVerified: Boolean = false,
    val isPhoneVerified: Boolean = false,
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = System.currentTimeMillis(),
    val lastLoginAt: Long = 0L,
    val isActive: Boolean = true,
    val bio: String = "",
    val dateOfBirth: String = "",
    val gender: String = "",
    val address: Address? = null,
    val socialLinks: List<SocialLink> = emptyList(),
    val preferences: UserPreferences = UserPreferences(),
    val stats: UserStats = UserStats()
) : Parcelable

@Parcelize
enum class UserRole : Parcelable {
    STUDENT, TEACHER, ADMIN
}

@Parcelize
data class Address(
    val street: String = "",
    val city: String = "",
    val state: String = "",
    val country: String = "",
    val zipCode: String = ""
) : Parcelable

@Parcelize
data class SocialLink(
    val platform: String = "",
    val url: String = ""
) : Parcelable

@Parcelize
data class UserPreferences(
    val language: String = "en",
    val theme: String = "system", // light, dark, system
    val notificationsEnabled: Boolean = true,
    val emailNotificationsEnabled: Boolean = true,
    val pushNotificationsEnabled: Boolean = true,
    val autoPlayVideos: Boolean = true,
    val downloadQuality: String = "medium", // low, medium, high
    val streamingQuality: String = "auto" // auto, low, medium, high
) : Parcelable

@Parcelize
data class UserStats(
    val totalCoursesEnrolled: Int = 0,
    val totalCoursesCompleted: Int = 0,
    val totalWatchTime: Long = 0L, // in minutes
    val totalQuizzesTaken: Int = 0,
    val averageQuizScore: Float = 0f,
    val streakDays: Int = 0,
    val certificatesEarned: Int = 0,
    val totalSpent: Double = 0.0
) : Parcelable