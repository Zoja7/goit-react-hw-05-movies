import notFound from 'img/not_found.png.jpg';
import { Link } from 'react-router-dom';

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
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : notFound
        }
        alt={title || original_title}
      />
      <div>
        <h1>{title || original_title}</h1>
        <p>{release_date}</p>
        <h2>User score: {vote_average}</h2>
        <code>Overview: {overview}</code>
        <p>Genres: {allGenres}</p>
      </div>
      <div>
        <p>Additional info</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
    </div>
  );
};

export default MovieInfo;
