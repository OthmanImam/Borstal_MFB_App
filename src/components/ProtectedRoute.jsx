import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management
import PropTypes from 'prop-types'; // If you want to use prop-types for validation

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth); // Assuming your auth state is in Redux

  if (isLoading) {
    // Optionally, return a loading spinner or placeholder if auth state is being determined
    return <div>Loading...</div>; // Replace with your loading component if needed
  }

  if (!isAuthenticated) {
    // If the user is not logged in, redirect them to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children components (GeneralLayout in this case)
  return children;
};

// Optionally define prop types
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
