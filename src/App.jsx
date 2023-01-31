import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from './pages/Posts';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </div>
  );
}
