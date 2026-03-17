import { Link } from "react-router-dom";

const AppCard = ({ app }) => {

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

  return (
    <Link to={`/apps/${app.id}`}>
      <div className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition w-full max-w-50 ">

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