import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GeneralLayout from './components/GeneralLayout';
import DashboardPage from './pages/DashboardPage';
import CustomersPage from './pages/CustomersPage';
import ProtectedRoute from './components/ProtectedRoute'; // Custom route guard component
import LoginPage from './features/auth/LoginPage';

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
    ],
  },
  { path: '/login', element: <LoginPage /> }, // Add the login route
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
