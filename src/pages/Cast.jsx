import { useFetchMovieCast } from 'hooks';
import css from './Cast.module.css';

const Cast = () => {
  const { cast, isLoading, error } = useFetchMovieCast();

  const defaultImg = `<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>`;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!cast || cast.length === 0) {
    return <p>No cast information available</p>;
  }

  const { name, original_name, profile_path, character, popularity } = cast[0];

  return (
    <div className={css.castContainer}>
      <div className={css.castWrapper}>
        {' '}
        <img
          className={css.castImage}
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : defaultImg
          }
          alt={name || original_name}
          width={250}
        />
        <div className={css.castInfo}>
          <h1> {name || original_name}</h1>
          <h3>Character: {character}</h3>
          <p>
            <b>Popularity:</b> {popularity}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cast;
