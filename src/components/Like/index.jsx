import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './style.module.css';
import request from '../../utils/request';
import { validate } from '../../utils/login';

export default function Like({ postId }) {
  const [isLogged, setIsLogged] = useState(false);
  const [otherLikes, setOtherLikes] = useState(-1);
  const [liked, setLiked] = useState(false);

  const checkLogin = async () => {
    setIsLogged((await validate()));
  };

  const handleLikeCount = async (isPostLiked) => {
    const { likes } = (await request(`/posts/${postId}/likes`, 'GET')).data;

    setOtherLikes(likes - ((isPostLiked) ? 1 : 0));
  };

  const handleIntialLikeState = async () => {
    const isPostLiked = (await request(`/posts/${postId}/liked`, 'GET')).data.liked;
    setLiked(isPostLiked);

    handleLikeCount(isPostLiked);
  };

  useEffect(() => {
    checkLogin();
    handleIntialLikeState();
  }, []);

  const likePost = async () => {
    const response = await request(`/posts/${postId}/likes`, 'POST');

    if (response?.status !== 201) return;

    setLiked(true);
  };

  const unlikePost = async () => {
    const response = await request(`/posts/${postId}/likes`, 'DELETE');

    if (response?.status !== 200) return;

    setLiked(false);
  };

  const handleLikeButton = async () => {
    const isPostLiked = (await request(`/posts/${postId}/liked`, 'GET')).data.liked;

    if (isPostLiked) {
      unlikePost();
    } else {
      likePost();
    }
  };

  return (
    (isLogged && (otherLikes > -1)) && (
      <Button
        id={styles['like-button']}
        color="transparent"
        type="button"
        onClick={handleLikeButton}
      >
        <h1 id={styles['like-icon']}>{(liked) ? '★' : '☆' }</h1>
        <h1 id={styles['like-count']}>{otherLikes + ((liked) ? 1 : 0)}</h1>
      </Button>
    )
  );
}

Like.propTypes = {
  postId: PropTypes.string.isRequired,
};
