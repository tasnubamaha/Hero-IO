// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/error-404.png'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <img className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-6' src={errorImg} alt="404 Error" />
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-purple-600 mt-6 mb-3">404</h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold mb-2">Oops! Page not found!</p>
      <p className='text-sm sm:text-base md:text-lg text-gray-800 mb-6 px-2 sm:px-0'>The page you are looking for is not available.</p>
      <Link
        to="/"
        className="bg-[#6F41BE] text-white px-5 sm:px-6 py-2 sm:py-3 rounded hover:bg-purple-700 transition-colors duration-300 mb-8"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default NotFound;