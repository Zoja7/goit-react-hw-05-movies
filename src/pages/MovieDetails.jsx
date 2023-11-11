import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ message: '' });

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
        const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Njk1NzJiNzQyNGNkZDQ5NGRjNDc4MjA5NjgyZGJhMSIsInN1YiI6IjY1NGRmZDgzNjdiNjEzMDExZjQyODFlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LnnR5V7rqqHQBkoxLHyCephnOfKMR_DEXOzxHhdKeT0`;

        const options = {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get(url, options);
        setMovieDetails(data);
      } catch (error) {
        setError({ message: error.message });
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {error.message && (
        <p>Oops, some error occurred... Error message: {error.message}</p>
      )}
      {isLoading && <Loader />}
      {movieDetails && (
        <div className={css.movieInfoWrapper}>
          <h2>{movieDetails.original_title}</h2>

          <div className={css.moviePosterWrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.original_title}
            />
          </div>
          <code className={css.overview}>
            <h2>
              <b>OVERVIEW:</b>
            </h2>
            <p>{movieDetails.overview}</p>
          </code>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
