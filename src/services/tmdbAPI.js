import axios from 'axios';
import { setLinks } from 'adapters/transformData';

const tmdbAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY_V4}`,
  },
});

export const getMovies = async movieId => {
  const response = await tmdbAPI.get(`/movie/${movieId}?&language=es-spa`);
  return setLinks(response);
};

export const getPopular = async () => {
  const response = await tmdbAPI.get(`/movie/popular?&language=es-spa&page=1`);

  return setLinks(response);
};

export const getTopRated = async () => {
  const response = await tmdbAPI.get(
    `/movie/top_rated?&language=es-spa&page=1`
  );

  return setLinks(response);
};

export const getSelectedList = async ({ id, url }) => {
  const response = await tmdbAPI.get(
    url ||
      `/discover/movie?&language=es-spa&sort_by=popularity.desc&with_genres=${id}&page=1`
  );

  return setLinks(response);
};

export const getGenres = async () => {
  const response = await tmdbAPI.get(`/genre/movie/list?&language=es-spa`);

  return setLinks(response);
};
