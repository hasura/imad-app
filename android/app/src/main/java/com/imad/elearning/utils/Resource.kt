package com.imad.elearning.utils

sealed class Resource<T>(
    val data: T? = null,
    val message: String? = null
) {
    class Success<T>(data: T) : Resource<T>(data)
    class Error<T>(message: String, data: T? = null) : Resource<T>(data, message)
    class Loading<T>(data: T? = null) : Resource<T>(data)
    class Empty<T> : Resource<T>()
}

inline fun <T> Resource<T>.onSuccess(action: (T) -> Unit): Resource<T> {
    if (this is Resource.Success) action(data)
    return this
}

inline fun <T> Resource<T>.onError(action: (String) -> Unit): Resource<T> {
    if (this is Resource.Error) action(message ?: "Unknown error")
    return this
}

inline fun <T> Resource<T>.onLoading(action: () -> Unit): Resource<T> {
    if (this is Resource.Loading) action()
    return this
}

fun <T> Resource<T>.isSuccess(): Boolean = this is Resource.Success
fun <T> Resource<T>.isError(): Boolean = this is Resource.Error
fun <T> Resource<T>.isLoading(): Boolean = this is Resource.Loading
fun <T> Resource<T>.isEmpty(): Boolean = this is Resource.Empty