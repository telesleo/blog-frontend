import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Register from './pages/Register';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import User from './pages/User';
import { validate } from './utils/login';

export default function App() {
  const [user, setUser] = useState();

  const getUser = async () => setUser((await validate()));

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts user={user} />} />
        <Route path="/post/:id" element={<Post user={user} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/create" element={<CreatePost />} />
        <Route path="/:username" element={<User />} />
      </Routes>
    </div>
  );
}
