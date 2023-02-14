import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const tmdbAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
});

export const getMovies = async movieId => {
  const response = await tmdbAPI.get(
    `/${movieId}?api_key=${apiKey}&language=es-spa`
  );
  return response.data;
};

export const getGenres = async () => {
  const response = await tmdbAPI.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-spa`
  );

  return response.data;
};

export const getPopular = async () => {
  const response = await tmdbAPI.get(
    `/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  return response.data;
};
