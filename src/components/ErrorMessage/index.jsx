import React from 'react';
import PropTypes from 'prop-types';
import styles from './error-message.module.css';

export default function ErrorMessage({ message }) {
  return (
    (message) && <p className={styles['error-message']}>{message}</p>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: undefined,
};
