import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statList}>
      <li className={css.statItem}>
        <p className={css.text}>Good: {good}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.text}>Neutral: {neutral}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.text}>Bad: {bad}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.text}>Total: {total}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.text}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
