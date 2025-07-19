// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin'); // or check a token

  if (isAdmin === 'true') {
    return children;
  } else {
    return <Navigate to="/admin/login" replace />;
  }
};

export default ProtectedRoute;
