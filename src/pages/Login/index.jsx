import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import login from '../../utils/login';

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
    <div>
      <Input type="email" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <Button onClick={logIn}>Log In</Button>
    </div>
  );
}
