import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ title }) {
  return (
    <h2>{title}</h2>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
