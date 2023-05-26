import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styles from './header.module.css';

export default function Header() {
  const navigate = useNavigate();

  const navigateToCreatePost = () => {
    navigate('post/create');
  };

  return (
    <div id={styles.header}>
      <Button color="white" onClick={navigateToCreatePost}>Create New Post</Button>
    </div>
  );
}
