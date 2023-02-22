import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';
import { Layout } from 'layout/Layout/Layout';
import { Home, MovieDetails, Movies } from 'views';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { GlobalStyle } from 'styles/GlobalStyle';
import { StyledApp } from './App.styled';

export const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIE_ID} element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Routes>
      <GlobalStyle />
    </StyledApp>
  );
};
