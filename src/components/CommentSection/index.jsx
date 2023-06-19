import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import request from '../../utils/request';
import styles from './style.module.css';
import NewComment from '../NewComment';

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    setComments((await request(`/posts/${postId}/comments`, 'GET')).data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <h2 id={styles['comments-heading']}>Comments</h2>
      <NewComment postId={postId} getComments={getComments} />
      <CommentList comments={comments} />
    </div>
  );
}

CommentSection.propTypes = {
  postId: PropTypes.string.isRequired,
};
