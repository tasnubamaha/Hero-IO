// src/components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-40">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600"></div>
    </div>
  );
};

export default Loader;