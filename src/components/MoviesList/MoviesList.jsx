import PropTypes from 'prop-types';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { StyledMovieList } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies &&
        movies.map(film => {
          return <MoviesItem key={film.id} {...film} />;
        })}
    </StyledMovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  // дописати пропс
};
