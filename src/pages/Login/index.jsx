import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextButton from '../../components/TextButton';
import login from '../../utils/login';
import styles from './style.module.css';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const logIn = async (event) => {
    event.preventDefault();

    if ((await login(email, password))) {
      navigate('/');
    }
  };

  return (
    <form id={styles.login}>
      <div id={styles['login-container']}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button
          id={styles['submit-button']}
          onClick={logIn}
        >
          Log In
        </Button>
        <TextButton
          onClick={() => navigate('/register')}
        >
          Don&apos;t have an account? Sign Up
        </TextButton>
      </div>
    </form>
  );
}
