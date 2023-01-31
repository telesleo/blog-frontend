import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<p>Main Page</p>} />
      </Routes>
    </div>
  );
}
