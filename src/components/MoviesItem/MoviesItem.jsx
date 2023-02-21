import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const MoviesItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={'/' + routes.MOVIES + '/' + id} state={{ from: location }}>
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
