import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <NavBar />
      <p>hellow</p>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
