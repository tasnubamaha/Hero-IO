import { Link } from "react-router-dom";

const AppCard = ({ app }) => {

  // format downloads (5B, 2M etc.)
  const formatDownloads = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  return (
    <Link to={`/apps/${app.id}`}>
      <div className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition w-full max-w-50">

        {/* IMAGE */}
        <div className="bg-gray-200 pt-2 pb-2">
          <img
          src={app.image}
          alt={app.title}
          className="w-20 h-20 object-cover rounded-lg mb-3 ml-12 mt-4"
        />
        </div>

        {/* TITLE */}
        <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-2 truncate">
          {app.title}
        </h3>

        {/* BOTTOM */}
        <div className="flex justify-between items-center text-xs">

          {/* DOWNLOAD */}
          <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded">
            {formatDownloads(app.downloads)}
          </span>

          {/* RATING */}
          <span className="bg-orange-100 text-orange-500 px-2 py-0.5 rounded flex items-center gap-1">
            ⭐ {app.ratingAvg}
          </span>

        </div>
      </div>
    </Link>
  );
};

export default AppCard;