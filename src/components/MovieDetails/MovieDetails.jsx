import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import notFound from 'images/notFound.png';
import s from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  const genresAll = genres.map(genre => genre.name).join(', ');
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
      <div className={s.wrapper}>
        {poster_path ? (
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={original_title}
          />
        ) : (
          <img className={s.img} src={notFound} alt={original_title} />
        )}

        <div className={s.info}>
          <h1>
            {original_title} ({release_date})
          </h1>
          <p>User Score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresAll}</p>
        </div>
      </div>
      <div className={s.additionalInfo}>
        <p className={s.text}>Additional information</p>
        <NavLink to="cast" className={s.link} state={location.state}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={s.link} state={location.state}>
          Reviews
        </NavLink>
      </div>
    </>
  );
};
MovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
export default MovieDetails;
