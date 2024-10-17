import { createBrowserRouter, Navigate } from 'react-router-dom';  
import GeneralLayout from '../components/GeneralLayout';  
import DashboardPage from '../pages/DashboardPage';  
import CustomersPage from '../pages/CustomersPage';  
import ProtectedRoute from '../routes/ProtectedRoute';  
import LoginPage from '../features/auth/LoginPage';  
import Files from '../pages/Files';  
import Settings from '../pages/Settings';  
import Analytics from '../pages/Analytics';  
import BackupModal from '../ui/BackupModal';  

const routes = createBrowserRouter([  
  {  
    path: '/',  
    element: (  
      <ProtectedRoute>  
        <GeneralLayout />  
      </ProtectedRoute>  
    ),  
    children: [  
      { path: '/', element: <Navigate to="/dashboard" replace /> },  
      { path: '/dashboard', element: <DashboardPage /> },  
      { path: '/customers', element: <CustomersPage /> },  
      { path: '/files', element: <Files /> },  
      { path: '/settings', element: <Settings /> },  
      { path: '/analytics', element: <Analytics /> },  
      { path: '/logout', element: <BackupModal /> },  
    ],  
  },  
  { path: '/login', element: <LoginPage /> },  
]);  

export default routes;