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
      id: PropTypes.string,
      created_at: PropTypes.string,
      content: PropTypes.string,
      author: PropTypes.string,
    })
  ).isRequired,
};
export default Reviews;
