package com.imad.elearning.data.local

import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import com.imad.elearning.data.local.dao.CourseDao
import com.imad.elearning.data.local.dao.EnrollmentDao
import com.imad.elearning.data.local.dao.PaymentDao
import com.imad.elearning.data.local.dao.UserDao
import com.imad.elearning.data.model.Course
import com.imad.elearning.data.model.Enrollment
import com.imad.elearning.data.model.Payment
import com.imad.elearning.data.model.User

@Database(
    entities = [
        User::class,
        Course::class,
        Enrollment::class,
        Payment::class
    ],
    version = 1,
    exportSchema = false
)
@TypeConverters(Converters::class)
abstract class ELearningDatabase : RoomDatabase() {
    
    abstract fun userDao(): UserDao
    abstract fun courseDao(): CourseDao
    abstract fun enrollmentDao(): EnrollmentDao
    abstract fun paymentDao(): PaymentDao
}