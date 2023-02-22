// import { formatDate } from '../helpers/formatDate';
// import PropTypes from 'prop-types';

export const MovieInfo = ({
  //   id,
  title,
  vote_average,
  //   vote_count,
  //   popularity,
  //   original_title,
  overview,
  genres,
  poster_path,
}) => {
  const normalizedVote = vote_average.toFixed(1);
  const genresStr = genres.map(el => el.name).join(', ');
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
      </div>

      <div>User Score: {normalizedVote}</div>
      <div>Overview: {overview}</div>
      <div>Genres: {genresStr}</div>
    </>
  );
};
