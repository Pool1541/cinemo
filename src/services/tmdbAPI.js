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
