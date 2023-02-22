import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchFilmsByQuery } from 'api/movie-service';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await searchFilmsByQuery(query);

        setMovies(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  return (
    <>
      <h3>Search Movies</h3>

      <SearchForm />

      {!!movies?.length && <MoviesList movies={movies} />}
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      {loading && <Loader />}
    </>
  );
};
