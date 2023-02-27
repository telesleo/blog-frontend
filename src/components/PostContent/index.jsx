import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function PostContent({ children }) {
  return (
    <p className={styles['post-content']}>{children}</p>
  );
}

PostContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
