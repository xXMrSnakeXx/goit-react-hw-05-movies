import PropTypes from 'prop-types';

import s from './Rewievs.module.css';

const Reviews = ({ reviews }) => {
  return (
    <>
      <ul className={s.list}>
        {reviews.map(({ id, created_at, content, author }) => (
          <li key={id}>
            <h2>{author}</h2>
            <span>{created_at}</span>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Reviews;
