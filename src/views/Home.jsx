// import { CocktailsList } from "../components/CocktailsList";
// import { Section } from "../components/Section";

import { getTrendingMovies } from 'api/movie-service';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        console.log(data);
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
