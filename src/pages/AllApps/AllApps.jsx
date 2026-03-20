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

  if (loading) return <Loader fullScreen />;

  return (
    <div className="max-w-7xl mx-auto mb-20 px-4">

     
      <h1 className='text-2xl text-black md:text-3xl text-center font-bold mt-8'>
        Our All Applications
      </h1>

      <p className='text-gray-400 text-center mb-10 mt-4 max-w-xl mx-auto'>
        Explore all apps developed by us. We build for millions.
      </p>


      <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-8">

       
        <h1 className="text-xl ml-14 md:text-2xl text-black font-bold">
          ({filteredApps.length}) Apps Found
        </h1>

       
        <div className="relative w-full md:w-72 flex items-center border border-gray-300 rounded-lg overflow-hidden mr-20">

          <div className="pl-3 pr-2 flex items-center">
            <img src={searchImg} alt="search" className="w-5 h-5 opacity-60" />
          </div>

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
        <div className="grid ml-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}

    </div>
  );
};

export default AllApps;