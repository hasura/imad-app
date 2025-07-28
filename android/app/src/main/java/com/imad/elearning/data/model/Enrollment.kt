package com.imad.elearning.data.model

import android.os.Parcelable
import androidx.room.Entity
import androidx.room.PrimaryKey
import com.google.firebase.firestore.DocumentId
import kotlinx.parcelize.Parcelize

@Parcelize
@Entity(tableName = "enrollments")
data class Enrollment(
    @PrimaryKey
    @DocumentId
    val id: String = "",
    val userId: String = "",
    val courseId: String = "",
    val enrolledAt: Long = System.currentTimeMillis(),
    val lastAccessedAt: Long = System.currentTimeMillis(),
    val completedAt: Long = 0L,
    val expiresAt: Long = 0L, // 0 means no expiry
    val status: EnrollmentStatus = EnrollmentStatus.ACTIVE,
    val progress: CourseProgress = CourseProgress(),
    val paymentId: String = "",
    val amount: Double = 0.0,
    val currency: String = "INR",
    val isLifetime: Boolean = false,
    val certificateId: String = "",
    val rating: CourseRating? = null,
    val notes: List<StudentNote> = emptyList(),
    val bookmarks: List<Bookmark> = emptyList(),
    val discussionParticipation: DiscussionStats = DiscussionStats()
) : Parcelable

@Parcelize
enum class EnrollmentStatus : Parcelable {
    ACTIVE, COMPLETED, EXPIRED, SUSPENDED, REFUNDED
}

@Parcelize
data class CourseProgress(
    val totalLessons: Int = 0,
    val completedLessons: Int = 0,
    val totalDuration: Long = 0L, // in minutes
    val watchedDuration: Long = 0L, // in minutes
    val completionPercentage: Float = 0f,
    val lessonsProgress: Map<String, LessonProgress> = emptyMap(),
    val quizzesProgress: Map<String, QuizProgress> = emptyMap(),
    val lastLessonId: String = "",
    val lastPosition: Long = 0L, // in milliseconds
    val streakDays: Int = 0,
    val totalStudyTime: Long = 0L // in minutes
) : Parcelable

@Parcelize
data class LessonProgress(
    val lessonId: String = "",
    val isCompleted: Boolean = false,
    val watchedDuration: Long = 0L, // in minutes
    val totalDuration: Long = 0L, // in minutes
    val lastPosition: Long = 0L, // in milliseconds
    val completedAt: Long = 0L,
    val watchCount: Int = 0,
    val notes: List<StudentNote> = emptyList(),
    val bookmarks: List<Bookmark> = emptyList()
) : Parcelable

@Parcelize
data class QuizProgress(
    val quizId: String = "",
    val attempts: List<QuizAttempt> = emptyList(),
    val bestScore: Int = 0,
    val isCompleted: Boolean = false,
    val isPassed: Boolean = false,
    val completedAt: Long = 0L
) : Parcelable

@Parcelize
data class QuizAttempt(
    val attemptId: String = "",
    val startedAt: Long = System.currentTimeMillis(),
    val completedAt: Long = 0L,
    val score: Int = 0,
    val totalQuestions: Int = 0,
    val correctAnswers: Int = 0,
    val timeTaken: Long = 0L, // in minutes
    val answers: Map<String, QuizAnswer> = emptyMap(),
    val isPassed: Boolean = false
) : Parcelable

@Parcelize
data class QuizAnswer(
    val questionId: String = "",
    val selectedAnswers: List<Int> = emptyList(),
    val textAnswer: String = "",
    val isCorrect: Boolean = false,
    val points: Int = 0
) : Parcelable

@Parcelize
data class StudentNote(
    val id: String = "",
    val lessonId: String = "",
    val content: String = "",
    val timestamp: Long = 0L, // position in video in milliseconds
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = System.currentTimeMillis(),
    val isPrivate: Boolean = true
) : Parcelable

@Parcelize
data class Bookmark(
    val id: String = "",
    val lessonId: String = "",
    val title: String = "",
    val timestamp: Long = 0L, // position in video in milliseconds
    val createdAt: Long = System.currentTimeMillis(),
    val description: String = ""
) : Parcelable

@Parcelize
data class CourseRating(
    val rating: Int = 0, // 1-5 stars
    val review: String = "",
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = System.currentTimeMillis(),
    val isPublic: Boolean = true,
    val helpfulVotes: Int = 0
) : Parcelable

@Parcelize
data class DiscussionStats(
    val questionsAsked: Int = 0,
    val answersGiven: Int = 0,
    val helpfulAnswers: Int = 0,
    val reputation: Int = 0
) : Parcelable