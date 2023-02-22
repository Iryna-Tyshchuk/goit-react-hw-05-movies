import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';
import { Layout } from 'layout/Layout/Layout';

// import Home from 'views/Home';
// import Movies from 'views/Movies';
// import MovieDetails from 'views/MovieDetails';
// import Cast from 'views/Cast/Cast';
// import Reviews from 'views/Reviews/Reviews';

import { GlobalStyle } from 'styles/GlobalStyle';
import { StyledApp } from './App.styled';

const LazyHomePage = lazy(() => import('views/Home'));
const LazyMoviesPage = lazy(() => import('views/Movies'));
const LazyMovieDetailsPage = lazy(() => import('views/MovieDetails'));
const LazyCastPage = lazy(() => import('views/Cast/Cast'));
const LazyReviewsPage = lazy(() => import('views/Reviews/Reviews'));

export const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<LazyHomePage />} />
          <Route path={routes.MOVIES} element={<LazyMoviesPage />} />
          <Route path={routes.MOVIE_ID} element={<LazyMovieDetailsPage />}>
            <Route path="cast" element={<LazyCastPage />} />
            <Route path="reviews" element={<LazyReviewsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Routes>

      <GlobalStyle />
    </StyledApp>
  );
};
