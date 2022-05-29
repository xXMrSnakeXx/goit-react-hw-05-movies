import PropTypes from 'prop-types';

import notFound from 'images/notFound.png';
import s from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <>
      <ul className={s.list}>
        {cast.map(({ id, original_name, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : notFound
              }
              width={300}
              height={450}
              alt={original_name}
            />
            <p>{original_name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ),
};
export default Cast;
