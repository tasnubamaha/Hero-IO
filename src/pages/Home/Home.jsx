import React, { useEffect, useState } from 'react';
import apps from '../../app.json'
import AppCard from '../../components/AppCard/AppCard';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';


const Home = () => {
    const topApps = apps.slice(0,8);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }, []);

  if (loading) return <Loader />;


    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl sm:text-4xl text-black font-bold mb-6 text-center mt-8">Trending Apps</h2>
            <p className='text-gray-600 text-center mb-8 px-4 sm:px-6 md:px-0'>Explore All Trending Apps on the Market developed by us</p>

      <div className="grid ml-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 lg:px-12">
        {topApps.map(app => (
          <AppCard key={app.id} app={app}/>
        ))}
      </div>

      <div className="text-center mt-14 mb-14">
        <Link
          to="/apps"
          className="bg-[#6F41BE] text-white px-5 sm:px-6 py-2 sm:py-3 rounded hover:bg-purple-700 transition-colors duration-300"
        >
          Show All
        </Link>
      </div>

        </div>
    );
};

export default Home;