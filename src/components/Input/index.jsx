import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ placeholder, value, onChange }) {
  return (
    <input placeholder={placeholder} value={value} onChange={onChange} />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
