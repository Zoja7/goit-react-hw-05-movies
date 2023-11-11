import { useFetchMovieReview } from 'hooks';
import moment from 'moment';

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

  const { author, author_details, content, created_at } = review[0];
  const { avatar_path } = author_details;
  const formattedDate = moment(created_at).format('MMMM D, YYYY h:mm A');
  // const numericRating = typeof rating === 'number' ? Number(rating) : rating;
  //   const numericRating = parseInt(rating, 10);

  return (
    <div>
      <img
        src={
          avatar_path
            ? `https://image.tmdb.org/t/p/w500${avatar_path}`
            : defaultImg
        }
        alt={author}
        width={250}
      />
      <div>
        <h2>{author}</h2>
        <h3>Date: {formattedDate}</h3>
        {/* <p>Rating: {numericRating}</p> */}
        <code>
          <b>Review:</b> {content}
        </code>
      </div>
    </div>
  );
};
export default Review;
