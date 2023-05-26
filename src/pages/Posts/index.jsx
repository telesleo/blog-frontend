import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import request from '../../utils/request';
import PostList from '../../components/PostList';
import styles from './style.module.css';
import Header from '../../components/Header';

export default function Posts({ user }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const allPosts = (await request('/posts', 'GET')).data;
    setPosts(allPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header user={user} />
      <div className={styles.posts}>
        <PostList posts={posts} />
      </div>
    </>
  );
}

Posts.propTypes = {
  user: PropTypes.objectOf.isRequired,
};
