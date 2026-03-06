import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { contact } from '../data/contact';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-blob absolute rounded-full opacity-20"
          style={{
            width: '600px',
            height: '600px',
            top: '-100px',
            left: '-150px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="animate-blob-delay absolute rounded-full opacity-15"
          style={{
            width: '500px',
            height: '500px',
            bottom: '-80px',
            right: '-100px',
            background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center md:items-start">

          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            {/* Tag line */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest"
              style={{
                backgroundColor: 'rgba(99,102,241,0.12)',
                color: '#a5b4fc',
                border: '1px solid rgba(99,102,241,0.2)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" style={{ backgroundColor: '#818cf8' }} />
              CS @ Penn · ML · Full-Stack · Hong Kong
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              style={{ color: '#f1f5f9', fontFamily: '"Inter"', letterSpacing: '-0.03em' }}
            >
              Hi, I'm Edward.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: '#94a3b8', fontFamily: '"Inter"' }}
            >
              Computer Science student at Penn, originally from Hong Kong. I build ML systems and full-stack products at the intersection of technology and real-world impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 items-center md:items-start justify-center md:justify-start mb-8"
            >
              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{
                  backgroundColor: '#6366f1',
                  color: '#ffffff',
                  fontFamily: '"Inter"',
                  boxShadow: '0 0 20px rgba(99,102,241,0.35)',
                }}
              >
                View My Work
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: '#f1f5f9',
                  border: '1px solid rgba(255,255,255,0.10)',
                  fontFamily: '"Inter"',
                }}
              >
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
                style={{ color: '#64748b' }}
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
                style={{ color: '#64748b' }}
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="transition-opacity hover:opacity-60"
                style={{ color: '#64748b' }}
                aria-label="Email"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  transform: 'scale(1.15)',
                }}
              />
              <img
                src="/profile.jpg"
                alt="Edward Zhang"
                className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover"
                style={{
                  border: '2px solid rgba(99,102,241,0.3)',
                  boxShadow: '0 0 0 4px rgba(99,102,241,0.08), 0 20px 60px rgba(0,0,0,0.6)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
