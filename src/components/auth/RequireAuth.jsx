import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  // Check if the flag exists in LocalStorage
  const isAuthenticated = localStorage.getItem("isAdminLoggedIn") === "true";

  // If yes, render the child routes (The Dashboard)
  // If no, redirect to Login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;