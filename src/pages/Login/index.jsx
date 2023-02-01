import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../utils/login';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const setState = {
    email: setEmail,
    password: setPassword,
  };

  const handleInput = ({ target }) => {
    setState[target.name](target.value);
  };

  const logIn = async () => {
    if ((await login(email, password))) {
      navigate('/');
    }
  };

  return (
    <div>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" id="email" value={email} onChange={handleInput} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" value={password} onChange={handleInput} />
      </label>
      <button type="button" onClick={logIn}>Log in</button>
    </div>
  );
}
