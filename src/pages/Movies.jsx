import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MovieList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useFetchMoviesByQuery } from 'hooks/useFetchMoviesByQuery';

const Movies = () => {
  const { onHandelSubmit, movies, isLoading, error } = useFetchMoviesByQuery();
  return (
    <>
      <SearchForm onHandelSubmit={onHandelSubmit} />
      {isLoading && <Loader />}
      {error && <p>Oops, some error occured...</p>}
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
