import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { movieCast } from 'services/api';
import Loader from 'components/Loader/Loader';
import Cast from 'components/Cast/Cast';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    movieCast(movieId)
      .then(results => setCast(results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {!cast && <Loader />}
      {cast && <Cast cast={cast} />}
      {error && <p>Oops, something went wrong</p>}
    </>
  );
};
export default CastPage;
