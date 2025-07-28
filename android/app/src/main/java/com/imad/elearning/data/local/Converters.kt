package com.imad.elearning.data.local

import androidx.room.TypeConverter
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.imad.elearning.data.model.*

class Converters {
    
    private val gson = Gson()
    
    // User related converters
    @TypeConverter
    fun fromUserRole(role: UserRole): String = role.name
    
    @TypeConverter
    fun toUserRole(role: String): UserRole = UserRole.valueOf(role)
    
    @TypeConverter
    fun fromAddress(address: Address?): String? = gson.toJson(address)
    
    @TypeConverter
    fun toAddress(addressString: String?): Address? {
        return addressString?.let {
            gson.fromJson(it, Address::class.java)
        }
    }
    
    @TypeConverter
    fun fromSocialLinkList(links: List<SocialLink>): String = gson.toJson(links)
    
    @TypeConverter
    fun toSocialLinkList(linksString: String): List<SocialLink> {
        val type = object : TypeToken<List<SocialLink>>() {}.type
        return gson.fromJson(linksString, type) ?: emptyList()
    }
    
    @TypeConverter
    fun fromUserPreferences(preferences: UserPreferences): String = gson.toJson(preferences)
    
    @TypeConverter
    fun toUserPreferences(preferencesString: String): UserPreferences {
        return gson.fromJson(preferencesString, UserPreferences::class.java)
    }
    
    @TypeConverter
    fun fromUserStats(stats: UserStats): String = gson.toJson(stats)
    
    @TypeConverter
    fun toUserStats(statsString: String): UserStats {
        return gson.fromJson(statsString, UserStats::class.java)
    }
    
    // Course related converters
    @TypeConverter
    fun fromCourseLevel(level: CourseLevel): String = level.name
    
    @TypeConverter
    fun toCourseLevel(level: String): CourseLevel = CourseLevel.valueOf(level)
    
    @TypeConverter
    fun fromStringList(strings: List<String>): String = gson.toJson(strings)
    
    @TypeConverter
    fun toStringList(stringsString: String): List<String> {
        val type = object : TypeToken<List<String>>() {}.type
        return gson.fromJson(stringsString, type) ?: emptyList()
    }
    
    @TypeConverter
    fun fromCourseModuleList(modules: List<CourseModule>): String = gson.toJson(modules)
    
    @TypeConverter
    fun toCourseModuleList(modulesString: String): List<CourseModule> {
        val type = object : TypeToken<List<CourseModule>>() {}.type
        return gson.fromJson(modulesString, type) ?: emptyList()
    }
    
    @TypeConverter
    fun fromCourseRatings(ratings: CourseRatings): String = gson.toJson(ratings)
    
    @TypeConverter
    fun toCourseRatings(ratingsString: String): CourseRatings {
        return gson.fromJson(ratingsString, CourseRatings::class.java)
    }
    
    @TypeConverter
    fun fromCourseEnrollment(enrollment: CourseEnrollment): String = gson.toJson(enrollment)
    
    @TypeConverter
    fun toCourseEnrollment(enrollmentString: String): CourseEnrollment {
        return gson.fromJson(enrollmentString, CourseEnrollment::class.java)
    }
    
    @TypeConverter
    fun fromCourseCertificate(certificate: CourseCertificate?): String? = gson.toJson(certificate)
    
    @TypeConverter
    fun toCourseCertificate(certificateString: String?): CourseCertificate? {
        return certificateString?.let {
            gson.fromJson(it, CourseCertificate::class.java)
        }
    }
    
    @TypeConverter
    fun fromLiveClassList(liveClasses: List<LiveClass>): String = gson.toJson(liveClasses)
    
    @TypeConverter
    fun toLiveClassList(liveClassesString: String): List<LiveClass> {
        val type = object : TypeToken<List<LiveClass>>() {}.type
        return gson.fromJson(liveClassesString, type) ?: emptyList()
    }
    
