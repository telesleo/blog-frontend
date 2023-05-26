import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export default function Author({ username }) {
  return (
    <Link to={`/${username}`}>
      <h4 className={styles.author}>{`@${username}`}</h4>
    </Link>
  );
}

Author.propTypes = {
  username: PropTypes.string.isRequired,
};
