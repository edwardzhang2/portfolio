import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../data/theme';
import { getAllProjects } from '../data/projects';
import { GlowingEffect } from '../components/ui/glowing-effect';

const SKILLS = [
  'Python', 'PyTorch', 'React', 'Node.js', 'PostgreSQL',
  'scikit-learn', 'Computer Vision', 'Kubernetes', 'TypeScript', 'Flask',
];

const ExternalLinkIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Tag = ({ children }) => (
  <span
    className="px-3 py-1 text-xs rounded-full font-medium"
    style={{
      backgroundColor: theme.tagBackground,
      color: theme.tagColor,
      border: '1px solid rgba(99,102,241,0.2)',
    }}
  >
    {children}
  </span>
);

const cardStyle = {
  backgroundColor: theme.cardBackground,
  border: `1px solid ${theme.borderColor}`,
  borderRadius: theme.cardBorderRadius,
};

const imageContainerStyle = {
  aspectRatio: '16/9',
  backgroundColor: '#0d0d0d',
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const Home = () => {
  const allProjects = getAllProjects();
  const flagship = allProjects.filter((p) => p.flagship);
  const featured = allProjects.filter((p) => p.featured && !p.flagship);
  const experiments = allProjects.filter((p) => !p.featured);

  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      {/* Hero */}
      <Hero />

      {/* About Strip */}
      <section className="py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="mx-auto px-6 sm:px-8 lg:px-12" style={{ maxWidth: theme.maxWidth }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          >
            {/* Bio */}
            <motion.div variants={fadeUp} custom={0}>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#6366f1' }}
              >
                About
              </div>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
                I'm a Computer Science student at the University of Pennsylvania, originally from Hong Kong. I build things at the intersection of machine learning and full-stack engineering — from production ML pipelines to platforms used by millions.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#64748b' }}>
                Outside of work, you'll find me watching F1 or the NFL, playing soccer, exploring Philly's food scene, or losing sleep over Fantasy Premier League (I built a bot to help with that).
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeUp} custom={1}>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#6366f1' }}
              >
                Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="pb-24">
        <div className="mx-auto px-6 sm:px-8 lg:px-12" style={{ maxWidth: theme.maxWidth }}>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: theme.textColor, letterSpacing: '-0.02em' }}
            >
              Selected Work
            </h2>
          </motion.div>

          {/* Flagship grid */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {flagship[0] && (
              <motion.div
                className="col-span-12 lg:col-span-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={0}
              >
                <GlowingEffect glowColor="rgba(99,102,241,0.25)" borderRadius="16px">
                  <div className="rounded-2xl overflow-hidden card-hover-glow" style={cardStyle}>
                    {flagship[0].image && (
                      <div className="relative overflow-hidden" style={imageContainerStyle}>
                        <img src={flagship[0].image} alt={flagship[0].title} className="w-full h-full object-contain p-4" draggable={false} />
                      </div>
                    )}
                    <div className="p-8 md:p-9">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6366f1' }}>
                          {flagship[0].context}
                        </div>
                        {flagship[0].link && (
                          <a href={flagship[0].link} target="_blank" rel="noopener noreferrer"
                            className="flex-shrink-0 p-2 rounded-lg transition-all hover:scale-110"
                            style={{ color: '#6366f1' }}>
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: theme.textColor, letterSpacing: '-0.02em' }}>
                        {flagship[0].title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {flagship[0].tags?.slice(0, 5).map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: theme.textColorLight }}>
                        {flagship[0].summary}
                      </p>
                    </div>
                  </div>
                </GlowingEffect>
              </motion.div>
            )}

            {flagship[1] && (
              <motion.div
                className="col-span-12 lg:col-span-5 lg:mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={1}
              >
                <GlowingEffect glowColor="rgba(99,102,241,0.2)" borderRadius="16px">
                  <div className="rounded-2xl overflow-hidden card-hover-glow" style={cardStyle}>
                    {flagship[1].image && (
                      <div className="relative overflow-hidden" style={imageContainerStyle}>
                        <img src={flagship[1].image} alt={flagship[1].title} className="w-full h-full object-contain p-4" draggable={false} />
                      </div>
                    )}
                    <div className="p-7 md:p-8">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6366f1' }}>
                          {flagship[1].context}
                        </div>
                        {flagship[1].link && (
                          <a href={flagship[1].link} target="_blank" rel="noopener noreferrer"
                            className="flex-shrink-0 p-2 rounded-lg transition-all hover:scale-110"
                            style={{ color: '#6366f1' }}>
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: theme.textColor, letterSpacing: '-0.02em' }}>
                        {flagship[1].title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {flagship[1].tags?.slice(0, 4).map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: theme.textColorLight }}>
                        {flagship[1].summary}
                      </p>
                    </div>
                  </div>
                </GlowingEffect>
              </motion.div>
            )}
          </div>

          {/* Featured (Penn Vet) */}
          {featured[0] && (
            <motion.div
              className="mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
            >
              <div className="rounded-2xl overflow-hidden card-hover-glow" style={cardStyle}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {featured[0].image && (
                    <div className="relative overflow-hidden" style={{ ...imageContainerStyle, aspectRatio: undefined, minHeight: '200px' }}>
                      <img src={featured[0].image} alt={featured[0].title} className="w-full h-full object-contain p-4" draggable={false} />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6366f1' }}>
                        {featured[0].context}
                      </div>
                      {featured[0].link && (
                        <a href={featured[0].link} target="_blank" rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 rounded-lg transition-all hover:scale-110"
                          style={{ color: '#6366f1' }}>
                          <ExternalLinkIcon size={16} />
                        </a>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.textColor, letterSpacing: '-0.02em' }}>
                      {featured[0].title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured[0].tags?.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: theme.textColorLight }}>
                      {featured[0].summary}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Experiments preview */}
          {experiments.length > 0 && (
            <div className="mt-16 pt-16" style={{ borderTop: `1px solid rgba(255,255,255,0.05)` }}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-semibold" style={{ color: theme.textColorLight }}>
                  More projects
                </h3>
                <Link
                  to="/projects"
                  className="text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: '#6366f1' }}
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiments.slice(0, 3).map((p, i) => {
                  const isVerticalImage = p.id === 5 || p.id === 6;
                  return (
                    <motion.div
                      key={p.id}
                      className="rounded-2xl overflow-hidden card-hover-glow"
                      style={cardStyle}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-30px' }}
                      variants={fadeUp}
                      custom={i}
                    >
                      {p.image && (
                        <div className="relative overflow-hidden" style={imageContainerStyle}>
                          <img
                            src={p.image}
                            alt={p.title}
                            className={`w-full h-full ${isVerticalImage ? 'object-cover' : 'object-contain p-3'}`}
                            draggable={false}
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          {p.context && (
                            <div className="text-xs uppercase tracking-wide" style={{ color: '#475569' }}>
                              {p.context}
                            </div>
                          )}
                          {p.link && (
                            <a href={p.link} target="_blank" rel="noopener noreferrer"
                              className="flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110"
                              style={{ color: '#6366f1' }}>
                              <ExternalLinkIcon size={16} />
                            </a>
                          )}
                        </div>
                        <h3 className="text-base font-semibold mb-1" style={{ color: theme.textColor, letterSpacing: '-0.01em' }}>
                          {p.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {p.tags?.slice(0, 3).map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                        </div>
                        <p className="text-xs leading-relaxed line-clamp-3" style={{ color: theme.textColorLight }}>
                          {p.summary}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: theme.textColorLight }}
            >
              View all work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
