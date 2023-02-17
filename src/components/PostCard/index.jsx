import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Author from '../Author';
import Description from '../Description';

export default function PostCard({
  id, title, username, description,
}) {
  return (
    <a href={`/post/${id}`}>
      <Title title={title} />
      <Author username={username} />
      <Description description={description} />
    </a>
  );
}

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
