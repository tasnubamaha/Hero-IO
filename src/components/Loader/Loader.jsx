// src/components/Loader.jsx
import React from 'react';

const Loader = ({ fullScreen = false }) => {
  return (
    <div className={`flex items-center justify-center ${
        fullScreen ? "min-h-screen" : "h-40"
      }`}>
      <div className="animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-4 border-purple-200 border-t-purple-600"></div>
    </div>
  );
};

export default Loader;