import PropTypes from 'prop-types';

import notFound from 'images/notFound.png';
import s from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <>
      <ul className={s.list}>
        {cast.map(({ id, original_name, profile_path }) => (
          <li key={id}>
            {profile_path ? (
              <>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                  alt={original_name}
                />
                <p>{original_name}</p>
              </>
            ) : (
              <>
                <img
                  src={notFound}
                  alt={original_name}
                  width={300}
                  height={450}
                />
                <p>{original_name}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_name: PropTypes.string,
      profile_path: PropTypes.string,
    }).isRequired
  ),
};
export default Cast;
