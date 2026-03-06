import React from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { getAllProjects } from '../data/projects';
import { theme } from '../data/theme';

const cardStyle = {
  backgroundColor: theme.cardBackground,
  border: `1px solid ${theme.borderColor}`,
  borderRadius: theme.cardBorderRadius,
};

const imageContainerStyle = {
  aspectRatio: '16/9',
  backgroundColor: '#0d0d0d',
};

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Projects = () => {
  const allProjects = getAllProjects();
  const flagshipProjects = allProjects.filter(p => p.flagship);
  const featuredProjects = allProjects.filter(p => p.featured && !p.flagship);
  const experimentProjects = allProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-36" style={{ maxWidth: theme.maxWidth }}>

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6366f1' }}>
            Work
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ color: theme.textColor, letterSpacing: '-0.03em' }}
          >
            Projects I've built
          </h1>
        </motion.div>

        {/* FLAGSHIP */}
        <div className="mb-8">
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {flagshipProjects[0] && (
              <motion.div
                className="col-span-12 lg:col-span-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={0}
              >
                <GlowingEffect glowColor="rgba(99,102,241,0.25)" borderRadius="16px">
                  <div className="rounded-2xl overflow-hidden card-hover-glow h-full" style={cardStyle}>
                    {flagshipProjects[0].image && (
                      <div className="relative overflow-hidden" style={imageContainerStyle}>
                        <img src={flagshipProjects[0].image} alt={flagshipProjects[0].title} className="w-full h-full object-contain p-4" draggable={false} />
                      </div>
                    )}
                    <div className="p-8 md:p-9">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6366f1' }}>
                          {flagshipProjects[0].context}
                        </div>
                        {flagshipProjects[0].link && (
                          <a href={flagshipProjects[0].link} target="_blank" rel="noopener noreferrer"
                            className="flex-shrink-0 p-2 rounded-lg transition-all hover:scale-110"
                            style={{ color: '#6366f1' }}>
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: theme.textColor, letterSpacing: '-0.02em' }}>
                        {flagshipProjects[0].title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {flagshipProjects[0].tags?.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: theme.textColorLight }}>
                        {flagshipProjects[0].summary}
                      </p>
                    </div>
                  </div>
                </GlowingEffect>
              </motion.div>
            )}

            {flagshipProjects[1] && (
              <motion.div
                className="col-span-12 lg:col-span-5 lg:mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={1}
              >
                <GlowingEffect glowColor="rgba(99,102,241,0.2)" borderRadius="16px">
                  <div className="rounded-2xl overflow-hidden card-hover-glow h-full" style={cardStyle}>
                    {flagshipProjects[1].image && (
                      <div className="relative overflow-hidden" style={imageContainerStyle}>
                        <img src={flagshipProjects[1].image} alt={flagshipProjects[1].title} className="w-full h-full object-contain p-4" draggable={false} />
                      </div>
                    )}
                    <div className="p-7 md:p-8">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6366f1' }}>
                          {flagshipProjects[1].context}
                        </div>
                        {flagshipProjects[1].link && (
                          <a href={flagshipProjects[1].link} target="_blank" rel="noopener noreferrer"
                            className="flex-shrink-0 p-2 rounded-lg transition-all hover:scale-110"
                            style={{ color: '#6366f1' }}>
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: theme.textColor, letterSpacing: '-0.02em' }}>
                        {flagshipProjects[1].title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {flagshipProjects[1].tags?.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: theme.textColorLight }}>
                        {flagshipProjects[1].summary}
                      </p>
                    </div>
                  </div>
                </GlowingEffect>
              </motion.div>
            )}

            {flagshipProjects.slice(2).map((project, idx) => (
              <motion.div
                key={project.id}
                className="col-span-12 md:col-span-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeUp}
                custom={idx + 2}
              >
                <GlowingEffect glowColor="rgba(99,102,241,0.2)" borderRadius="16px">
                  <div className="rounded-2xl overflow-hidden card-hover-glow h-full" style={cardStyle}>
                    {project.image && (
                      <div className="relative overflow-hidden" style={imageContainerStyle}>
                        <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4" draggable={false} />
                      </div>
                    )}
                    <div className="p-7 md:p-8">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6366f1' }}>
                          {project.context}
                        </div>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="flex-shrink-0 p-2 rounded-lg transition-all hover:scale-110"
                            style={{ color: '#6366f1' }}>
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: theme.textColor, letterSpacing: '-0.02em' }}>
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags?.map((tag, tagIdx) => <Tag key={tagIdx}>{tag}</Tag>)}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: theme.textColorLight }}>
                        {project.summary}
                      </p>
                    </div>
                  </div>
                </GlowingEffect>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FEATURED */}
        {featuredProjects.length > 0 && (
          <div className="mb-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="rounded-2xl overflow-hidden card-hover-glow"
                style={cardStyle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={i}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {project.image && (
                    <div className="relative overflow-hidden" style={{ backgroundColor: '#0d0d0d', minHeight: '220px' }}>
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4" draggable={false} style={{ position: 'absolute', inset: 0 }} />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6366f1' }}>
                        {project.context}
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 rounded-lg transition-all hover:scale-110"
                          style={{ color: '#6366f1' }}>
                          <ExternalLinkIcon size={16} />
                        </a>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: theme.textColor, letterSpacing: '-0.02em' }}>
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: theme.textColorLight }}>
                      {project.summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* EXPERIMENTS */}
        {experimentProjects.length > 0 && (
          <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: '#475569' }}>
              Experiments & Side Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experimentProjects.map((project, i) => {
                const isVerticalImage = project.id === 5 || project.id === 6;
                return (
                  <motion.div
                    key={project.id}
                    className="rounded-2xl overflow-hidden card-hover-glow"
                    style={cardStyle}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-30px' }}
                    variants={fadeUp}
                    custom={i}
                  >
                    {project.image && (
                      <div className="relative overflow-hidden" style={imageContainerStyle}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full ${isVerticalImage ? 'object-cover' : 'object-contain p-3'}`}
                          draggable={false}
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          {project.context && (
                            <div className="text-xs uppercase tracking-wide" style={{ color: '#475569' }}>
                              {project.context}
                            </div>
                          )}
                        </div>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110"
                            style={{ color: '#6366f1' }}>
                            <ExternalLinkIcon size={16} />
                          </a>
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: theme.textColor, letterSpacing: '-0.01em' }}>
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                      </div>
                      <p className="text-sm leading-relaxed line-clamp-4" style={{ color: theme.textColorLight }}>
                        {project.summary}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;
