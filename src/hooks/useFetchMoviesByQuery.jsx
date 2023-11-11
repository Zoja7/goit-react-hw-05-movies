import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';

export const useFetchMoviesByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('q');
    if (!query) return;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getMoviesByQuery(query);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const onHandelSubmit = value => {
    setSearchParams({ q: value });
  };

  return {
    onHandelSubmit,
    movies,
    isLoading,
    error,
  };
};
