import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 font-sans">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Login to Your Account
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-semibold">
          Login
        </button>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-indigo-600 hover:underline">
            Please register here
          </a>
        </p>
        <p className="text-sm text-center text-gray-600 mt-2">
          <a href="/" className="text-indigo-600 hover:underline">
            Back to Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;