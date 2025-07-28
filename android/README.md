# IMAD E-Learning Android Application

A comprehensive e-learning platform built with modern Android development practices, featuring course management, live streaming, video playback, payment integration, and more.

## 🚀 Features

### Core Features
- **User Authentication**: Email/password, Google Sign-In, Phone number authentication
- **Role-based Access**: Students, Teachers, and Administrators with different permissions
- **Course Management**: Create, edit, and manage courses with multiple modules and lessons
- **Video Learning**: High-quality video playback with ExoPlayer, playback speed controls, and offline downloads
- **Live Streaming**: Real-time video classes using Agora SDK with chat functionality
- **Quiz System**: Interactive quizzes with multiple question types and instant feedback
- **Payment Integration**: Secure payments through Razorpay with coupon support
- **PDF Viewer**: In-app PDF viewing for course materials and assignments
- **Progress Tracking**: Detailed learning analytics and progress visualization
- **Offline Mode**: Download content for offline viewing
- **Push Notifications**: Firebase Cloud Messaging for course updates and reminders

### Advanced Features
- **Certificate Generation**: Automated certificate creation upon course completion
- **Discussion Forums**: Student-teacher interaction and peer discussions
- **Notes & Bookmarks**: Students can take notes and bookmark important video moments
- **Multi-language Support**: Internationalization for multiple languages
- **Dark/Light Theme**: Adaptive UI themes
- **Search & Filters**: Advanced course discovery with filters and search
- **Analytics Dashboard**: Comprehensive analytics for teachers and administrators
- **File Upload**: Support for various file formats (videos, PDFs, documents)

## 🏗️ Architecture

This application follows Clean Architecture principles with MVVM pattern:

```
├── data/
│   ├── local/          # Room database, DAOs, and local data sources
│   ├── remote/         # Retrofit APIs and remote data sources
│   ├── repository/     # Repository implementations
│   └── model/          # Data models and entities
├── domain/
│   ├── repository/     # Repository interfaces
│   ├── usecase/        # Business logic use cases
│   └── model/          # Domain models
├── presentation/
│   ├── ui/             # Compose UI screens and components
│   ├── viewmodel/      # ViewModels for UI state management
│   ├── navigation/     # Navigation components
│   └── theme/          # UI themes and styling
├── di/                 # Dependency injection modules
├── utils/              # Utility classes and extensions
└── services/           # Background services and workers
```

## 🛠️ Tech Stack

### Core Technologies
- **Language**: Kotlin
- **UI Framework**: Jetpack Compose
- **Architecture**: MVVM + Clean Architecture
- **Dependency Injection**: Hilt (Dagger)
- **Navigation**: Navigation Compose
- **State Management**: StateFlow, LiveData
- **Coroutines**: Kotlin Coroutines for asynchronous operations

### Backend & Database
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore + Room (local caching)
- **Storage**: Firebase Storage
- **Push Notifications**: Firebase Cloud Messaging
- **Analytics**: Firebase Analytics
- **Crashlytics**: Firebase Crashlytics

### Media & Streaming
- **Video Player**: ExoPlayer
- **Live Streaming**: Agora RTC SDK
- **PDF Viewer**: Android PDF Viewer
- **Image Loading**: Coil

### Payment & Security
- **Payment Gateway**: Razorpay
- **Security**: ProGuard/R8 obfuscation
- **Network Security**: Certificate pinning, HTTPS

### Additional Libraries
- **Networking**: Retrofit + OkHttp
- **Local Database**: Room
- **Work Manager**: Background tasks
- **DataStore**: User preferences
- **Charts**: MPAndroidChart
- **Permissions**: Accompanist Permissions

## 📱 Screenshots

[Add screenshots of your app here]

## 🚀 Getting Started

