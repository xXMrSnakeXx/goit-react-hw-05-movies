import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import notFound from 'images/notFound.png';
import s from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const { poster_path, name, title, id } = movie;
  const location = useLocation();
  return (
    <Link
      to={`/movies/${id}`}
      className={s.link}
      state={{
        from: location.pathname + location.search,
      }}
    >
      <div className={s.item}>
        <li>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : notFound
            }
            alt={title}
            className={s.itemImage}
          />
        </li>
        <div className={s.wrapper}>
          <p className={s.title}>{title ?? name}</p>
        </div>
      </div>
    </Link>
  );
};
MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
export default MovieListItem;
