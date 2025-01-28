'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Add user state to store user data

  useEffect(() => {
    // Check local storage or some form of persistence for login status
    const savedLoginStatus = localStorage.getItem('isLoggedIn');
    const savedUser = localStorage.getItem('user'); // Load user data from local storage
    if (savedLoginStatus === 'true' && savedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(savedUser)); // Parse and set user data from local storage
    }
  }, []);

  const logIn = (userData) => {
    setIsLoggedIn(true);
    setUser(userData); // Set user data on login
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(userData)); // Store user data in local storage
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUser(null); // Clear user data on logout
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('user'); // Remove user data from local storage
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
