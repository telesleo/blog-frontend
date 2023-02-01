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

  const register = async () => {
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
