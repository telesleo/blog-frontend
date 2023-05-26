import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../../utils/request';
import MainTitle from '../../components/MainTitle';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import styles from './style.module.css';
import ErrorMessage from '../../components/ErrorMessage';

export default function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [content, setContent] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const createPost = async (event) => {
    event.preventDefault();

    const response = await request('/posts', 'POST', {
      title,
      description,
      content,
    });
    if (response.message === 'Post created successfully.') {
      navigate('/');
    } else {
      setErrorMessage(response.message);
    }
  };

  return (
    <form id={styles['create-post']}>
      <MainTitle
        title="Create a Post"
      />
      <Textarea
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        rows={2}
      />
      <Textarea
        placeholder="Content"
        onChange={({ target }) => setContent(target.value)}
        rows={9}
      />
      <Textarea
        placeholder="Description (optional)"
        onChange={({ target }) => setDescription(target.value)}
        rows={5}
      />
      <ErrorMessage message={errorMessage} />
      <Button id={styles['submit-button']} onClick={createPost}>Publish</Button>
    </form>
  );
}
