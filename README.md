# Borstal Microfinance Bank App

Borstal Microfinance Bank App is a web application designed to manage microfinance banking operations. The application features functionalities such as customer management, file uploads, analytics, and staff authentication. It is built with React, Redux for state management, Ant Design, and Tailwind CSS for styling.

The system's frontend is designed to manage backups, monitor analytics, and interact with customers, giving the bank an interface for manual and cloud-based data management.

## Table of Contents
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [State Management](#state-management)
- [Key Features](#key-features)
- [Setup](#setup)
- [Scripts](#scripts)

## Project Structure

The project follows a typical React application structure with the following folders:
├── public 
│ └── index.html # Main HTML template ├── src 
│ ├── assets # Static assets like images and icons 
│ ├── components # Reusable UI components (e.g., buttons, tables) 
│ ├── layouts # Layout components (e.g., GeneralLayout, Sidebar) 
│ ├── pages # Application pages (e.g., CustomerPage, FilesPage) 
│ ├── redux # Redux store and slices 
│ │ ├── authSlice.js # Authentication slice for login/logout actions 
│ │ ├── fileSlice.js # File management slice for file uploads 
│ │ ├── taskSlice.js # Task management slice for handling tasks 
│ ├── services # API services and helper functions (e.g., Axios setup) 
│ ├── styles # Global and component-specific styles (using Tailwind CSS) 
│ ├── App.js # Main app component 
│ └── index.js # Application entry point 
└── package.json # Project dependencies and scripts

### Key Files
- **App.js**: Main component that sets up routing and layout.
- **GeneralLayout.js**: Contains the general structure, including the sidebar, navbar, and content area.
- **redux/authSlice.js**: Manages user authentication, including login, logout, and staff ID.
- **BackupModal.js**: Handles the file backup functionality, including file uploads.
- **CustomerPage.js**: Displays a list of customers and their details (e.g., Name, Loans, Account Balance).
- **SettingsPage.js**: Manages app configurations and user preferences.
- **AnalyticsPage.js**: Shows various statistics and insights for business performance.

## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Redux**: State management library for handling global state.
- **React Redux**: Integration of Redux with React.
- **Ant Design**: UI component library for modern and responsive design.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for making API requests.

### State Management:
- **Redux Toolkit**: Manages global state across the application. The `authSlice` is used for user authentication and includes actions such as login, logout, and document upload.

## State Management

The application uses **Redux** for global state management, particularly for authentication, tasks, and file uploads.

### Slices:
1. **authSlice.js**: Contains the authentication state, including the staff ID used for login, as well as actions for logging in, logging out, and handling uploads.
2. **fileSlice.js**: Manages the state related to file uploads, such as uploading backup files.
3. **taskSlice.js**: Handles task-related functionality such as assigning, updating, and deleting tasks.

### Actions:
- **Login**: Dispatches a login action with the staff ID.
- **Logout**: Dispatches a logout action, triggering the BackupModal.
- **UploadDocument**: Manages the upload of backup files.
- **Task Management**: Handles creating, updating, and deleting tasks.

## Key Features

1. **Authentication**: Users (staff) can log in using their staff ID. Redux manages the authentication state.
2. **File Management**: Users can upload backup files through the BackupModal.
3. **Customer Management**: Displays a list of customers and their financial details.
4. **Analytics**: Provides insights and statistics on business performance, customer loans, account balances, etc.
5. **Settings**: Manages user preferences and application configurations.
6. **Task Management**: Allows staff to create, update, and manage various tasks within the application.

## Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/yourusername/borstal-microfinance-bank](https://github.com/OthmanImam/Borstal_MFB_App).git
