'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/signup'); // Redirect to signup if not logged in
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null; // Render nothing while redirecting
  }

  return children;
};

export default ProtectedRoute;
