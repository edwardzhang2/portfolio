import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { applyThemeToDocument, theme } from '../data/theme';

const Layout = ({ children }) => {
  useEffect(() => {
    applyThemeToDocument(theme);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

