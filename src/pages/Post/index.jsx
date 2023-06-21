import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Author from '../../components/Author';
import Info from '../../components/Info';
import PostContent from '../../components/PostContent';
import MainTitle from '../../components/MainTitle';
import request from '../../utils/request';
import styles from './style.module.css';
import Like from '../../components/Like';
import CommentSection from '../../components/CommentSection';
import getDate from '../../utils/getDate';
import Header from '../../components/Header';

export default function Post({ user }) {
  const { id } = useParams();

  const [post, setPost] = useState();

  const getPost = async () => {
    const postData = (await request(`/posts/${id}`, 'GET')).data;
    setPost(postData);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Header user={user} />
      {(post) && (
      <div id={styles.post}>
        <MainTitle title={post.title} />
        <div id={styles['author-date']}>
          <Author username={post.author.username} />
          <Info info={getDate(post.created_at)} />
        </div>
        <PostContent>
          {post.content}
        </PostContent>
        <Like postId={id} />
        <hr />
        <CommentSection postId={id} />
      </div>
      )}
    </>
  );
}

Post.propTypes = {
  user: PropTypes.shape({}).isRequired,
};
