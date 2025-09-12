'use client';

import React, { useState } from 'react';

const SignInPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div
        className="hidden md:flex flex-1 items-start justify-center p-12 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(200 85% 45%), hsl(185 60% 50%), hsl(170 50% 55%))',
          color: '#fff',
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <pattern id="medical-pattern" patternUnits="userSpaceOnUse" width="50" height="50">
                <circle cx="25" cy="25" r="2" fill="currentColor" />
                <path d="M25 15v20M15 25h20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#medical-pattern)" />
          </svg>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm-7 13c0-2.33 4.67-3.5 7-3.5s7 1.17 7 3.5v1H5v-1z"/>
          </svg>
        </div>

        {/* Main Content */}
        <div className="max-w-lg text-center relative z-10 mt-8">
          <h1 className="text-5xl font-bold mb-6 mt-42">African Healthcare Excellence</h1>
          <p className="text-lg leading-relaxed mb-8">
            Access world-class medical care from our dedicated African healthcare professionals. 
            Book appointments, manage prescriptions, and consult online—all in one platform.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="w-full max-w-md p-10 rounded-3xl shadow-2xl bg-white backdrop-blur-sm border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600">
              {isLogin
                ? 'Login to access your account and manage appointments'
                : 'Sign up to start your journey with our African healthcare platform'}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                isLogin 
                  ? 'bg-white text-blue-600 shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                !isLogin 
                  ? 'bg-white text-blue-600 shadow-md' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-gray-900 placeholder-gray-400"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-gray-900 placeholder-gray-400"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-gray-900 placeholder-gray-400"
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5"
            >
              {isLogin ? 'Login to Account' : 'Create Account'}
            </button>
          </form>

          {isLogin ? (
            <div className="mt-6 text-center">
              <span className="text-gray-600">
                Don&apos;t have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Sign Up
                </button>
              </span>
            </div>
          ) : (
            <div className="mt-6 text-center">
              <span className="text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Login
                </button>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
