import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../../utils/request';
import MainTitle from '../../components/MainTitle';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import styles from './style.module.css';

export default function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const createPost = async () => {
    const response = await request('/posts', 'POST', {
      title,
      description,
      content,
    });
    if (response.message === 'Post created successfully.') {
      navigate('/');
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
      <Button id={styles['submit-button']} onClick={createPost}>Publish</Button>
    </form>
  );
}
