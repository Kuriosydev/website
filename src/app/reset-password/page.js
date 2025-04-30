'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isValidToken, setIsValidToken] = useState(true);
  const [code, setCode] = useState('');
  
  const router = useRouter();
  
  useEffect(() => {
 
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const codeParam = urlParams.get('code');
      
      if (!codeParam) {
        setIsValidToken(false);
        setMessage({
          type: 'error',
          text: 'Invalid or missing password reset code.'
        });
      } else {
        setCode(codeParam);
      }
    }
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== passwordConfirmation) {
      setMessage({
        type: 'error',
        text: 'Passwords do not match.'
      });
      return;
    }
    
    if (password.length < 8) {
      setMessage({
        type: 'error',
        text: 'Password must be at least 8 characters long.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });
    
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code,
          password,
          passwordConfirmation
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to reset password');
      }
      
      setMessage({
        type: 'success',
        text: 'Your password has been reset successfully!'
      });
      
      setTimeout(() => {
        router.push('/login');
      }, 3000);
      
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isValidToken) {
    return (
      <div className="min-h-screen flex items-center justify-center w-full h-auto bg-[#FFCE49] undefined dark:bg-black dark:text-white">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Invalid Reset Link</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              This password reset link is invalid or has expired.
            </p>
          </div>
          <div className="p-4 rounded-md bg-red-50 text-red-800">
            {message.text}
          </div>
          <div className="text-center">
            <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
              Request a new password reset link
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full h-auto bg-[#FFCE49] undefined dark:bg-black dark:text-white">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="font-luckiest text-5xl md:text-7xl font-normal text-center md:tracking-wider text-[#8F0E00] dark:text-[#FFCE49] mt-10 font-bold mb-6 text-center">Reset password</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your new password below.
          </p>
        </div>
        
        {message.text && (
          <div className={`p-4 rounded-md ${
            message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            {message.text}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="block mb-2 text-base font-medium">
              New Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                minLength={8}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="passwordConfirmation" className="block mb-2 text-base font-medium">
              Confirm New Password
            </label>
            <div className="mt-1">
              <input
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                required
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                minLength={8}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}