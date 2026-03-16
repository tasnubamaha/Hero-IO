import { Link } from "react-router-dom";

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`}>
      <div className="border rounded-xl p-4 hover:shadow-lg transition duration-300">

        <img
          src={app.image}
          alt={app.title}
          className="w-20 h-20 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold text-center">
          {app.title}
        </h3>

        <p className="text-center text-gray-500 text-sm">
          {app.companyName}
        </p>

        <div className="flex justify-between mt-4 text-sm text-gray-600">

          <span>
            ⭐ {app.ratingAvg}
          </span>

          <span>
            ⬇ {app.downloads}
          </span>

        </div>

      </div>
    </Link>
  );
};

export default AppCard;