    // Enrollment related converters
    @TypeConverter
    fun fromEnrollmentStatus(status: EnrollmentStatus): String = status.name
    
    @TypeConverter
    fun toEnrollmentStatus(status: String): EnrollmentStatus = EnrollmentStatus.valueOf(status)
    
    @TypeConverter
    fun fromCourseProgress(progress: CourseProgress): String = gson.toJson(progress)
    
    @TypeConverter
    fun toCourseProgress(progressString: String): CourseProgress {
        return gson.fromJson(progressString, CourseProgress::class.java)
    }
    
    @TypeConverter
    fun fromCourseRating(rating: CourseRating?): String? = gson.toJson(rating)
    
    @TypeConverter
    fun toCourseRating(ratingString: String?): CourseRating? {
        return ratingString?.let {
            gson.fromJson(it, CourseRating::class.java)
        }
    }
    
    @TypeConverter
    fun fromStudentNoteList(notes: List<StudentNote>): String = gson.toJson(notes)
    
    @TypeConverter
    fun toStudentNoteList(notesString: String): List<StudentNote> {
        val type = object : TypeToken<List<StudentNote>>() {}.type
        return gson.fromJson(notesString, type) ?: emptyList()
    }
    
    @TypeConverter
    fun fromBookmarkList(bookmarks: List<Bookmark>): String = gson.toJson(bookmarks)
    
    @TypeConverter
    fun toBookmarkList(bookmarksString: String): List<Bookmark> {
        val type = object : TypeToken<List<Bookmark>>() {}.type
        return gson.fromJson(bookmarksString, type) ?: emptyList()
    }
    
    @TypeConverter
    fun fromDiscussionStats(stats: DiscussionStats): String = gson.toJson(stats)
    
    @TypeConverter
    fun toDiscussionStats(statsString: String): DiscussionStats {
        return gson.fromJson(statsString, DiscussionStats::class.java)
    }
    
    // Payment related converters
    @TypeConverter
    fun fromPaymentStatus(status: PaymentStatus): String = status.name
    
    @TypeConverter
    fun toPaymentStatus(status: String): PaymentStatus = PaymentStatus.valueOf(status)
    
    @TypeConverter
    fun fromPaymentMethod(method: PaymentMethod): String = method.name
    
    @TypeConverter
    fun toPaymentMethod(method: String): PaymentMethod = PaymentMethod.valueOf(method)
    
    @TypeConverter
    fun fromRefundStatus(status: RefundStatus): String = status.name
    
    @TypeConverter
    fun toRefundStatus(status: String): RefundStatus = RefundStatus.valueOf(status)
    
    @TypeConverter
    fun fromPaymentReceipt(receipt: PaymentReceipt?): String? = gson.toJson(receipt)
    
    @TypeConverter
    fun toPaymentReceipt(receiptString: String?): PaymentReceipt? {
        return receiptString?.let {
            gson.fromJson(it, PaymentReceipt::class.java)
        }
    }
    
    @TypeConverter
    fun fromBillingAddress(address: BillingAddress?): String? = gson.toJson(address)
    
    @TypeConverter
    fun toBillingAddress(addressString: String?): BillingAddress? {
        return addressString?.let {
            gson.fromJson(it, BillingAddress::class.java)
        }
    }
    
    // Generic map converters
    @TypeConverter
    fun fromStringIntMap(map: Map<String, Int>): String = gson.toJson(map)
    
    @TypeConverter
    fun toStringIntMap(mapString: String): Map<String, Int> {
        val type = object : TypeToken<Map<String, Int>>() {}.type
        return gson.fromJson(mapString, type) ?: emptyMap()
    }
    
    @TypeConverter
    fun fromIntIntMap(map: Map<Int, Int>): String = gson.toJson(map)
    
    @TypeConverter
    fun toIntIntMap(mapString: String): Map<Int, Int> {
        val type = object : TypeToken<Map<Int, Int>>() {}.type
        return gson.fromJson(mapString, type) ?: emptyMap()
    }
}