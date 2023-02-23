import PropTypes from 'prop-types';

export const MovieInfo = ({
  //   id,
  title,
  vote_average,
  release_date,
  original_title,
  overview,
  genres,
  poster_path,
}) => {
  const normalizedVote = vote_average.toFixed(1);
  const genresStr = genres.map(el => el.name).join(', ');
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : 'https://via.placeholder.com/395x574?text=Sorry+No+Poster';
  const date = new Date(release_date);
  const releaseYear = date.getFullYear();
  return (
    <>
      <div>
        <img src={poster} alt={title} />
      </div>
      <h3>
        {original_title}({releaseYear})
      </h3>
      <div>User Score: {normalizedVote}</div>
      <div>Overview: {overview}</div>
      <div>Genres: {genresStr}</div>
    </>
  );
};

MovieInfo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  poster_path: PropTypes.string.isRequired,
};
