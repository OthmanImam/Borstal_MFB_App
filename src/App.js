import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import GeneralLayout from './components/GeneralLayout';
import DashboardPage from './pages/DashboardPage';
import CustomersPage from './pages/CustomersPage';
import ProtectedRoute from './components/ProtectedRoute'; // Custom route guard component
import LoginPage from './features/auth/LoginPage';
import Files from './pages/Files';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import BackupModal from './ui/BackupModal'; // Custom modal component for backup functionality
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <GeneralLayout />
      </ProtectedRoute>
    ),
    children: [
      // Use Navigate to redirect the root path to the dashboard
      { path: '/', element: <Navigate to="/dashboard" replace /> },
      { path: '/dashboard', element: <DashboardPage /> }, // Changed to a unique path
      { path: '/customers', element: <CustomersPage /> },
      { path: '/files', element: <Files /> },
      { path: '/settings', element: <Settings /> },
      { path: '/analytics', element: <Analytics /> },
      { path: '/logout', element: <BackupModal /> },
      // Add more routes here as needed (files, analytics, etc.)
    ],
  },
  { path: '/login', element: <LoginPage /> }, // Add the login route
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
