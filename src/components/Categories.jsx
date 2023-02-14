import { useQuery } from 'react-query';
import { getGenres, getPopular } from '../services/tmdbAPI';

function Categories() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  });

  const { data: popular } = useQuery({
    queryKey: ['popular'],
    queryFn: getPopular,
  });
  console.log(popular);

  const categories = data.genres;

  return (
    <>
      <h3>Discover</h3>
      <div>Populars</div>

      <h3>Genres</h3>
      <p>fasd</p>
      <ul>
        {categories.map(cat => (
          <div key={cat.id}>{cat.name}</div>
        ))}
      </ul>
    </>
  );
}

export default Categories;
