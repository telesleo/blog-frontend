import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ description }) {
  return (
    <p>{description}</p>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};
