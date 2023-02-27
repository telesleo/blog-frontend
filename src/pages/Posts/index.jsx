import React, { useState, useEffect } from 'react';
import request from '../../utils/request';
import PostList from '../../components/PostList';
import styles from './style.module.css';

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
    <div className={styles.posts}>
      <PostList posts={posts} />
    </div>
  );
}
