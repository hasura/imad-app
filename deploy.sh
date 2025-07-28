#!/bin/bash

# IMAD E-Learning Platform Deployment Script
echo "🚀 IMAD E-Learning Platform Deployment Script"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Check if required tools are installed
check_requirements() {
    print_header "Checking requirements..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ and try again."
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm and try again."
        exit 1
    fi
    
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed. Please install Git and try again."
        exit 1
    fi
    
    print_status "All requirements satisfied!"
}

# Install dependencies
install_dependencies() {
    print_header "Installing dependencies..."
    npm install
    if [ $? -eq 0 ]; then
        print_status "Dependencies installed successfully!"
    else
        print_error "Failed to install dependencies!"
        exit 1
    fi
}

# Run tests
run_tests() {
    print_header "Running tests..."
    npm test
    if [ $? -eq 0 ]; then
        print_status "All tests passed!"
    else
        print_warning "Some tests failed, but continuing with deployment..."
    fi
}

# Build application
build_application() {
    print_header "Building application..."
    npm run build
    if [ $? -eq 0 ]; then
        print_status "Application built successfully!"
    else
        print_error "Build failed!"
        exit 1
    fi
}

# Deploy to Vercel
deploy_vercel() {
    print_header "Deploying to Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    print_status "Deploying to Vercel..."
    vercel --prod --confirm
    
    if [ $? -eq 0 ]; then
        print_status "Successfully deployed to Vercel!"
        echo "🌐 Your app is now live on Vercel!"
    else
        print_error "Vercel deployment failed!"
    fi
}

# Deploy to Netlify
deploy_netlify() {
    print_header "Deploying to Netlify..."
    
    if ! command -v netlify &> /dev/null; then
        print_warning "Netlify CLI not found. Installing..."
        npm install -g netlify-cli
    fi
    
    print_status "Deploying to Netlify..."
    netlify deploy --prod --dir=ui
    
    if [ $? -eq 0 ]; then
        print_status "Successfully deployed to Netlify!"
        echo "🌐 Your app is now live on Netlify!"
    else
        print_error "Netlify deployment failed!"
    fi
}

# Deploy to Railway
deploy_railway() {
    print_header "Deploying to Railway..."
    
    if ! command -v railway &> /dev/null; then
        print_warning "Railway CLI not found. Installing..."
        npm install -g @railway/cli
    fi
    
    print_status "Deploying to Railway..."
    railway deploy
    
    if [ $? -eq 0 ]; then
        print_status "Successfully deployed to Railway!"
        echo "🌐 Your app is now live on Railway!"
    else
        print_error "Railway deployment failed!"
    fi
}

# Main deployment function
main() {
    echo "Select deployment platform:"
    echo "1. Vercel (Recommended)"
    echo "2. Netlify"
    echo "3. Railway"
    echo "4. All platforms"
    echo "5. Local testing only"
    
    read -p "Enter your choice (1-5): " choice
    
    case $choice in
        1)
            check_requirements
            install_dependencies
            run_tests
            build_application
            deploy_vercel
            ;;
        2)
            check_requirements
            install_dependencies
            run_tests
            build_application
            deploy_netlify
            ;;
        3)
            check_requirements
            install_dependencies
            run_tests
            build_application
            deploy_railway
            ;;
        4)
            check_requirements
            install_dependencies
            run_tests
            build_application
            deploy_vercel
            deploy_netlify
            deploy_railway
            ;;
        5)
            check_requirements
            install_dependencies
            run_tests
            print_status "Starting local server..."
            npm start
            ;;
        *)
            print_error "Invalid choice. Please run the script again."
            exit 1
            ;;
    esac
}

# Run main function
main