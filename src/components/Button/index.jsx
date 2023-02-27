import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, onClick }) {
  return (
    <button type="submit" onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
