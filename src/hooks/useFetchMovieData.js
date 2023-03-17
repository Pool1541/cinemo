import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/tmdbAPI';

export default function useFecthMovieData() {
  const { movieId } = useParams();
  const {
    data: movieData,
    isError,
    error,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovies(movieId),
  });

  return {
    movieData,
    isError,
    error,
    isLoading,
    isSuccess,
  };
}
