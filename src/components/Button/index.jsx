import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function Button({ children, onClick }) {
  return (
    <button className={styles.button} type="submit" onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
