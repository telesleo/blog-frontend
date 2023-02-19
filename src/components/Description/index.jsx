import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function Description({ description }) {
  return (
    <p title={description} className={styles.description}>{description}</p>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};
