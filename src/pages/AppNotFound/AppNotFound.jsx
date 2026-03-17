// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import appImg from '../../assets/App-Error.png'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <img className='mt-8' src={appImg} alt="" />
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 font-bold mb-6">OPPS!! APP NOT FOUND</p>
      <p className='text-sm text-black mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
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