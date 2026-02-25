import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Writing', path: '/blog' },
  ];

  return (
    <nav className="navbar glass">
      <div className="nav-container container">
        <Link to="/" className="nav-logo" style={{ color: 'var(--text-primary)' }}>
          PV
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="social-links" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="https://github.com/PragnyaVijayan" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/pragnyavijayan" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:pragnya.vijayan@gmail.com" style={{
            background: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            padding: '0.5rem 1rem',
            borderRadius: '100px',
            fontSize: '0.85rem',
            fontWeight: 500,
            textDecoration: 'none'
          }}>
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
