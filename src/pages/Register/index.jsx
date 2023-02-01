import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../utils/login';
import request from '../../utils/request';

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const setState = {
    email: setEmail,
    password: setPassword,
    name: setName,
    username: setUsername,
  };

  const handleInput = ({ target }) => {
    setState[target.id](target.value);
  };

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

  const register = async () => {
    if (validateFields()) {
      const response = await request('/users/register', 'POST', {
        email, password, name, username,
      });
      if (response.message === 'User created successfully.') {
        if ((await login(email, password))) {
          navigate('/');
        }
      } else {
        setErrorMessage(response.message);
      }
    }
  };

  return (
    <div>
      <label htmlFor="email">
        Email:
        <input type="email" id="email" value={email} onChange={handleInput} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" id="password" value={password} onChange={handleInput} />
      </label>
      <label htmlFor="name">
        Name:
        <input type="name" id="name" value={name} onChange={handleInput} />
      </label>
      <label htmlFor="username">
        Username:
        <input type="username" id="username" value={username} onChange={handleInput} />
      </label>
      <p>{errorMessage}</p>
      <button type="button" onClick={register}>register</button>
    </div>
  );
}
