import { getMovieCredits } from 'api/movie-service';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const data = await getMovieCredits(movieId);
        setCast(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      {!!cast?.length && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => {
            const poster = profile_path
              ? `https://image.tmdb.org/t/p/w300${profile_path}`
              : 'https://via.placeholder.com/395x574?text=Sorry+No+Poster';
            return (
              <li key={id}>
                <img src={poster} alt={name} />
                <span>Actor name: {name}</span>
                <span>Character: {character}</span>
              </li>
            );
          })}
        </ul>
      )}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      {loading && <Loader />}
    </div>
  );
};
