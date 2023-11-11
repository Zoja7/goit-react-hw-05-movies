import Loader from 'components/Loader/Loader';
import { useFetchMovieDetails } from 'hooks';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useRef } from 'react';

const MovieDetails = () => {
  const { movie, isLoading, error } = useFetchMovieDetails();
  const location = useLocation();
  const goBackLink = useRef(location?.state?.from ?? '/');

  return (
    <>
      <Link to={goBackLink.current}>
        <button>GoBack</button>
      </Link>
      {isLoading && <Loader />}
      {error && <p>Oops, some error occured...</p>}
      {movie && <MovieInfo movie={movie} />}
      <Suspense fallback={<Loader />}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
