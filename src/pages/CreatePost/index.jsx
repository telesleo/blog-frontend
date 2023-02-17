import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../../utils/request';

export default function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const setState = {
    title: setTitle,
    description: setDescription,
    content: setContent,
  };

  const handleInput = ({ target }) => {
    setState[target.name](target.value);
  };

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
    <div>
      <label htmlFor="post-title">
        {'Title: '}
        <input id="post-title" name="title" type="text" value={title} onChange={handleInput} />
      </label>
      <label htmlFor="post-description">
        {'Description: '}
        <textarea id="post-description" name="description" cols="30" rows="5" value={description} onChange={handleInput} />
      </label>
      <label htmlFor="post-content">
        <textarea id="post-content" name="content" cols="30" rows="10" value={content} onChange={handleInput} />
      </label>
      <button type="button" onClick={createPost}>Create Post</button>
    </div>
  );
}
