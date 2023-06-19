import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import styles from './style.module.css';

export default function CommentList({ comments }) {
  return (
    <div id={styles['comment-list']}>
      {
        (comments) && (
          comments.map((comment) => <Comment key={comment.id} comment={comment} />)
        )
      }
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
