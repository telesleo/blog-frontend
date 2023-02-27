import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function PostTitle({ title }) {
  return (
    <h1 className={styles.title}>{title}</h1>
  );
}

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
