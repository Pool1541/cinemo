import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const tmdbAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export const getMovies = async movieId => {
  const response = await tmdbAPI.get(
    `/movie/${movieId}?api_key=${apiKey}&language=es-spa`
  );
  return response.data;
};

export const getPopular = async () => {
  const response = await tmdbAPI.get(
    `/movie/popular?api_key=${apiKey}&language=es-spa&page=1`
  );

  return response.data;
};

export const getTopRated = async () => {
  const response = await tmdbAPI.get(
    `/movie/top_rated?api_key=${apiKey}&language=es-spa&page=1`
  );

  return response.data;
};

export const getSelectedList = async id => {
  const response = await tmdbAPI.get(
    `/discover/movie?api_key=${apiKey}&language=es-spa&sort_by=popularity.desc&with_genres=${id}&page=1`
  );

  return response.data;
};

export const getGenres = async () => {
  const response = await tmdbAPI.get(
    `/genre/movie/list?api_key=${apiKey}&language=es-spa`
  );

  return response.data;
};
