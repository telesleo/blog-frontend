import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Textarea from '../Textarea';
import Button from '../Button';
import styles from './style.module.css';
import request from '../../utils/request';

export default function NewComment({ postId, getComments }) {
  const [content, setContent] = useState('');

  const handleContentInput = ({ target }) => {
    setContent(target.value);
  };

  const sendComment = async () => {
    const response = await request(`/posts/${postId}/comments`, 'POST', {
      content,
    });

    if (response.status === 201) {
      setContent('');
      getComments();
    }
  };

  return (
    <div id={styles['new-comment']}>
      <Textarea value={content} onChange={handleContentInput} placeholder="Write a comment." rows={5} />
      {(content) && (<Button onClick={sendComment}>Send Comment</Button>)}
    </div>
  );
}

NewComment.propTypes = {
  postId: PropTypes.string.isRequired,
  getComments: PropTypes.func.isRequired,
};
