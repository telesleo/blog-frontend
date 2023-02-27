import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function Info({ info }) {
  return (
    <p className={styles.info}>{info}</p>
  );
}

Info.propTypes = {
  info: PropTypes.number.isRequired,
};
