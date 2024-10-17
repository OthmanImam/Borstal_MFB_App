import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import PropTypes from 'prop-types'; 

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth); 

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    // If the user is not logged in, redirect them to the login page
    return <Navigate to="/login" />;
  }

  return children;
};

// Optionally define prop types
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
