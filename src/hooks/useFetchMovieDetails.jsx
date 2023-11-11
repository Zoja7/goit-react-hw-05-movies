import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/api';

export const useFetchMovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getMovieInfo(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return {
    movie,
    isLoading,
    error,
  };
};
