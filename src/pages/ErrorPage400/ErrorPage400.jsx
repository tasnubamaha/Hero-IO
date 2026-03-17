// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/error-404.png'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <img className='mt-8' src={errorImg} alt="" />
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 font-bold mb-6">Oops! Page not found!</p>
      <p className='text-sm text-black mb-4'>The page you are looking for is not available.</p>
      <Link
        to="/"
        className="bg-[#6F41BE] mb-10 text-white px-6 py-3 rounded hover:bg-purple-700"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default NotFound;