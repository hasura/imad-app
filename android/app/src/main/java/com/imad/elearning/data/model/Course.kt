package com.imad.elearning.data.model

import android.os.Parcelable
import androidx.room.Entity
import androidx.room.PrimaryKey
import com.google.firebase.firestore.DocumentId
import kotlinx.parcelize.Parcelize

@Parcelize
@Entity(tableName = "courses")
data class Course(
    @PrimaryKey
    @DocumentId
    val id: String = "",
    val title: String = "",
    val description: String = "",
    val shortDescription: String = "",
    val instructorId: String = "",
    val instructorName: String = "",
    val instructorImage: String = "",
    val thumbnailUrl: String = "",
    val previewVideoUrl: String = "",
    val category: String = "",
    val subcategory: String = "",
    val level: CourseLevel = CourseLevel.BEGINNER,
    val language: String = "en",
    val price: Double = 0.0,
    val originalPrice: Double = 0.0,
    val currency: String = "INR",
    val isPaid: Boolean = true,
    val isActive: Boolean = true,
    val isPublished: Boolean = false,
    val isFeatured: Boolean = false,
    val totalDuration: Long = 0L, // in minutes
    val totalLessons: Int = 0,
    val totalQuizzes: Int = 0,
    val totalAssignments: Int = 0,
    val prerequisites: List<String> = emptyList(),
    val learningOutcomes: List<String> = emptyList(),
    val tags: List<String> = emptyList(),
    val modules: List<CourseModule> = emptyList(),
    val ratings: CourseRatings = CourseRatings(),
    val enrollment: CourseEnrollment = CourseEnrollment(),
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = System.currentTimeMillis(),
    val publishedAt: Long = 0L,
    val expiryDate: Long = 0L, // 0 means no expiry
    val certificate: CourseCertificate? = null,
    val liveClasses: List<LiveClass> = emptyList(),
    val downloadable: Boolean = false,
    val allowDiscussion: Boolean = true,
    val maxStudents: Int = 0 // 0 means unlimited
) : Parcelable

@Parcelize
enum class CourseLevel : Parcelable {
    BEGINNER, INTERMEDIATE, ADVANCED, ALL_LEVELS
}

@Parcelize
data class CourseModule(
    val id: String = "",
    val title: String = "",
    val description: String = "",
    val order: Int = 0,
    val isLocked: Boolean = false,
    val duration: Long = 0L, // in minutes
    val lessons: List<Lesson> = emptyList(),
    val quiz: Quiz? = null
) : Parcelable

@Parcelize
data class Lesson(
    val id: String = "",
    val title: String = "",
    val description: String = "",
    val type: LessonType = LessonType.VIDEO,
    val order: Int = 0,
    val duration: Long = 0L, // in minutes
    val videoUrl: String = "",
    val thumbnailUrl: String = "",
    val isLocked: Boolean = false,
    val isFree: Boolean = false,
    val attachments: List<LessonAttachment> = emptyList(),
    val notes: String = "",
    val transcript: String = "",
    val playbackSpeeds: List<Float> = listOf(0.5f, 0.75f, 1.0f, 1.25f, 1.5f, 2.0f),
    val allowDownload: Boolean = false,
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = System.currentTimeMillis()
) : Parcelable

@Parcelize
enum class LessonType : Parcelable {
    VIDEO, AUDIO, PDF, TEXT, LIVE, QUIZ, ASSIGNMENT
}

@Parcelize
data class LessonAttachment(
    val id: String = "",
    val name: String = "",
    val url: String = "",
    val type: String = "", // pdf, doc, zip, etc.
    val size: Long = 0L // in bytes
) : Parcelable

@Parcelize
data class Quiz(
    val id: String = "",
    val title: String = "",
    val description: String = "",
    val questions: List<QuizQuestion> = emptyList(),
    val duration: Int = 0, // in minutes, 0 means unlimited
    val passingScore: Int = 70, // percentage
    val maxAttempts: Int = 3, // 0 means unlimited
    val randomizeQuestions: Boolean = false,
    val showCorrectAnswers: Boolean = true,
    val isActive: Boolean = true
) : Parcelable

@Parcelize
data class QuizQuestion(
    val id: String = "",
    val question: String = "",
    val type: QuestionType = QuestionType.MULTIPLE_CHOICE,
    val options: List<String> = emptyList(),
    val correctAnswers: List<Int> = emptyList(), // indices of correct options
    val explanation: String = "",
    val points: Int = 1,
    val imageUrl: String = ""
) : Parcelable

@Parcelize
enum class QuestionType : Parcelable {
    MULTIPLE_CHOICE, MULTIPLE_SELECT, TRUE_FALSE, FILL_IN_BLANK, ESSAY
}

@Parcelize
data class CourseRatings(
    val averageRating: Float = 0f,
    val totalRatings: Int = 0,
    val ratingDistribution: Map<Int, Int> = mapOf(
        5 to 0, 4 to 0, 3 to 0, 2 to 0, 1 to 0
    )
) : Parcelable

@Parcelize
data class CourseEnrollment(
    val totalStudents: Int = 0,
    val activeStudents: Int = 0,
    val completionRate: Float = 0f,
    val lastEnrollmentDate: Long = 0L
) : Parcelable

@Parcelize
data class CourseCertificate(
    val isAvailable: Boolean = false,
    val templateUrl: String = "",
    val criteria: CertificateCriteria = CertificateCriteria()
) : Parcelable

@Parcelize
data class CertificateCriteria(
    val completionPercentage: Int = 100,
    val minimumQuizScore: Int = 70,
    val requiredAssignments: List<String> = emptyList()
) : Parcelable

@Parcelize
data class LiveClass(
    val id: String = "",
    val title: String = "",
    val description: String = "",
    val scheduledAt: Long = 0L,
    val duration: Int = 60, // in minutes
    val maxParticipants: Int = 0, // 0 means unlimited
    val isRecorded: Boolean = true,
    val recordingUrl: String = "",
    val meetingUrl: String = "",
    val status: LiveClassStatus = LiveClassStatus.SCHEDULED
) : Parcelable

@Parcelize
enum class LiveClassStatus : Parcelable {
    SCHEDULED, LIVE, COMPLETED, CANCELLED
}