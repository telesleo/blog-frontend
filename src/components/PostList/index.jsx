import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../PostCard';
import styles from './style.module.css';

export default function PostList({ posts }) {
  return (
    <div className={styles['post-list']}>
      {
      (posts) && posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          username={post.author?.username}
          description={post.description}
        />
      ))
    }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
