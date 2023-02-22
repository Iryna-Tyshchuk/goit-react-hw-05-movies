import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const MoviesItem = ({ id, title, poster_path }) => {
  const location = useLocation();
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : 'https://via.placeholder.com/395x574?text=Sorry+No+Poster';
  return (
    <li>
      <Link to={'/' + routes.MOVIES + '/' + id} state={{ from: location }}>
        <img src={poster} alt={title} />
        {title}
        {/* <img src={strDrinkThumb} alt={strDrink} />
        <div className="px-2 py-4 flex flex-col gap-2">
          <h2 className="text-2xl font-medium">{strDrink}</h2>
          <span className="block text-sm text-gray-500">{strGlass}</span>
        </div> */}
      </Link>
    </li>
  );
};
