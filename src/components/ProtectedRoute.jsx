import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth); // Assuming your auth state is in Redux

  if (!isAuthenticated) {
    // If the user is not logged in, redirect them to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children components (GeneralLayout in this case)
  return children;
};

export default ProtectedRoute;
