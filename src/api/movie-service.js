import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '56d4ceaf5914372ad31f8531463bd1af';

export const getTrendingMovies = async () => {
  const searchParams = {
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios.get(
    `${BASE_URL}trending/movie/week`,
    searchParams
  );
  const { data } = response;
  return data.results;
};

export const searchFilmsByQuery = async query => {
  const searchParams = {
    params: {
      api_key: API_KEY,
      query,
    },
  };

  const response = await axios.get(`${BASE_URL}search/movie`, searchParams);
  const { data } = response;
  return data.results;
};

export const getMovieDetail = async movieId => {
  const film = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  const { data } = film;
  return data;
};
export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const { data } = response;
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const { data } = response;
  return data.results;
};
