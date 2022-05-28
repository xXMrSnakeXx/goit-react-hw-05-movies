import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';

import { searchMovies } from 'services/api';
import Loader from 'components/Loader/Loader';
import MovieList from '../components/MovieList/MovieList';
import s from '../components/AppBar/AppBar.module.css';

const MoviePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
  };
  const onFormSubmit = e => {
    e.preventDefault();

    const newQuery = e.target.elements.query.value.toLowerCase();
    if (newQuery.trim() === '') {
      toast.error("Please, enter correct movie's name");
      return;
    }
    setSearchParams({ query: newQuery });
  };

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');
      searchMovies(newQuery)
        .then(results => {
          results.length !== 0
            ? setMovies([...results])
            : toast.error(
                "Sorry, we didn't find any movies matching your search. Please, try again"
              );
        })
        .catch(error => setError(error.message));
      setSearchQuery('');
    }
  }, [searchParams]);
  return (
    <>
      <form className={s.form} onSubmit={onFormSubmit}>
        <input
          type="text"
          name="query"
          value={searchQuery}
          onChange={handleChange}
          className={s.input}
          autoFocus={true}
        />
        <button type="submit" className={s.button}>
          <FcSearch className={s.icon} />
        </button>
      </form>
      {!movies && <Loader />}
      {movies && <MovieList movies={movies} />}
      {error && <p>Oops, something went wrong</p>}
    </>
  );
};
export default MoviePage;
