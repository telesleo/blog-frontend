import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

export default function Textarea({
  placeholder, value, onChange, rows,
}) {
  return (
    <textarea
      className={styles.textarea}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

Textarea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  rows: 7,
};
