import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../Button';
import styles from './header.module.css';
import { validate } from '../../utils/login';

export default function Header() {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const getUser = async () => setUser((await validate()));

  useEffect(() => {
    getUser();
  }, []);

  const navigateToCreatePost = () => {
    navigate('post/create');
  };

  return (
    <div id={styles.header}>
      <div id={styles['header-content']}>
        { (user?.name) ? (
          <>
            <Link to={`/${user?.username}`}>
              <h3>{user?.name}</h3>
            </Link>
            <Button color="white" onClick={navigateToCreatePost}>Create New Post</Button>
          </>
        ) : (
          <>
            <Link to="/register">
              <h4>Create Account</h4>
            </Link>
            <Link to="/login">
              <h4>Log in</h4>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
