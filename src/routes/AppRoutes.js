// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import LoginPage from '../features/auth/LoginPage';
// import DashboardPage from '../pages/DashboardPage';
// import CustomersPage from '../pages/CustomersPage';
// import GeneralLayout from '../components/GeneralLayout';

// const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: <LoginPage />, // Separate login route
//   },
//   {
//     path: '/', // Root path that renders GeneralLayout
//     element: <GeneralLayout />,
//     children: [
//         { path: 'customers', element: <CustomersPage /> }, // Customers under GeneralLayout
//         { path: 'dashboard', element: <DashboardPage /> }, // Dashboard under GeneralLayout
//       // More routes can be added here
//     ],
//   },
// ]);

// const AppRoutes = () => {
//   return <RouterProvider router={router} />;
// };

// export default AppRoutes;
