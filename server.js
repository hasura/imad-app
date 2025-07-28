const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// Enable compression
app.use(compression());

// Enable CORS
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://imadelearning.com', 'https://www.imadelearning.com']
    : ['http://localhost:3000', 'http://localhost:8080'],
  credentials: true
}));

// Logging
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from ui directory
app.use('/ui', express.static(path.join(__dirname, 'ui')));
app.use(express.static(path.join(__dirname, 'ui')));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'IMAD E-Learning Platform',
    description: 'Comprehensive online learning management system',
    version: '1.0.0',
    features: [
      'Course Management',
      'Video Learning',
      'Live Streaming',
      'Quiz System',
      'Payment Integration',
      'Mobile App Support'
    ]
  });
});

// Serve main application
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// Handle static assets
app.get('/ui/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Catch all handler for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Use PORT from environment or default
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`🚀 IMAD E-Learning Platform running on port ${port}!`);
  console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Access the app at: http://localhost:${port}`);
});
