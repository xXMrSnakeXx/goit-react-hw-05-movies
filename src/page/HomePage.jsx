import { useState, useEffect } from 'react';

import { getTrending } from 'services/api';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getTrending()
      .then(results => setMovies([...results]))
      .catch(error => setError(error.message));
  }, []);
  return (
    <>
      <h2>Trending movies</h2>
      {!movies && <Loader />}
      {movies && <MovieList movies={movies} />}
      {error && <p>Oops, something went wrong</p>}
    </>
  );
};
export default HomePage;
