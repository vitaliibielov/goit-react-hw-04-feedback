import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className={css.text}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
