import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function Author({ username }) {
  return (
    <h4 className={styles.author}>{`@${username}`}</h4>
  );
}

Author.propTypes = {
  username: PropTypes.string.isRequired,
};
