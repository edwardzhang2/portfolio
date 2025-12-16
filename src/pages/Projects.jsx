import React from 'react';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { DisplayCard } from '../components/ui/display-cards';
import { getAllProjects } from '../data/projects';
import { theme } from '../data/theme';

const Projects = () => {
  const allProjects = getAllProjects();
  
  // Separate flagship and secondary projects
  const flagshipProjects = allProjects.filter(p => p.flagship);
  const featuredProjects = allProjects.filter(p => p.featured && !p.flagship);
  const experimentProjects = allProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="mx-auto px-6 sm:px-8 lg:px-12 py-14 md:py-16" style={{ maxWidth: theme.maxWidth }}>
        
        {/* Header - Minimal, left-aligned */}
        <div className="mb-16">
          <h1 
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ 
              color: theme.textColor,
              fontFamily: theme.fontFamily,
            }}
          >
            Work
          </h1>
          <p 
            className="text-lg max-w-2xl"
            style={{ 
              color: theme.textColorLight,
              fontFamily: theme.bodyFontFamily,
              lineHeight: '1.6',
            }}
          >
            Infrastructure, platforms, and systems. Organized by scale and impact.
          </p>
        </div>

        {/* FLAGSHIP PROJECTS - Large, prominent, glowing effect */}
        <div className="mb-20">
          <h2 
            className="text-sm font-semibold uppercase tracking-wider mb-8"
            style={{ color: theme.textColorLight }}
          >
            Flagship Work
          </h2>
          
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {flagshipProjects[0] && (
              <div className="col-span-12 lg:col-span-7">
                <GlowingEffect glowColor="rgba(91, 95, 199, 0.22)" borderRadius="18px">
                  <div
                    className="rounded-2xl overflow-hidden h-full"
                    style={{
                      backgroundColor: theme.cardBackground,
                      borderRadius: theme.cardBorderRadius,
                      border: '1px solid rgba(26, 29, 41, 0.10)',
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-3 p-8 md:p-9">
                        {flagshipProjects[0].context && (
                          <div
                            className="text-xs font-semibold uppercase tracking-wide mb-3"
                            style={{ color: theme.accentColor, fontFamily: theme.fontFamily }}
                          >
                            {flagshipProjects[0].context}
                          </div>
                        )}
                        <h3
                          className="text-2xl md:text-3xl font-semibold mb-4"
                          style={{ color: theme.textColor, fontFamily: theme.fontFamily, lineHeight: '1.15' }}
                        >
                          {flagshipProjects[0].title}
                        </h3>
                        <p
                          className="text-[1.02rem] leading-relaxed"
                          style={{ color: theme.textColorLight, fontFamily: theme.bodyFontFamily }}
                        >
                          {flagshipProjects[0].summary}
                        </p>
                        {flagshipProjects[0].tags?.length ? (
                          <div className="flex flex-wrap gap-2 mt-6">
                            {flagshipProjects[0].tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs rounded-md"
                                style={{ backgroundColor: theme.tagBackground, color: theme.tagColor, fontFamily: theme.fontFamily }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <div className="md:col-span-2 relative min-h-[220px] md:min-h-[360px]">
                        {flagshipProjects[0].image && (
                          <>
                            <img
                              src={flagshipProjects[0].image}
                              alt={flagshipProjects[0].title}
                              className="absolute inset-0 w-full h-full object-cover"
                              style={{ filter: 'brightness(0.95) contrast(1.02)' }}
                              draggable={false}
                            />
                            <div
                              className="absolute inset-0"
                              style={{
                                background:
                                  'linear-gradient(90deg, rgba(21,28,37,1) 0%, rgba(21,28,37,0.3) 55%, rgba(0,0,0,0.15) 100%)',
                              }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </GlowingEffect>
              </div>
            )}

            {flagshipProjects[1] && (
              <div className="col-span-12 lg:col-span-5 lg:mt-12">
                <GlowingEffect glowColor="rgba(91, 95, 199, 0.18)" borderRadius="18px">
                  <div
                    className="rounded-2xl overflow-hidden h-full"
                    style={{
                      backgroundColor: theme.cardBackground,
                      borderRadius: theme.cardBorderRadius,
                      border: `1px solid ${theme.borderColor}`,
                    }}
                  >
                    {flagshipProjects[1].image && (
                      <div className="relative h-44 md:h-48 overflow-hidden">
                        <img
                          src={flagshipProjects[1].image}
                          alt={flagshipProjects[1].title}
                          className="w-full h-full object-cover"
                          style={{ filter: 'brightness(0.92) contrast(1.05)' }}
                          draggable={false}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              'linear-gradient(to top, rgba(21,28,37,1), rgba(21,28,37,0.4) 60%, rgba(0,0,0,0.15))',
                          }}
                        />
                      </div>
                    )}
                    <div className="p-7 md:p-8">
                      {flagshipProjects[1].context && (
                        <div
                          className="text-xs font-semibold uppercase tracking-wide mb-3"
                          style={{ color: theme.accentColor, fontFamily: theme.fontFamily }}
                        >
                          {flagshipProjects[1].context}
                        </div>
                      )}
                      <h3
                        className="text-2xl font-semibold mb-3"
                        style={{ color: theme.textColor, fontFamily: theme.fontFamily, lineHeight: '1.15' }}
                      >
                        {flagshipProjects[1].title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: theme.textColorLight, fontFamily: theme.bodyFontFamily }}>
                        {flagshipProjects[1].summary}
                      </p>
                      {flagshipProjects[1].tags?.length ? (
                        <div className="flex flex-wrap gap-2 mt-6">
                          {flagshipProjects[1].tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs rounded-md"
                              style={{ backgroundColor: theme.tagBackground, color: theme.tagColor, fontFamily: theme.fontFamily }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </GlowingEffect>
              </div>
            )}
          </div>
        </div>

        {/* FEATURED PROJECT - Penn Vet (no glow, but prominent) */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <h2 
              className="text-sm font-semibold uppercase tracking-wider mb-8"
              style={{ color: theme.textColorLight }}
            >
              Analytics & Research
            </h2>
            
            {featuredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch"
              >
                <div className={idx % 2 === 0 ? "col-span-12 md:col-span-4 md:mt-8" : "col-span-12 md:col-span-4"}>
                  <div
                    className="rounded-2xl overflow-hidden h-full"
                    style={{
                      backgroundColor: theme.cardBackground,
                      borderRadius: theme.cardBorderRadius,
                      border: `1px solid ${theme.borderColor}`,
                    }}
                  >
                    {project.image && (
                      <div className="relative h-44 md:h-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          style={{ filter: 'brightness(0.98) contrast(1.02)' }}
                          draggable={false}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <div
                    className="rounded-2xl p-7 md:p-8"
                    style={{
                      backgroundColor: theme.cardBackground,
                      borderRadius: theme.cardBorderRadius,
                      border: `1px solid ${theme.borderColor}`,
                    }}
                  >
                    {project.context && (
                      <div
                        className="text-xs font-semibold uppercase tracking-wide mb-3"
                        style={{ color: theme.accentColor, fontFamily: theme.fontFamily }}
                      >
                        {project.context}
                      </div>
                    )}
                    <h3
                      className="text-2xl font-semibold mb-3"
                      style={{ color: theme.textColor, fontFamily: theme.fontFamily }}
                    >
                      {project.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: theme.textColorLight, fontFamily: theme.bodyFontFamily }}>
                      {project.summary}
                    </p>
                    {project.tags?.length ? (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-md"
                            style={{ backgroundColor: theme.tagBackground, color: theme.tagColor, fontFamily: theme.fontFamily }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EXPERIMENTS - DisplayCards, asymmetric grid */}
        {experimentProjects.length > 0 && (
          <div>
            <h2 
              className="text-sm font-semibold uppercase tracking-wider mb-8"
              style={{ color: theme.textColorLight }}
            >
              Experiments & Side Projects
            </h2>
            
            <div className="grid grid-cols-12 gap-6">
              {experimentProjects.map((project, idx) => {
                const span =
                  idx === 0
                    ? "col-span-12 lg:col-span-5"
                    : idx === 1
                      ? "col-span-12 md:col-span-6 lg:col-span-4"
                      : idx === 2
                        ? "col-span-12 md:col-span-6 lg:col-span-3 lg:mt-6"
                        : idx === 3
                          ? "col-span-12 md:col-span-6 lg:col-span-4"
                          : "col-span-12 md:col-span-6 lg:col-span-5 lg:mt-8";

                return (
                  <DisplayCard
                    key={project.id}
                    title={project.title}
                    description={project.summary}
                    image={project.image}
                    tags={project.tags}
                    meta={project.context}
                    className={`${span} h-full`}
                  />
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
