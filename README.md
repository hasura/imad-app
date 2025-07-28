# IMAD E-Learning Platform

A comprehensive e-learning platform with both web and Android applications, featuring course management, live streaming, video playback, payment integration, and comprehensive learning management system.

## 🏗️ Project Structure

This repository contains multiple components of the IMAD E-Learning platform:

```
├── ui/                    # Web frontend (React/HTML/CSS/JS)
├── android/               # Android application (Kotlin/Jetpack Compose)
├── server.js             # Backend server (Node.js/Express)
├── package.json          # Web dependencies
└── README.md            # This file
```

## 📱 Android Application

The Android application is a full-featured e-learning app built with modern Android development practices:

### Key Features
- **User Authentication**: Email/password, Google Sign-In, Phone authentication
- **Course Management**: Browse, enroll, and track progress
- **Video Learning**: ExoPlayer with offline downloads and playback controls
- **Live Streaming**: Real-time classes using Agora SDK
- **Payment Integration**: Secure payments via Razorpay
- **Quiz System**: Interactive assessments with instant feedback
- **PDF Viewer**: In-app document viewing
- **Offline Mode**: Download content for offline access
- **Push Notifications**: Firebase Cloud Messaging

### Tech Stack
- **Language**: Kotlin
- **UI**: Jetpack Compose
- **Architecture**: MVVM + Clean Architecture
- **Backend**: Firebase (Auth, Firestore, Storage, FCM)
- **Payments**: Razorpay
- **Live Streaming**: Agora RTC SDK
- **Video**: ExoPlayer
- **DI**: Hilt (Dagger)

### Getting Started with Android App
```bash
cd android
# Follow setup instructions in android/README.md
```

## 🌐 Web Application

The web frontend provides a responsive interface for accessing courses and management features.

### Tech Stack
- HTML5, CSS3, JavaScript
- Responsive design
- Express.js backend integration

### Getting Started with Web App
```bash
npm install
npm start
```

## 🚀 Backend Server

Simple Express.js server for handling web requests and API endpoints.

```bash
node server.js
```

## 📋 Full Feature Set

### For Students
- Multi-platform access (Web + Android)
- Course browsing and enrollment
- Video lessons with progress tracking
- Live class attendance
- Interactive quizzes and assessments
- Note-taking and bookmarking
- Offline content access (Android)
- Certificate generation
- Progress analytics

### For Teachers/Instructors
- Course creation and management
- Video upload and organization
- Live class hosting
- Quiz and assignment creation
- Student progress monitoring
- Analytics and insights
- Content management tools

### For Administrators
- User management
- Platform analytics
- Payment and enrollment oversight
- Content moderation
- System configuration

## 🛠️ Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/imad-app.git
cd imad-app
```

2. **Set up Web Application**
```bash
npm install
npm start
```

3. **Set up Android Application**
```bash
cd android
# Follow detailed setup in android/README.md
```

4. **Configure Services**
- Firebase project setup
- Razorpay payment gateway
- Agora live streaming
- Backend API endpoints

## 📱 Platform Support

- **Android**: Native Android app (API 24+)
- **Web**: Responsive web application
- **iOS**: Future roadmap item

## 🤝 Contributing

Please read our contributing guidelines and submit pull requests for any improvements.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: support@imadelearning.com
- Android App Issues: [Android Issues](https://github.com/yourusername/imad-app/issues)
- Web App Issues: [Web Issues](https://github.com/yourusername/imad-app/issues)

---

**IMAD E-Learning - Empowering Education Through Technology**
