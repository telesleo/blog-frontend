import React, { useState, useEffect } from 'react';
import request from '../../utils/request';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const allPosts = await request('/posts', 'GET');
    setPosts(allPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    posts.map((post) => (
      <a href={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <h4>{post.author.name}</h4>
        <p>{post.description}</p>
      </a>
    ))
  );
}
