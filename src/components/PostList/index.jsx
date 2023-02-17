import React from 'react';
import PostCard from '../PostCard';

export default function PostList({ posts }) {
  return (
    posts.map((post) => (
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        username={post.author.username}
        description={post.description}
      />
    ))
  );
}
