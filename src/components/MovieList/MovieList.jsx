import PropTypes from 'prop-types';

import MovieListItem from 'components/MovieListItem/MovieListItem';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
export default MovieList;
