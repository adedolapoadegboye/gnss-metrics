import React from "react";

const AuthPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6">
          <h1 className="text-lg sm:text-3xl font-bold mb-4">Welcome</h1>
          <p className="text-sm sm:text-lg">
            Please sign in or sign up to continue.
          </p>
        </div>
        <div className="mb-6">
          <button className="block bg-blue-500 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg mb-4 hover:bg-blue-600 transition-colors duration-300">
            Sign In
          </button>
          <button className="block bg-green-500 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-600 transition-colors duration-300">
            Sign Up
          </button>
        </div>
        <a
          href="/"
          className="block bg-red-500 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
        >
          Go Back
        </a>
      </div>
    </div>
  );
};

export default AuthPage;
