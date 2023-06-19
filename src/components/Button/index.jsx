import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function Button({
  children, id, onClick, color,
}) {
  return (
    <button
      id={id}
      className={`${styles.button} ${styles[color]}`}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  id: '',
  color: 'default',
};
