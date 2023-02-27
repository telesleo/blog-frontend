import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function MainTitle({ title }) {
  return (
    <h1 className={styles.title}>{title}</h1>
  );
}

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
