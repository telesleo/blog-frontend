import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Author from '../Author';
import Description from '../Description';
import styles from './style.module.css';

export default function PostCard({
  id, title, username, description,
}) {
  return (
    <div className={styles['post-card']}>
      <Link to={`/post/${id}`}>
        <Title title={title} />
      </Link>
      {(username) && <Author username={username} />}
      <Link to={`/post/${id}`}>
        {(description) && <Description description={description} />}
      </Link>
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
