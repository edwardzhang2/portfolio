import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { theme } from '../data/theme';
import { getAllProjects } from '../data/projects';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { DisplayCard } from '../components/ui/display-cards';

const Home = () => {
  const allProjects = getAllProjects();
  const flagship = allProjects.filter((p) => p.flagship);
  const featured = allProjects.filter((p) => p.featured && !p.flagship);
  const experiments = allProjects.filter((p) => !p.featured);

  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      {/* Hero Section (ContainerScroll is used only here) */}
      <section>
        <Hero />
      </section>

      {/* Immediate transition into work */}
      <section className="pb-24 -mt-10">
        <div className="mx-auto px-6 sm:px-8 lg:px-12" style={{ maxWidth: theme.maxWidth }}>
          <div className="flex items-end justify-between gap-8 mb-12">
            <div className="max-w-xl">
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: theme.textColorLight, fontFamily: theme.fontFamily }}
              >
                Selected work
              </div>
              <h2
                className="text-3xl md:text-4xl font-semibold"
                style={{ color: theme.textColor, fontFamily: theme.fontFamily, lineHeight: '1.15' }}
              >
                High-stakes builds, not just polished demos.
              </h2>
            </div>

            <div className="hidden md:block max-w-xs text-sm" style={{ color: theme.textColorLight, fontFamily: theme.bodyFontFamily }}>
              I optimize for clarity under constraints—what breaks first, what to measure, and what to ship.
            </div>
          </div>

          {/* Asymmetric flagship grid */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {flagship[0] && (
              <div className="col-span-12 lg:col-span-7">
                <GlowingEffect glowColor="rgba(91, 95, 199, 0.22)" borderRadius="18px">
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: theme.cardBackground,
                      border: '1px solid rgba(26, 29, 41, 0.10)',
                      borderRadius: theme.cardBorderRadius,
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-3 p-8 md:p-9">
                        <div
                          className="text-xs font-semibold uppercase tracking-wide mb-3"
                          style={{ color: theme.accentColor, fontFamily: theme.fontFamily }}
                        >
                          {flagship[0].context}
                        </div>
                        <h3
                          className="text-2xl md:text-3xl font-semibold mb-4"
                          style={{ color: theme.textColor, fontFamily: theme.fontFamily, lineHeight: '1.15' }}
                        >
                          {flagship[0].title}
                        </h3>
                        <p
                          className="text-[1.02rem] leading-relaxed"
                          style={{ color: theme.textColorLight, fontFamily: theme.bodyFontFamily }}
                        >
                          {flagship[0].summary}
                        </p>
                        {flagship[0].tags?.length ? (
                          <div className="flex flex-wrap gap-2 mt-6">
                            {flagship[0].tags.slice(0, 6).map((tag, idx) => (
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
                      <div className="md:col-span-2 relative min-h-[220px] md:min-h-[340px]">
                        <img
                          src={flagship[0].image}
                          alt={flagship[0].title}
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
                      </div>
                    </div>
                  </div>
                </GlowingEffect>
              </div>
            )}

            {flagship[1] && (
              <div className="col-span-12 lg:col-span-5 lg:mt-12">
                <GlowingEffect glowColor="rgba(91, 95, 199, 0.18)" borderRadius="18px">
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: theme.cardBackground,
                      border: `1px solid ${theme.borderColor}`,
                      borderRadius: theme.cardBorderRadius,
                    }}
                  >
                    <div className="relative h-40 md:h-44 overflow-hidden">
                      <img
                        src={flagship[1].image}
                        alt={flagship[1].title}
                        className="w-full h-full object-cover"
                        style={{ filter: 'brightness(0.92) contrast(1.05)' }}
                        draggable={false}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(21,28,37,1), rgba(21,28,37,0.4) 60%, rgba(0,0,0,0.15))' }}
                      />
                    </div>
                    <div className="p-7 md:p-8">
                      <div
                        className="text-xs font-semibold uppercase tracking-wide mb-3"
                        style={{ color: theme.accentColor, fontFamily: theme.fontFamily }}
                      >
                        {flagship[1].context}
                      </div>
                      <h3
                        className="text-2xl font-semibold mb-3"
                        style={{ color: theme.textColor, fontFamily: theme.fontFamily, lineHeight: '1.15' }}
                      >
                        {flagship[1].title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: theme.textColorLight, fontFamily: theme.bodyFontFamily }}>
                        {flagship[1].summary}
                      </p>
                    </div>
                  </div>
                </GlowingEffect>
              </div>
            )}
          </div>

          {/* Secondary highlight (Penn Vet) */}
          {featured[0] && (
            <div className="mt-20 grid grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="col-span-12 md:col-span-4">
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: theme.textColorLight, fontFamily: theme.fontFamily }}
                >
                  Analytical work
                </div>
                <h3 className="text-xl md:text-2xl font-semibold" style={{ color: theme.textColor, fontFamily: theme.fontFamily }}>
                  {featured[0].title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div
                  className="rounded-2xl p-7 md:p-8"
                  style={{ backgroundColor: theme.cardBackground, border: `1px solid ${theme.borderColor}`, borderRadius: theme.cardBorderRadius }}
                >
                  <div className="text-sm mb-3" style={{ color: theme.textColorLight, fontFamily: theme.fontFamily }}>
                    {featured[0].context}
                  </div>
                  <p className="text-[1.02rem] leading-relaxed" style={{ color: theme.textColorLight, fontFamily: theme.bodyFontFamily }}>
                    {featured[0].summary}
                  </p>
                  {featured[0].tags?.length ? (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {featured[0].tags.map((tag, idx) => (
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
            </div>
          )}

          {/* Experiments preview */}
          {experiments.length > 0 && (
            <div className="mt-20 pt-20" style={{ borderTop: `1px solid ${theme.borderColor}` }}>
              <div className="flex items-baseline justify-between gap-8 mb-8">
                <h3 className="text-lg font-semibold" style={{ color: theme.textColor, fontFamily: theme.fontFamily }}>
                  Experiments
                </h3>
                <Link
                  to="/projects"
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ color: theme.accentColor, fontFamily: theme.fontFamily }}
                >
                  Full archive →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiments.slice(0, 3).map((p) => (
                  <DisplayCard
                    key={p.id}
                    title={p.title}
                    description={p.summary}
                    image={p.image}
                    tags={p.tags}
                    meta={p.context}
                    className="h-full"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Subtle CTA (not a big centered button) */}
          <div className="mt-20">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: theme.textColor, fontFamily: theme.fontFamily }}
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
