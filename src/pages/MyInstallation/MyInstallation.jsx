import React, { useState } from "react";
import apps from "../../app.json";
import downloadIcon from '../../assets/icon-downloads.png';
import ratingsIcon from '../../assets/icon-ratings.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyInstallation = () => {
  const [sortAsc, setSortAsc] = useState(true);

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
  // Load installed apps from localStorage on first render
  const [installedApps, setInstalledApps] = useState(() => {
    const installedIds = JSON.parse(localStorage.getItem("installed")) || [];
    return apps.filter(app => installedIds.includes(app.id));
  });

  // Remove app from installed list
   const removeApp = (appToRemove) => {
  const updatedApps = installedApps.filter((a) => a.id !== appToRemove.id);
  setInstalledApps(updatedApps);

  let stored = JSON.parse(localStorage.getItem("installed")) || [];
  stored = stored.filter((id) => id !== appToRemove.id);
  localStorage.setItem("installed", JSON.stringify(stored));

  toast.info(`${appToRemove.title} uninstalled successfully!`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "bg-white shadow-lg border-l-4 border-red-500 rounded-xl",
      bodyClassName: "text-gray-800 font-medium",
      icon: "🗑️",
    });
  
  }
  // Sort apps by size (toggle ascending/descending)
  const sortBySize = () => {
    const sorted = [...installedApps].sort((a, b) =>
      sortAsc ? a.size - b.size : b.size - a.size
    );
    setInstalledApps(sorted);
    setSortAsc(!sortAsc);
  };

  if (installedApps.length === 0)
    return <p className="text-center mt-10 text-gray-600 text-lg">No apps installed yet.</p>;

  return (
    <div className="max-w-5xl mx-auto py-10">

      <div>
        <h1 className="text-black text-3xl font-bold text-center">Your Installed Apps</h1>
        <p className="text-gray-500 mt-4 mb-12 text-center">Explore All Trending Apps on the Market developed by us</p>
      </div>
      {/* Top bar with Sort + Apps Count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-700 font-medium">{installedApps.length} Apps Found</p>
        <button
          onClick={sortBySize}
          className="bg-white btn border-gray-400 text-gray-400 px-4 py-2 rounded hover:bg-gray-600"
          title="Click to toggle sort order"
        >
          Sort by Size {sortAsc ? "▲" : "▼"}
        </button>
      </div>
      {/* Sort Button */}

      {/* Installed apps list */}
      <div className="space-y-4">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="border-2 border-gray-300 rounded-xl flex justify-between items-center p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="h-12 w-12 object-contain rounded-xl"
              />
              <div className="flex flex-col">
                <h1 className="text-black font-semibold">{app.title}</h1>
                <div className="flex items-center gap-4 mt-1">
                  {/* Downloads */}
                  <div className="flex items-center gap-1">
                    <img src={downloadIcon} alt="Downloads" className="h-4 w-4" />
                    <p className="text-green-500 text-sm">{formatDownloads(app.downloads)}</p>
                  </div>

                  {/* Ratings */}
                  <div className="flex items-center gap-1">
                    <img src={ratingsIcon} alt="Ratings" className="h-4 w-4" />
                    <p className="text-orange-400 text-sm">{app.ratingAvg}</p>
                  </div>

                  {/* App Size */}
                  <p className="text-gray-600 text-sm">{app.size} MB</p>
                </div>
              </div>
            </div>

            {/* Uninstall Button */}
            <button
              onClick={() => removeApp(app)}
              className="bg-green-500 hover:bg-green-800 text-white font-bold px-4 py-1 rounded"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
       <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default MyInstallation;