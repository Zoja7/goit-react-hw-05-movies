import axios from 'axios';
import MoviesList from '../components/MovieList/MoviesList';
import Loader from '../components/Loader/Loader';
import { useEffect, useState } from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  const [fetchedMovies, setFetchedMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ message: '' });

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);
        const url =
          'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
        const token =
          'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Njk1NzJiNzQyNGNkZDQ5NGRjNDc4MjA5NjgyZGJhMSIsInN1YiI6IjY1NGRmZDgzNjdiNjEzMDExZjQyODFlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LnnR5V7rqqHQBkoxLHyCephnOfKMR_DEXOzxHhdKeT0';
        const options = {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.get(url, options);
        setFetchedMovies(data);
      } catch (error) {
        setError({ message: error.message });
      } finally {
        setIsLoading(false);
      }
    };

    // Call the function inside useEffect
    fetchMoviesData();
  }, []);

  return (
    <>
      {error.message && (
        <p className={css.errorBage}>
          Oops, some error occured... Error message: {error.message}
        </p>
      )}
      {isLoading && <Loader />}
      {fetchedMovies && <MoviesList movies={fetchedMovies.results} />}
    </>
  );
};

export default HomePage;
