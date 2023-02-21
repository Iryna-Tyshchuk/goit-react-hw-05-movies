import { Layout } from 'layout/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, MovieDetails, Movies } from 'views';
import { routes } from '../routes';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIE_ID} element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Routes>
    </div>
  );
};
