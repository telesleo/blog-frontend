import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import login, { validate } from '../../utils/login';
import request from '../../utils/request';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextButton from '../../components/TextButton';
import styles from './style.module.css';
import ErrorMessage from '../../components/ErrorMessage';

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isEmailValid = () => {
    if (!email) {
      setErrorMessage('"Email" field is empty.');
      return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setErrorMessage('Email is not valid.');
      return false;
    }
    return true;
  };

  const isPasswordValid = () => {
    if (!password) {
      setErrorMessage('"Password" field is empty.');
      return false;
    }
    if (password.length < 8) {
      setErrorMessage('Password is too short.');
      return false;
    }
    if (password.length > 64) {
      setErrorMessage('Password is too long.');
      return false;
    }
    if (!/^[a-zA-Z0-9#&*@]*$/.test(password)) {
      setErrorMessage('Password is not valid.');
      return false;
    }
    return true;
  };

  const isNameValid = () => {
    if (!name) {
      setErrorMessage('"Name" field is empty.');
      return false;
    }
    if (name.length < 3) {
      setErrorMessage('Name is too short.');
      return false;
    }
    if (name.length > 64) {
      setErrorMessage('Name is too long.');
      return false;
    }
    if (!/^[a-zA-Z]+(?:[ ]{1}[a-zA-Z]+)*$/.test(name)) {
      setErrorMessage('Name is not valid.');
      return false;
    }
    return true;
  };

  const isUsernameValid = () => {
    if (!username) {
      setErrorMessage('"Username" field is empty.');
      return false;
    }
    if (username.length < 3) {
      setErrorMessage('Username is too short.');
      return false;
    }
    if (username.length > 64) {
      setErrorMessage('Username is too long.');
      return false;
    }
    if (!/^[a-zA-Z0-9#&*@]*$/.test(username)) {
      setErrorMessage('Username is not valid.');
      return false;
    }
    return true;
  };

  const validateFields = () => {
    if (isEmailValid() && isPasswordValid() && isNameValid() && isUsernameValid()) {
      setErrorMessage('');
      return true;
    }
    return false;
  };

  const validateUser = async () => {
    if (!(await login(email, password))) return;

    const user = await validate();

    if (!user) return;

    const { nextLocationPath } = location.state;
    navigate(nextLocationPath || '/');
  };

  const register = async (event) => {
    event.preventDefault();

    if (!validateFields()) return;

    const response = await request('/users/register', 'POST', {
      email, password, name, username,
    });

    if (response.data.message !== 'User created successfully.') {
      setErrorMessage(response.data.message);
      return;
    }

    validateUser();
  };

  return (
    <form id={styles.register}>
      <div id={styles['register-container']}>
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
        <Input
          placeholder="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          placeholder="Username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <ErrorMessage message={errorMessage} />
        <Button
          id={styles['submit-button']}
          onClick={register}
        >
          Sign Up
        </Button>
        <TextButton
          onClick={() => navigate('/login')}
        >
          Already have an account? Sign In
        </TextButton>
      </div>
    </form>
  );
}
