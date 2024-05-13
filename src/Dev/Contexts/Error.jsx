import React from "react";

const Error404 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center max-w-md mx-auto">
        <div className="flex items-center justify-center mb-6">
          <span className="text-2xl sm:text-4xl text-blue-500 mr-3">4</span>
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-500 rounded-full relative animate-spin">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              0
            </div>
          </div>
          <span className="text-2xl sm:text-4xl text-blue-500 ml-3">4</span>
        </div>
        <h1 className="text-lg sm:text-3xl font-bold mb-4">
          Oops! Page not found
        </h1>
        <p className="text-sm sm:text-lg">
          Sorry, the page you're looking for could not be found.
        </p>
        <a
          href="/"
          className="block bg-blue-500 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg mt-6 sm:mt-8 hover:bg-blue-600 transition-colors duration-300"
        >
          Go back to homepage
        </a>
      </div>
    </div>
  );
};

export default Error404;
