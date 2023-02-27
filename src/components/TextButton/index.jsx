import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function TextButton({ children, onClick }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>{children}</button>
  );
}

TextButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
