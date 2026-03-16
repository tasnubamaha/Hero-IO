import React, { useState } from 'react';
import apps from '../../app.json'
import AppCard from '../../components/AppCard/AppCard';


const MyInstallation = () => {

  const [installed] = useState(() => {
    return JSON.parse(localStorage.getItem("installed")) || [];
  });

  const myApps = apps.filter(app =>
    installed.includes(app.id)
  );

  return (
    <div className="max-w-6xl mx-auto py-10">

      <h1 className="text-2xl font-bold mb-6">
        My Installed Apps
      </h1>

      {myApps.length === 0 && (
        <p className="text-gray-500">
          No apps installed yet.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {myApps.map(app => (
          <AppCard key={app.id} app={app}/>
        ))}
      </div>

    </div>
    );
};

export default MyInstallation;