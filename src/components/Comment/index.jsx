import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import Author from '../Author';

export default function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <div className={styles['user-info']}>
        <h4>{ comment.user.name }</h4>
        <Author username={comment.user.username} className={styles.username} color="gray" />
      </div>
      <p>{ comment.content }</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
