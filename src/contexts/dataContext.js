import { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getPopular } from '../services/tmdbAPI';

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  // peliculas almacena el objeto que retorna useQuery
  const [peliculas, setPeliculas] = useState([]);
  // queryValues almacena la queryfn y querykey que se pasará como parámetro a la función getData.
  // setQueryValues se puede ejecutar desde cualquier componente para cambiar la queryfn y queryKey.
  const [queryValues, setQueryValues] = useState({
    fn: getPopular,
    key: 'movies',
  });

  // Al ejecutar getData se le pasan los valores predeterminados de queryValues, estos cambiarán al ejecutar setQueryValues en
  // cualquier otro componente que lo requiera y cambiará el valor de todas las constantes del objeto.
  const { movies, isError, error, isLoading, isSuccess } = getData(queryValues);

  // getData ejecuta useQuery con parámetros dinámicos cada vez que se llama a la función y retorna un objeto.
  function getData({ fn, key }) {
    const {
      data: movies,
      isError,
      error,
      isLoading,
      isSuccess,
    } = useQuery({
      queryKey: [key],
      queryFn: fn,
    });
    return { movies, isError, error, isLoading, isSuccess };
  }

  // const {
  //   data: movies,
  //   isError,
  //   error,
  //   isLoading,
  //   isSuccess,
  // } = useQuery({
  //   queryKey: ['movies'],
  //   queryFn: () => changeFunction({}),
  // });

  // function changeFunction({name: 'genres' , id: 5}) {
  //   switch (name) {
  //     case 'genres':
  //       return getSelectedList(id);
  //     case 'populars':
  //       return getPopular();
  //     case 'top rated':
  //       return getTopRated();
  //     default:
  //   }
  // }

  // UseEffect establecerá el valor de películas una vez que la constante movies tenga la respuesta del useQuery.
  useEffect(() => {
    if (isSuccess) setPeliculas(movies);
  }, [movies]);

  // Modal State:
  const [modal, setModal] = useState(true);

  return (
    <DataContext.Provider
      value={{
        peliculas,
        isError,
        isLoading,
        error,
        isSuccess,
        queryValues,
        modal,
        setModal,
        setQueryValues,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
