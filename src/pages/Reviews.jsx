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
  if (review.length === 0) {
    return (
      <p className={css.noReviewInformation}>
        <b>No review information available</b>
      </p>
    );
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
              <h2 className={css.reviewAuthor}>{author}</h2>
              <h3 className={css.reviewDate}>Date: {formattedDate}</h3>
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
