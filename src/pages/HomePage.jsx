import Loader from 'components/Loader/Loader';
import css from './HomePage.module.css';
import { useFetchTrendingMovies } from 'hooks';
import MoviesList from 'components/MovieList/MoviesList';

const HomePage = () => {
  const { movies, isLoading, error } = useFetchTrendingMovies();

  return (
    <div className={css.homePageWrapper}>
      {isLoading && <Loader />}
      {error && <p className={css.errorBage}>Oops, some error occured...</p>}
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default HomePage;
