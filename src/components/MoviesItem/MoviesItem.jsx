import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      </Link>
    </li>
  );
};
MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
