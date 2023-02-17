import React from 'react';
import PropTypes from 'prop-types';

export default function Author({ username }) {
  return (
    <h4>{`@${username}`}</h4>
  );
}

Author.propTypes = {
  username: PropTypes.string.isRequired,
};
