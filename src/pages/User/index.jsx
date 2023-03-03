import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Author from '../../components/Author';
import Description from '../../components/Description';
import PostList from '../../components/PostList';
import request from '../../utils/request';
import styles from './style.module.css';

export default function User() {
  const { username } = useParams();
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await request(`/users/${username}`, 'GET');
    setUser(response);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div id={styles.user}>
      <section id={styles['user-section']}>
        <img id={styles['profile-picture']} src="/images/profile_picture.png" alt="profile" />
        <h2 id={styles.name}>{user.name}</h2>
        <Author username={user.username} />
        <div id={styles.description}>
          <Description description={user.about} />
        </div>
      </section>
      <section id={styles['posts-section']}>
        {(user) && <PostList posts={user.posts} />}
      </section>
    </div>
  );
}
