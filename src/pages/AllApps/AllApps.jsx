import React, { useEffect, useState } from 'react';
import apps from '../../app.json';
import AppCard from '../../components/AppCard/AppCard';
import Loader from '../../components/Loader/Loader';
import searchImg from '../../assets/Group (1).png'

const AllApps = () => {

  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    setSearchLoading(true);

    setTimeout(() => {
      const result = apps.filter(app =>
        app.title.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredApps(result);
      setSearchLoading(false);
    }, 400);
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto mb-20 px-4">

      {/* Header */}
      <h1 className='text-black text-3xl text-center font-bold mt-8'>
        Our All Applications
      </h1>
      <p className='text-gray-400 text-center mb-12 mt-6'>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Top bar */}
      <div className="flex flex-col md:flex-row justify-between items-center my-8 gap-4">

        {/* Apps Found */}
        <h1 className="text-2xl font-bold text-black">
          ({filteredApps.length}) Apps Found
        </h1>

        {/* Search */}
      <div className="relative w-full md:w-64 flex items-center border border-black rounded overflow-hidden mr-16">
        {/* Search Icon */}
        <div className="pl-2 pr-2 flex items-center">
          <img src={searchImg} alt="search icon" className="w-5 h-5 text-gray-500" />
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Search app..."
          className="flex-1 px-2 py-2 text-black focus:outline-none"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
</div>

      </div>

      {searchLoading ? (
        <Loader />
      ) : filteredApps.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
           No App Found
        </p>
      ) : (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-6">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}

    </div>
  );
};

export default AllApps;