import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import notFound from 'img/not_found.png.jpg';
const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.moviesListWrapper}>
      {movies.map(({ id, title, name, original_title, poster_path }) => (
        <Link
          className={css.linkStyle}
          key={id}
          to={`/movies/${id}`}
          state={{ from: location }}
        >
          <li className={css.movieListItem}>
            <img
              className={css.image}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : notFound
              }
              alt={title || name || original_title}
              width={300}
            />
            <h3 className={css.movieListTitle}>
              {title || name || original_title}
            </h3>
          </li>
        </Link>
      ))}
    </ul>
  );
};
export default MoviesList;
