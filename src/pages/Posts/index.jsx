import React, { useState, useEffect } from 'react';
import request from '../../utils/request';
import PostList from '../../components/PostList';

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
    <PostList posts={posts} />
  );
}
