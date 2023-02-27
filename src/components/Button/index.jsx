import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function Button({ children, id, onClick }) {
  return (
    <button id={id} className={styles.button} type="submit" onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
