import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Author from '../Author';
import Description from '../Description';
import styles from './style.module.css';

export default function PostCard({
  id, title, username, description,
}) {
  return (
    <div className={styles['post-card']}>
      <a href={`/post/${id}`}>
        <Title title={title} />
      </a>
      {(username) && <Author username={username} />}
      <a href={`/post/${id}`}>
        {(description) && <Description description={description} />}
      </a>

    </div>
  );
}

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string,
  description: PropTypes.string,
};

PostCard.defaultProps = {
  username: null,
  description: null,
};
