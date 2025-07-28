package com.imad.elearning.data.remote

import com.imad.elearning.data.model.*
import retrofit2.Response
import retrofit2.http.*

interface ApiService {
    
    // User endpoints
    @GET("users/{userId}")
    suspend fun getUser(@Path("userId") userId: String): Response<User>
    
    @PUT("users/{userId}")
    suspend fun updateUser(@Path("userId") userId: String, @Body user: User): Response<User>
    
    @POST("users/search")
    suspend fun searchUsers(@Body searchQuery: SearchQuery): Response<List<User>>
    
    // Course endpoints
    @GET("courses")
    suspend fun getCourses(
        @Query("page") page: Int = 1,
        @Query("limit") limit: Int = 20,
        @Query("category") category: String? = null,
        @Query("level") level: String? = null,
        @Query("search") search: String? = null
    ): Response<CourseResponse>
    
    @GET("courses/{courseId}")
    suspend fun getCourse(@Path("courseId") courseId: String): Response<Course>
    
    @GET("courses/featured")
    suspend fun getFeaturedCourses(): Response<List<Course>>
    
    @GET("courses/popular")
    suspend fun getPopularCourses(): Response<List<Course>>
    
    @GET("courses/categories")
    suspend fun getCategories(): Response<List<Category>>
    
    @POST("courses")
    suspend fun createCourse(@Body course: Course): Response<Course>
    
    @PUT("courses/{courseId}")
    suspend fun updateCourse(@Path("courseId") courseId: String, @Body course: Course): Response<Course>
    
    @DELETE("courses/{courseId}")
    suspend fun deleteCourse(@Path("courseId") courseId: String): Response<Unit>
    
    // Enrollment endpoints
    @GET("enrollments/user/{userId}")
    suspend fun getUserEnrollments(@Path("userId") userId: String): Response<List<Enrollment>>
    
    @GET("enrollments/{enrollmentId}")
    suspend fun getEnrollment(@Path("enrollmentId") enrollmentId: String): Response<Enrollment>
    
    @POST("enrollments")
    suspend fun enrollInCourse(@Body enrollmentRequest: EnrollmentRequest): Response<Enrollment>
    
    @PUT("enrollments/{enrollmentId}/progress")
    suspend fun updateProgress(@Path("enrollmentId") enrollmentId: String, @Body progress: CourseProgress): Response<Enrollment>
    
    @POST("enrollments/{enrollmentId}/complete")
    suspend fun completeCourse(@Path("enrollmentId") enrollmentId: String): Response<Enrollment>
    
    // Payment endpoints
    @POST("payments/create-order")
    suspend fun createPaymentOrder(@Body orderRequest: PaymentOrderRequest): Response<PaymentOrderResponse>
    
    @POST("payments/verify")
    suspend fun verifyPayment(@Body verificationRequest: PaymentVerificationRequest): Response<PaymentVerificationResponse>
    
    @GET("payments/user/{userId}")
    suspend fun getUserPayments(@Path("userId") userId: String): Response<List<Payment>>
    
    @POST("payments/{paymentId}/refund")
    suspend fun requestRefund(@Path("paymentId") paymentId: String, @Body refundRequest: RefundRequest): Response<Payment>
    
    // Live streaming endpoints
    @GET("live-classes")
    suspend fun getLiveClasses(
        @Query("courseId") courseId: String? = null,
        @Query("status") status: String? = null
    ): Response<List<LiveClass>>
    
    @GET("live-classes/{classId}")
    suspend fun getLiveClass(@Path("classId") classId: String): Response<LiveClass>
    
    @POST("live-classes")
    suspend fun createLiveClass(@Body liveClass: LiveClass): Response<LiveClass>
    
    @PUT("live-classes/{classId}")
    suspend fun updateLiveClass(@Path("classId") classId: String, @Body liveClass: LiveClass): Response<LiveClass>
    
    @POST("live-classes/{classId}/join")
    suspend fun joinLiveClass(@Path("classId") classId: String): Response<LiveClassJoinResponse>
    
    // Quiz endpoints
    @GET("courses/{courseId}/quizzes")
    suspend fun getCourseQuizzes(@Path("courseId") courseId: String): Response<List<Quiz>>
    
    @GET("quizzes/{quizId}")
    suspend fun getQuiz(@Path("quizId") quizId: String): Response<Quiz>
    
    @POST("quizzes/{quizId}/attempt")
    suspend fun startQuizAttempt(@Path("quizId") quizId: String): Response<QuizAttempt>
    
    @POST("quiz-attempts/{attemptId}/submit")
    suspend fun submitQuizAttempt(@Path("attemptId") attemptId: String, @Body answers: Map<String, QuizAnswer>): Response<QuizAttempt>
    
    // File upload endpoints
    @Multipart
    @POST("files/upload")
    suspend fun uploadFile(@Part("file") file: okhttp3.MultipartBody.Part): Response<FileUploadResponse>
    
