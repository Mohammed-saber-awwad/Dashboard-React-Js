import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Hello World</div>} />
    </Routes>
  );
}

export default App;
