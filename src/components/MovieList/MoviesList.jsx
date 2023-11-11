import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';
const MoviesList = ({ movies }) => {
  return (
    <ul className={css.moviesListWrapper}>
      {movies.map(movie => (
        <li key={movie.id} className="moviesListItem">
          <Link to={`/movies/${movie.id}`}>
            <p className="moviesListTitle">{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