    @Multipart
    @POST("courses/{courseId}/videos")
    suspend fun uploadVideo(
        @Path("courseId") courseId: String,
        @Part("video") video: okhttp3.MultipartBody.Part
    ): Response<VideoUploadResponse>
    
    @Multipart
    @POST("courses/{courseId}/documents")
    suspend fun uploadDocument(
        @Path("courseId") courseId: String,
        @Part("document") document: okhttp3.MultipartBody.Part
    ): Response<DocumentUploadResponse>
    
    // Analytics endpoints
    @GET("analytics/user/{userId}/dashboard")
    suspend fun getUserAnalytics(@Path("userId") userId: String): Response<UserAnalytics>
    
    @GET("analytics/course/{courseId}/dashboard")
    suspend fun getCourseAnalytics(@Path("courseId") courseId: String): Response<CourseAnalytics>
    
    @POST("analytics/events")
    suspend fun trackEvent(@Body event: AnalyticsEvent): Response<Unit>
    
    // Notification endpoints
    @GET("notifications/user/{userId}")
    suspend fun getUserNotifications(@Path("userId") userId: String): Response<List<Notification>>
    
    @PUT("notifications/{notificationId}/read")
    suspend fun markNotificationAsRead(@Path("notificationId") notificationId: String): Response<Unit>
    
    @POST("notifications/subscribe")
    suspend fun subscribeToNotifications(@Body subscriptionRequest: NotificationSubscriptionRequest): Response<Unit>
}

// Data classes for API responses
data class CourseResponse(
    val courses: List<Course>,
    val totalPages: Int,
    val currentPage: Int,
    val totalItems: Int
)

data class Category(
    val id: String,
    val name: String,
    val description: String,
    val imageUrl: String,
    val courseCount: Int
)

data class SearchQuery(
    val query: String,
    val filters: Map<String, String> = emptyMap()
)

data class EnrollmentRequest(
    val userId: String,
    val courseId: String,
    val paymentId: String? = null
)

data class PaymentOrderRequest(
    val userId: String,
    val courseId: String,
    val amount: Double,
    val currency: String = "INR",
    val couponCode: String? = null
)

data class PaymentOrderResponse(
    val orderId: String,
    val amount: Double,
    val currency: String,
    val keyId: String
)

data class PaymentVerificationRequest(
    val orderId: String,
    val paymentId: String,
    val signature: String,
    val userId: String,
    val courseId: String
)

data class PaymentVerificationResponse(
    val isValid: Boolean,
    val payment: Payment?,
    val enrollment: Enrollment?
)

data class RefundRequest(
    val reason: String,
    val amount: Double? = null
)

data class LiveClassJoinResponse(
    val meetingUrl: String,
    val token: String,
    val channelName: String
)

data class FileUploadResponse(
    val fileId: String,
    val fileName: String,
    val fileUrl: String,
    val fileSize: Long,
    val mimeType: String
)

data class VideoUploadResponse(
    val videoId: String,
    val videoUrl: String,
    val thumbnailUrl: String,
    val duration: Long,
    val quality: List<VideoQuality>
)

data class VideoQuality(
    val resolution: String,
    val url: String,
    val size: Long
)

data class DocumentUploadResponse(
    val documentId: String,
    val documentUrl: String,
    val fileName: String,
    val size: Long
)

data class UserAnalytics(
    val totalCourses: Int,
    val completedCourses: Int,
    val totalWatchTime: Long,
    val streakDays: Int,
    val averageProgress: Float,
    val monthlyProgress: Map<String, Float>
)

data class CourseAnalytics(
    val totalStudents: Int,
    val activeStudents: Int,
    val completionRate: Float,
    val averageRating: Float,
    val revenue: Double,
    val engagementMetrics: EngagementMetrics
)

data class EngagementMetrics(
    val averageWatchTime: Long,
    val dropOffPoints: List<DropOffPoint>,
    val popularLessons: List<String>,
    val quizPerformance: QuizPerformanceMetrics
)

data class DropOffPoint(
    val lessonId: String,
    val timestamp: Long,
    val dropOffPercentage: Float
)

data class QuizPerformanceMetrics(
    val averageScore: Float,
    val passRate: Float,
    val mostDifficultQuestions: List<String>
)

data class AnalyticsEvent(
    val eventName: String,
    val userId: String,
    val properties: Map<String, Any>,
    val timestamp: Long = System.currentTimeMillis()
)

data class Notification(
    val id: String,
    val userId: String,
    val title: String,
    val message: String,
    val type: NotificationType,
    val isRead: Boolean,
    val data: Map<String, String>,
    val createdAt: Long
)

enum class NotificationType {
    COURSE_UPDATE, LIVE_CLASS, PAYMENT, ACHIEVEMENT, GENERAL
}

data class NotificationSubscriptionRequest(
    val userId: String,
    val fcmToken: String,
    val topics: List<String>
)