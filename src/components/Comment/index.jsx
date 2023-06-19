import React from 'react';
import PropTypes from 'prop-types';
import Author from '../Author';
import Info from '../Info';
import styles from './style.module.css';
import getDate from '../../utils/getDate';

export default function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <div className={styles['comment-info']}>
        <div className={styles['user-info']}>
          <h4>{ comment.user.name }</h4>
          <Author username={comment.user.username} className={styles.username} />
        </div>
        <Info info={getDate(comment.created_at)} />
      </div>
      <p className={styles.content}>{ comment.content }</p>
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
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};
