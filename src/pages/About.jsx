import React from 'react';
import { about } from '../data/about';
import { theme } from '../data/theme';

const About = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="mx-auto px-6 sm:px-8 lg:px-12 py-14 md:py-16" style={{ maxWidth: '980px' }}>
        
        {/* Header - Simple, left-aligned */}
        <div className="mb-12">
          <h1 
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ 
              color: theme.textColor,
              fontFamily: theme.fontFamily,
            }}
          >
            About
          </h1>
        </div>

        {/* Bio - First person, concise, 2-3 paragraphs */}
        <div className="space-y-6">
          {about.bio.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed"
              style={{ 
                color: theme.textColorLight,
                fontFamily: theme.bodyFontFamily,
                lineHeight: '1.7',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
