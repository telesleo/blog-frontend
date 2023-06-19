import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export default function Author({ username, className, color }) {
  return (
    <Link to={`/${username}`}>
      <h4 className={`${styles.author} ${className} ${styles[color]}`}>{`@${username}`}</h4>
    </Link>
  );
}

Author.propTypes = {
  username: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};

Author.defaultProps = {
  className: '',
  color: 'green',
};
