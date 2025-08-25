# 📖 Recipe Book - Angular Application

[![Angular](https://img.shields.io/badge/Angular-11.0.5-red.svg)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-3.4.1-blue.svg)](https://getbootstrap.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.0.2-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A comprehensive recipe management application built with Angular 11, featuring recipe CRUD operations, shopping list management, and Firebase data persistence.

## ✨ Features

- **🍳 Recipe Management**: Create, view, edit, and delete recipes with detailed information
- **📝 Shopping List**: Add recipe ingredients to shopping list and manage items
- **💾 Data Persistence**: Save and fetch data using Firebase Realtime Database
- **🎨 Responsive Design**: Bootstrap-powered responsive user interface
- **🔄 Real-time Updates**: Live data synchronization across components
- **📱 Mobile-Friendly**: Optimized for various screen sizes
- **🔒 Form Validation**: Comprehensive form validation for data integrity

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recipe-book.git
   cd recipe-book
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200` to view the application

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 11.0.5
- **UI Framework**: Bootstrap 3.4.1
- **Language**: TypeScript 4.0.2
- **State Management**: RxJS 6.6.3
- **Backend**: Firebase Realtime Database
- **Build Tool**: Angular CLI
- **Testing**: Jasmine & Karma

## 📁 Project Structure

```
src/
├── app/
│   ├── auth/                 # Authentication components
│   ├── header/              # Navigation header
│   ├── recipes/             # Recipe management
│   │   ├── recipe-detail/   # Recipe detail view
│   │   ├── recipe-edit/     # Recipe creation/editing
│   │   ├── recipe-list/     # Recipe listing
│   │   └── recipe-start/    # Recipe landing page
│   ├── shared/              # Shared services & models
│   └── shopping-list/       # Shopping list management
├── assets/                  # Static assets
└── environments/            # Environment configuration
```

## 🎯 Key Components

### Recipe Management
- **Recipe List**: Display all recipes with navigation
- **Recipe Detail**: View recipe information and ingredients
- **Recipe Edit**: Create new recipes or modify existing ones
- **Recipe Service**: Centralized recipe data management

### Shopping List
- **Shopping List**: View and manage shopping items
- **Shopping Edit**: Add, edit, and delete shopping list items
- **Shopping Service**: Shopping list data operations

### Data Storage
- **Firebase Integration**: Cloud data persistence
- **Data Storage Service**: Handle save/fetch operations
- **Recipe Resolver**: Pre-load recipe data for routes

## 🔧 Available Scripts

```bash
# Development
npm start          # Start development server
ng serve          # Alternative start command

# Building
npm run build     # Build for production
ng build --prod   # Production build with optimization

# Testing
npm test          # Run unit tests
ng test           # Alternative test command
npm run e2e       # Run end-to-end tests

# Code Quality
npm run lint      # Run linting
```

## 🌐 Firebase Configuration

The application uses Firebase Realtime Database for data persistence. To configure:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Set up Realtime Database
3. Update the Firebase configuration in the data storage service
4. Configure security rules as needed

## 📱 Usage

### Managing Recipes
1. Navigate to the "Recipes" section
2. Click "New Recipe" to create a recipe
3. Fill in recipe details (name, description, image URL)
4. Add ingredients with quantities
5. Save the recipe

### Shopping List
1. Go to "Shopping List" section
2. Add items manually or from recipes
3. Edit quantities and delete items as needed
4. Use the "Add to Shopping List" feature from recipe details

### Data Management
- Use the "Manage" dropdown in the header
- "Save Data" to persist changes to Firebase
- "Fetch Data" to retrieve saved data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Angular Team](https://angular.io/) for the amazing framework
- [Bootstrap](https://getbootstrap.com/) for the UI components
- [Firebase](https://firebase.google.com/) for backend services

---

⭐ **Star this repository if you find it helpful!**
