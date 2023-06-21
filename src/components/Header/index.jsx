import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './header.module.css';

export default function Header({ user }) {
  const navigate = useNavigate();

  const navigateToCreatePost = () => {
    navigate('/post/create');
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

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};
