import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'api/movie-service';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setMovies(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <section>
        <h3>Trending films</h3>
        {movies.length > 0 && <MoviesList movies={movies} />}
      </section>
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      {loading && <Loader />}
    </>
  );
};
export default Home;
