import notFound from 'img/not_found.png';
import { NavLink } from 'react-router-dom';
import css from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  const {
    title,
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  const allGenres = genres.map(genre => genre.name).join(', ');
  return (
    <div className={css.movieInfoWrapper}>
      <img
        className={css.movieInfoImage}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : notFound
        }
        alt={title || original_title}
      />
      <div className={css.movieInfoContentWrapper}>
        <h1 className={css.movieInfoTitle}>{title || original_title}</h1>
        <p>{release_date}</p>
        <h2>User score: {vote_average}</h2>
        <code>
          <b>Overview:</b> {overview}
        </code>
        <p>
          <b>Genres: </b>
          {allGenres}
        </p>
      </div>
      <div className={css.movieInfoAdditionalContentWrapper}>
        <p>
          <b>Additional info</b>
        </p>
        <NavLink className={css.movieCast} to="cast">
          Cast
        </NavLink>
        <NavLink className={css.movieReview} to="reviews">
          Reviews
        </NavLink>
      </div>
    </div>
  );
};

export default MovieInfo;