### Prerequisites
- Android Studio Arctic Fox or later
- JDK 11 or higher
- Android SDK 33 or higher
- Firebase project setup
- Razorpay account for payments
- Agora account for live streaming

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/imad-elearning-android.git
cd imad-elearning-android/android
```

2. **Firebase Setup**
- Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable Authentication, Firestore, Storage, and Cloud Messaging
- Download `google-services.json` and place it in the `app/` directory
- Add your SHA-1 fingerprint for Google Sign-In

3. **Agora Setup**
- Create an Agora account at [Agora.io](https://www.agora.io/)
- Get your App ID and add it to your configuration
- Configure live streaming settings

4. **Razorpay Setup**
- Create a Razorpay account
- Get your API keys and add them to your configuration
- Configure webhook endpoints

5. **Build Configuration**
- Copy `app/src/main/res/values/config.xml.example` to `config.xml`
- Fill in your API keys and configuration values

6. **Build and Run**
```bash
./gradlew assembleDebug
```

## 🔧 Configuration

### Firebase Configuration
Add your Firebase configuration in `app/google-services.json`

### API Keys Configuration
Create `app/src/main/res/values/config.xml`:
```xml
<resources>
    <string name="agora_app_id">YOUR_AGORA_APP_ID</string>
    <string name="razorpay_key_id">YOUR_RAZORPAY_KEY_ID</string>
    <string name="backend_base_url">YOUR_BACKEND_URL</string>
</resources>
```

### Build Variants
- **Debug**: Development build with logging enabled
- **Release**: Production build with obfuscation and optimization

## 📚 Usage

### For Students
1. Register/Login to the app
2. Browse available courses
3. Enroll in courses (free or paid)
4. Watch video lessons and attend live classes
5. Take quizzes and track progress
6. Download content for offline viewing
7. Earn certificates upon completion

### For Teachers
1. Create and publish courses
2. Upload video content and materials
3. Create quizzes and assignments
4. Conduct live classes
5. Monitor student progress
6. View analytics and insights

### For Administrators
1. Manage users and permissions
2. Oversee course content
3. View platform analytics
4. Handle payments and refunds
5. Manage system settings

## 🧪 Testing

### Unit Tests
```bash
./gradlew testDebugUnitTest
```

### Instrumented Tests
```bash
./gradlew connectedAndroidTest
```

### UI Tests
```bash
./gradlew connectedDebugAndroidTest
```

## 📦 Build & Deployment

### Debug Build
```bash
./gradlew assembleDebug
```

### Release Build
```bash
./gradlew assembleRelease
```

### Play Store Deployment
1. Generate signed APK/AAB
2. Upload to Play Console
3. Configure release details
4. Submit for review

## 🔒 Security

- User authentication through Firebase Auth
- Secure API communication with HTTPS
- Data encryption for sensitive information
- ProGuard/R8 code obfuscation
- Certificate pinning for network security
- Proper permission handling

## 📈 Performance

- Lazy loading for large datasets
- Image caching and optimization
- Database query optimization
- Background task optimization
- Memory leak prevention
- Battery usage optimization

## 🌐 Internationalization

The app supports multiple languages:
- English (default)
- Hindi
- Spanish
- French
- German

Add new languages by creating additional `strings.xml` files in the appropriate resource directories.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Follow Kotlin coding conventions
- Use meaningful variable and function names
- Add proper documentation for public APIs
- Write unit tests for new features
- Ensure UI tests pass for UI changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: support@imadelearning.com
- Documentation: [Wiki](https://github.com/yourusername/imad-elearning-android/wiki)
- Issues: [GitHub Issues](https://github.com/yourusername/imad-elearning-android/issues)

## 🙏 Acknowledgments

- Firebase for backend services
- Agora for live streaming capabilities
- Razorpay for payment processing
- ExoPlayer for video playback
- Material Design for UI components
- Open source community for various libraries

## 📋 Roadmap

### Version 2.0
- [ ] Augmented Reality (AR) lessons
- [ ] Virtual Reality (VR) support
- [ ] AI-powered course recommendations
- [ ] Advanced analytics dashboard
- [ ] Multi-instructor courses
- [ ] Blockchain certificates

### Version 1.1
- [ ] Offline quiz support
- [ ] Advanced video editor
- [ ] Course marketplace
- [ ] Social features and groups
- [ ] Integration with external LMS
- [ ] Advanced reporting tools

---

**Built with ❤️ for education technology**