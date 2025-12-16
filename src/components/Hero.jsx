import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerScroll } from './ui/container-scroll-animation';
import { theme } from '../data/theme';
import { hero } from '../data/hero';

const Hero = () => {
  return (
    <div className="w-full overflow-hidden" style={{ backgroundColor: theme.backgroundDark }}>
      <ContainerScroll
        titleComponent={
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Main title - restrained, confident */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5 text-white"
              style={{ 
                fontFamily: theme.fontFamily,
                lineHeight: '1.2',
              }}
            >
              {hero.mainTitle}
            </h1>

            {/* Subtitle - technical depth, no buzzwords */}
            <p 
              className="text-lg md:text-xl leading-relaxed text-slate-300 mb-7"
              style={{ 
                fontFamily: theme.bodyFontFamily,
                lineHeight: '1.6',
                maxWidth: '42rem',
              }}
            >
              {hero.subtitle}
            </p>

            {/* CTA Buttons - restrained */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <Link
                to={hero.primaryButton.link}
                className="px-7 py-3.5 font-medium rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: theme.accentColor,
                  color: '#FFFFFF',
                  fontFamily: theme.fontFamily,
                }}
              >
                {hero.primaryButton.text}
              </Link>
              <a
                href={hero.secondaryButton.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 font-medium rounded-lg border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white transition-all duration-200"
                style={{
                  fontFamily: theme.fontFamily,
                }}
              >
                {hero.secondaryButton.text}
              </a>
            </div>
          </div>
        }
      >
        {/* Infrastructure/systems image - darkened, cinematic */}
        <div className="relative w-full h-full">
          <img
            src={hero.heroImage}
            alt="Systems infrastructure"
            className="mx-auto rounded-2xl object-cover h-full w-full"
            style={{
              filter: 'brightness(0.78) contrast(1.08)',
            }}
            draggable={false}
          />
          {/* Subtle overlay for depth */}
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(to bottom, rgba(15, 20, 25, 0.18), rgba(15, 20, 25, 0.62))',
            }}
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default Hero;
