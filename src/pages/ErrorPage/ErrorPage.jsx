import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
       <div className="text-center py-20">

      <h1 className="text-5xl font-bold mb-4">
        404
      </h1>

      <p className="text-gray-500 mb-6">
        Page Not Found
      </p>

      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Go Home
      </Link>

    </div>
);
};

export default ErrorPage;