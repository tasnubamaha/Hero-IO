import React, { useState } from 'react';
import { useParams } from 'react-router';
import apps from '../../app.json'


const AppDetails = () => {
   const { id } = useParams();

  const app = apps.find(a => a.id == id);

  const [installed,setInstalled] = useState(() => {
  const stored = JSON.parse(localStorage.getItem("installed")) || [];
  return stored.includes(app.id);
});

  const handleInstall = () => {

    setInstalled(true);

    let installedApps =
      JSON.parse(localStorage.getItem("installed")) || [];

    installedApps.push(app.id);

    localStorage.setItem(
      "installed",
      JSON.stringify(installedApps)
    );
  };

  if(!app){
    return <p className="text-center mt-10">App Not Found</p>
  }

  return (
    <div className="max-w-5xl mx-auto py-10">

      <div className="flex gap-10">

        <img
          src={app.image}
          alt={app.title}
          className="w-40"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {app.title}
          </h1>

          <p className="text-gray-600">
            {app.companyName}
          </p>

          <p className="mt-2">
            ⭐ {app.ratingAvg}
          </p>

          <p>
            Downloads: {app.downloads}
          </p>

          <p>
            Reviews: {app.reviews}
          </p>

          <button
            onClick={handleInstall}
            disabled={installed}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded"
          >
            {installed ? "Installed" : "Install"}
          </button>

        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">
          Description
        </h2>

        <p className="text-gray-600">
          {app.description}
        </p>
      </div>

    </div>
  );
};

export default AppDetails;