import React, { useState } from 'react';
import apps from '../../app.json'
import AppCard from '../../components/AppCard/AppCard';



const AllApps = () => {
const [search,setSearch] = useState("");
   const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );
    return (
       <div className="max-w-6xl mx-auto">

      <div className="flex justify-between items-center my-8">
        <h1 className="text-2xl font-bold">
          All Apps ({filteredApps.length})
        </h1>

        <input
          type="text"
          placeholder="Search app..."
          className="border px-4 py-2 rounded"
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>

      {filteredApps.length === 0 && (
        <p className="text-center text-gray-500">
          No App Found
        </p>
      )}

      <div className="grid md:grid-cols-4 gap-6">
        {filteredApps.map(app => (
          <AppCard key={app.id} app={app}/>
        ))}
      </div>

    </div>
    );
};

export default AllApps;