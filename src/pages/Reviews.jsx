import { useFetchMovieReview } from 'hooks';
import moment from 'moment';
import css from './Review.module.css';

const Review = () => {
  const { review, isLoading, error } = useFetchMovieReview();

  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`;
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error:{error}</p>;
  }
  if (!review || review.length === 0) {
    return <p>No review information available</p>;
  }

  return (
    <div className={css.reviewContainer}>
      {review.map(reviewItem => {
        const { author, author_details, content, created_at } = reviewItem;
        const { avatar_path } = author_details;
        const formattedDate = moment(created_at).format('MMMM D, YYYY h:mm A');

        return (
          <div key={reviewItem.id} className={css.reviewWrapper}>
            <img
              src={
                avatar_path
                  ? `https://image.tmdb.org/t/p/w500${avatar_path}`
                  : defaultImg
              }
              alt={author}
              width={250}
            />
            <div className={css.reviewInfo}>
              <h2>{author}</h2>
              <h3>Date: {formattedDate}</h3>
              <code className={css.reviewText}>
                <b>Review:</b> {content}
              </code>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Review;
