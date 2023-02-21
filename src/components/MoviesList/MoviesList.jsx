import PropTypes from 'prop-types';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(film => {
          return <MoviesItem key={film.id} {...film} />;
        })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  // дописати пропс
};
