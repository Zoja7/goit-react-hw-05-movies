import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import notFound from 'img/not_found.png.jpg';
const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.moviesListWrapper}>
      {movies.map(({ id, title, name, original_title, poster_path }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          <li className="moviesListItem">
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : notFound
              }
              alt={title || name || original_title}
            />
            <p className="moviesListTitle">{title || name || original_title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};
export default MoviesList;
