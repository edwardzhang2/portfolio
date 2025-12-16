import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../data/theme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="border-b sticky top-0 z-50"
      style={{
        borderColor: theme.borderColor,
        backgroundColor: 'rgba(15, 20, 25, 0.85)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12" style={{ maxWidth: theme.maxWidth }}>
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Name - Restrained */}
          <Link 
            to="/" 
            className="text-lg font-semibold hover:opacity-70 transition-opacity"
            style={{ 
              color: theme.textColor,
              fontFamily: theme.fontFamily,
            }}
          >
            Edward Zhang
          </Link>

          {/* Desktop Navigation - Minimal */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="transition-opacity duration-200 font-medium text-sm hover:opacity-60"
                style={{
                  color: isActive(link.path) ? theme.accentColor : theme.textColor,
                  fontFamily: theme.fontFamily,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded transition-opacity hover:opacity-70"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: theme.textColor }}
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-3 border-t" style={{ borderColor: theme.borderColor }}>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 font-medium text-sm transition-opacity hover:opacity-60"
                  style={{
                    color: isActive(link.path) ? theme.accentColor : theme.textColor,
                    fontFamily: theme.fontFamily,
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
