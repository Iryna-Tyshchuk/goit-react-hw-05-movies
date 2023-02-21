import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '56d4ceaf5914372ad31f8531463bd1af';
// const IMAGE_PATH = `https://image.tmdb.org/t/p/w500/`;

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

// export const getTrendingCocktails = () => {
//   return Promise.all(
//     urls.map(async (url) => {
//       const { data } = await axios.get(url);
//       const { strDrinkThumb, strDrink, strGlass, idDrink } = data.drinks[0];
//       return { strDrinkThumb, strDrink, strGlass, idDrink };
//     })
//   );
// };
