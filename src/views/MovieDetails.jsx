import {
  useParams,
  useLocation,
  Routes,
  NavLink,
  Route,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { routes } from '../routes';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { getMovieDetail } from 'api/movie-service';
import { Reviews } from 'components/Reviews/Reviews';
import { Cast } from 'components/Cast/Cast';
// import { getCocktailDetail } from "../api/cocktail-service";

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    const getMovie = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetail(movieId);
        setMovie(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  const backPath = location.state?.from ?? routes.HOME;

  return (
    <>
      <h3>CocktailDetail</h3>
      <GoBackBtn path={backPath} />
      {movie && <MovieInfo {...movie} />}

      <NavLink to={'cast'}>Cast</NavLink>
      <NavLink to={'reviews'}>Reviews</NavLink>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      {loading && <Loader />}
    </>
  );
};
