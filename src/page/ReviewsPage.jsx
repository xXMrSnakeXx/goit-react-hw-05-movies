import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { movieReviews } from 'services/api';
import Loader from 'components/Loader/Loader';
import Reviews from 'components/Reviews/Reviews';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    movieReviews(movieId)
      .then(results => setReviews(results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {!reviews && <Loader />}
      {reviews && <Reviews reviews={reviews} />}
      {error && <p>Oops, something went wrong</p>}
    </>
  );
};
export default ReviewsPage;
