import React from 'react';
import { theme } from '../data/theme';

const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 
        className="text-4xl sm:text-5xl font-bold mb-4"
        style={{ 
          color: theme.textColor,
          fontFamily: theme.fontFamily,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`text-xl leading-relaxed ${centered ? 'max-w-3xl mx-auto' : ''}`}
          style={{ 
            color: theme.textColorLight,
            fontFamily: theme.bodyFontFamily,
            lineHeight: '1.7'
          }}
        >
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div className={`mt-6 ${centered ? 'flex justify-center' : ''}`}>
        <div 
          className="w-24 h-1.5 rounded-full"
          style={{ 
            background: `linear-gradient(90deg, ${theme.accentColor}, ${theme.accentColorLight})` 
          }}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
