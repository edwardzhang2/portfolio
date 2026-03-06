import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contact } from '../data/contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        style={{
          backgroundColor: 'rgba(10,10,10,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '9999px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}
        className="flex items-center gap-1 px-4 py-2.5"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-sm font-semibold mr-3 transition-opacity hover:opacity-70"
          style={{ color: '#f1f5f9', fontFamily: '"Inter"', letterSpacing: '-0.01em' }}
        >
          Edward Zhang
        </Link>

        {/* Divider */}
        <div className="w-px h-4 mr-3" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                color: isActive(link.path) ? '#f1f5f9' : '#94a3b8',
                backgroundColor: isActive(link.path) ? 'rgba(255,255,255,0.08)' : 'transparent',
                fontFamily: '"Inter"',
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* Resume link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:text-slate-200"
            style={{ color: '#94a3b8', fontFamily: '"Inter"' }}
          >
            Resume
          </a>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-4 mx-2" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />

        {/* GitHub icon */}
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex p-1.5 rounded-full transition-opacity hover:opacity-70"
          style={{ color: '#94a3b8' }}
          aria-label="GitHub"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-full transition-opacity hover:opacity-70 ml-1"
          aria-label="Toggle menu"
          style={{ color: '#94a3b8' }}
        >
          <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className="absolute top-full mt-2 left-4 right-4 rounded-2xl py-2 px-3 md:hidden"
          style={{
            backgroundColor: 'rgba(17,17,17,0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                color: isActive(link.path) ? '#f1f5f9' : '#94a3b8',
                backgroundColor: isActive(link.path) ? 'rgba(255,255,255,0.06)' : 'transparent',
              }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{ color: '#94a3b8' }}
          >
            Resume
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{ color: '#94a3b8' }}
          >
            GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
