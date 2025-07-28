package com.imad.elearning.data.model

import android.os.Parcelable
import androidx.room.Entity
import androidx.room.PrimaryKey
import com.google.firebase.firestore.DocumentId
import kotlinx.parcelize.Parcelize

@Parcelize
@Entity(tableName = "payments")
data class Payment(
    @PrimaryKey
    @DocumentId
    val id: String = "",
    val userId: String = "",
    val courseId: String = "",
    val enrollmentId: String = "",
    val amount: Double = 0.0,
    val currency: String = "INR",
    val status: PaymentStatus = PaymentStatus.PENDING,
    val method: PaymentMethod = PaymentMethod.RAZORPAY,
    val transactionId: String = "",
    val razorpayOrderId: String = "",
    val razorpayPaymentId: String = "",
    val razorpaySignature: String = "",
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = System.currentTimeMillis(),
    val completedAt: Long = 0L,
    val failureReason: String = "",
    val refundId: String = "",
    val refundAmount: Double = 0.0,
    val refundStatus: RefundStatus = RefundStatus.NONE,
    val couponCode: String = "",
    val discountAmount: Double = 0.0,
    val taxAmount: Double = 0.0,
    val totalAmount: Double = 0.0,
    val receipt: PaymentReceipt? = null,
    val billingAddress: BillingAddress? = null
) : Parcelable

@Parcelize
enum class PaymentStatus : Parcelable {
    PENDING, PROCESSING, COMPLETED, FAILED, CANCELLED, REFUNDED
}

@Parcelize
enum class PaymentMethod : Parcelable {
    RAZORPAY, UPI, CARD, NET_BANKING, WALLET, EMI, GOOGLE_PAY, PHONE_PE, PAYTM
}

@Parcelize
enum class RefundStatus : Parcelable {
    NONE, PENDING, PROCESSING, COMPLETED, FAILED
}

@Parcelize
data class PaymentReceipt(
    val receiptNumber: String = "",
    val itemName: String = "",
    val itemDescription: String = "",
    val quantity: Int = 1,
    val unitPrice: Double = 0.0,
    val subtotal: Double = 0.0,
    val discount: Double = 0.0,
    val tax: Double = 0.0,
    val total: Double = 0.0,
    val paymentDate: Long = System.currentTimeMillis(),
    val sellerInfo: SellerInfo = SellerInfo()
) : Parcelable

@Parcelize
data class SellerInfo(
    val name: String = "IMAD E-Learning",
    val address: String = "",
    val phone: String = "",
    val email: String = "support@imadelearning.com",
    val gstin: String = "",
    val website: String = "https://imadelearning.com"
) : Parcelable

@Parcelize
data class BillingAddress(
    val name: String = "",
    val email: String = "",
    val phone: String = "",
    val addressLine1: String = "",
    val addressLine2: String = "",
    val city: String = "",
    val state: String = "",
    val country: String = "",
    val pincode: String = ""
) : Parcelable

@Parcelize
data class Coupon(
    val id: String = "",
    val code: String = "",
    val description: String = "",
    val discountType: DiscountType = DiscountType.PERCENTAGE,
    val discountValue: Double = 0.0,
    val minimumAmount: Double = 0.0,
    val maximumDiscount: Double = 0.0,
    val validFrom: Long = System.currentTimeMillis(),
    val validUntil: Long = 0L,
    val usageLimit: Int = 0, // 0 means unlimited
    val usedCount: Int = 0,
    val applicableCourses: List<String> = emptyList(), // empty means all courses
    val applicableUsers: List<String> = emptyList(), // empty means all users
    val isActive: Boolean = true,
    val createdAt: Long = System.currentTimeMillis()
) : Parcelable

@Parcelize
enum class DiscountType : Parcelable {
    PERCENTAGE, FIXED_AMOUNT
}

@Parcelize
data class Wallet(
    val id: String = "",
    val userId: String = "",
    val balance: Double = 0.0,
    val currency: String = "INR",
    val transactions: List<WalletTransaction> = emptyList(),
    val isActive: Boolean = true,
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = System.currentTimeMillis()
) : Parcelable

@Parcelize
data class WalletTransaction(
    val id: String = "",
    val type: TransactionType = TransactionType.CREDIT,
    val amount: Double = 0.0,
    val description: String = "",
    val reference: String = "", // payment id, refund id, etc.
    val balanceAfter: Double = 0.0,
    val createdAt: Long = System.currentTimeMillis()
) : Parcelable

@Parcelize
enum class TransactionType : Parcelable {
    CREDIT, DEBIT, REFUND, CASHBACK, BONUS
}