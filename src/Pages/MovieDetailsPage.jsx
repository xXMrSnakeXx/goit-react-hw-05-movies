import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { movieDetails } from 'services/api';
import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    movieDetails(movieId)
      .then(results => setMovie(results))
      .catch(error => setError(error.message));
  }, [movieId]);
  return (
    <>
      {!movie && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      {error && <p>Oops, something went wrong</p>}
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
