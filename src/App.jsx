import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'; // We'll add layout styles here

import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="noise-overlay"></div>
      <div className="app-layout">
        <Navbar />
        <main className="main-content container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
