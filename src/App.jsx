import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Register from './pages/Register';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import User from './pages/User';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/create" element={<CreatePost />} />
        <Route path="/:username" element={<User />} />
      </Routes>
    </div>
  );
}
