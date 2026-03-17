import React from 'react';
import apps from '../../app.json'
import AppCard from '../../components/AppCard/AppCard';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router';

const Home = () => {
    const topApps = apps.slice(0,8);
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl text-black font-bold mb-6 text-center mt-8">Trending Apps</h2>
            <p className='text-gray-600 text-center mb-8'>Explore All Trending Apps on the Market developed by us</p>

      <div className="grid md:grid-cols-4 gap-4 px-50">
        {topApps.map(app => (
          <AppCard key={app.id} app={app}/>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/apps"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Show All
        </Link>
      </div>

        </div>
    );
};

export default Home;