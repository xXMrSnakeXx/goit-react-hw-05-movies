import { useState, useEffect, lazy } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Routes,
  Route,
} from 'react-router-dom';

import { movieDetails } from 'services/api';
import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import s from '../components/MovieDetails/MovieDetails.module.css';

const CastPage = lazy(() => import('./CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    movieDetails(movieId)
      .then(results => setMovie(results))
      .catch(error => setError(error.message));
  }, [movieId]);
  const navigate = useNavigate();
  const location = useLocation();
  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <>
      <button type="button" className={s.button} onClick={onGoBack}>
        Go back
      </button>
      {!movie && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      {error && <p>Oops, something went wrong</p>}
      <Routes>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Routes>
    </>
  );
};
export default MovieDetailsPage;
