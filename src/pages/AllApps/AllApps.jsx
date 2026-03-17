import React, { useState } from 'react';
import apps from '../../app.json';
import AppCard from '../../components/AppCard/AppCard';

const AllApps = () => {
  const [search, setSearch] = useState("");

  const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto mb-20 px-4">
      {/* Header */}
      <h1 className='text-black text-3xl text-center font-bold mt-8'>Our All Applications</h1>
      <p className='text-gray-400 text-center mb-12 mt-6'>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Top bar: Apps Found + Search */}
      <div className="flex flex-col md:flex-row justify-between items-center my-8 gap-4">
        {/* Apps Found */}
        <h1 className="text-2xl font-bold text-black">
          ({filteredApps.length}) Apps Found
        </h1>

        {/* Search Input with Icon + Text */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search app..."
            className="border border-black px-4 py-2 rounded w-full pr-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* Icon + Text inside input */}
          <div className="absolute right-2 mr-40 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-gray-500 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-black">Search</span>
          </div>
        </div>
      </div>

      {/* No apps found */}
      {filteredApps.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No App Found
        </p>
      )}

      {/* Apps Grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-6">
        {filteredApps.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;