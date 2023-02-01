import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../utils/request';

export default function Post() {
  const { id } = useParams();

  const [post, setPost] = useState();

  const getPost = async () => {
    const postData = await request(`/posts/${id}`, 'GET');
    setPost(postData);
  };

  useEffect(() => {
    getPost();
  }, []);

  const getDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric', month: 'long', day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    (post) && (
    <div>
      <h2>{post.title}</h2>
      <h4>{post.author.name}</h4>
      <p>{post.author.username}</p>
      <p>{getDate(post.created_at)}</p>
      <p>{post.content}</p>
    </div>
    )
  );
}
