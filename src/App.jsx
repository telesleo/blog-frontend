import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Register from './pages/Register';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
