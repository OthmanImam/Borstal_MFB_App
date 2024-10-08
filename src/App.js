import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GeneralLayout from './components/GeneralLayout';
import DashboardPage from './pages/DashboardPage';
import CustomersPage from './pages/CustomersPage';
import ProtectedRoute from './components/ProtectedRoute'; // Custom route guard component
import LoginPage from './features/auth/LoginPage';
import Files from './pages/Files';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <GeneralLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: '/customers', element: <CustomersPage /> },
      { path: '/files', element: <Files />},
      { path: '/settings', element: <Settings /> },
      { path: '/analytics', element: <Analytics /> },
      // Add more routes here as needed (files, analytics, etc.)
    ],
  },
  { path: '/login', element: <LoginPage /> }, // Add the login route
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
