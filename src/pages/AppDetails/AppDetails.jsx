import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apps from '../../app.json';
import download from '../../assets/icon-downloads.png'
import icons from '../../assets/icon-ratings.png'
import reviews from '../../assets/icon-review.png'
import AppNotFound from '../../pages/AppNotFound/AppNotFound'

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const app = apps.find(a => a.id === parseInt(id));

  const [installed, setInstalled] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("installed")) || [];
    return stored.includes(app?.id);
  });

  if (!app) {
  return <AppNotFound />;
}


  const formatDownloads = (num) => {
  if (num >= 1_000_000_000) { // Billion
    const value = num / 1_000_000_000;
    return Number.isInteger(value) ? value + "B" : value.toFixed(1) + "B";
  } else if (num >= 1_000_000) { // Million
    const value = num / 1_000_000;
    return Number.isInteger(value) ? value + "M" : value.toFixed(1) + "M";
  } else if (num >= 1_000) { // Thousand
    const value = num / 1_000;
    return Number.isInteger(value) ? value + "K" : value.toFixed(1) + "K";
  } else {
    return num.toString();
  }
};


  const handleInstall = () => {
    if (!installed) {
      setInstalled(true);
      let installedApps = JSON.parse(localStorage.getItem("installed")) || [];
      installedApps.push(app.id);
      localStorage.setItem("installed", JSON.stringify(installedApps));

      // Navigate to MyInstallation page
      navigate("/installation");
    }
  };

 

  const maxRating = Math.max(...app.ratings.map(r => r.count));

  return (
    <div className="max-w-5xl mx-auto py-10">

      {/* TOP SECTION */}
      <div className="flex gap-6 items-center border-b pb-6">

        {/* ICON */}
       <div className='bg-gray-200 pt-4 pb-4 pl-4 pr-4 rounded-xl'>
         <img
          src={app.image}
          alt={app.title}
          className="w-28 h-28 object-contain"
        />
       </div>

        {/* INFO */}
        <div className="flex-1">
          <h1 className="text-xl font-bold text-black">{app.title}</h1>
          <p className="text-sm text-gray-500">
            Developed by{" "}
            <span className="text-blue-600 font-medium">{app.companyName}</span>
          </p>

          {/* STATS */}
          <div className="flex items-center gap-12 mt-5">
            <div className="text-center">
              <img src={download} className='ml-2' alt="" />
              <p className="text-xs text-gray-500 mt-3">Downloads</p>
              <p className="font-semibold text-lg text-[#627382] mt-2">
                {formatDownloads(app.downloads)}
              </p>
            </div>

            <div className="text-center">
              <img src={icons} className='ml-5' alt="" />
              <p className="text-xs text-gray-500 mt-3">Average Ratings</p>
              <p className="font-semibold text-lg text-[#627382] mt-2">{app.ratingAvg}</p>
            </div>

            <div className="text-center">
              <img src={reviews} className='ml-5' alt="" />
              <p className="text-xs text-gray-500 mt-3">Total Reviews</p>
              <p className="font-semibold text-lg text-[#627382] mt-2">{(app.reviews / 1000).toFixed(0)}K</p>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className="mt-5 bg-green-500 text-white text-sm px-5 py-2 rounded"
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* RATINGS */}
      <div className="mt-6 border-b pb-6">
        <h2 className="text-xl font-bold text-black mb-4">Ratings</h2>
        <div className="space-y-3">
          {app.ratings.slice().reverse().map((r, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-12 text-xs text-gray-600">{r.name}</span>
              <div className="flex-1 h-3 bg-gray-200 rounded">
                <div
                  className="h-3 bg-orange-500 rounded"
                  style={{ width: `${(r.count / maxRating) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-6">
        <h2 className="text-xl text-black font-bold mb-3">Description</h2>
        <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;