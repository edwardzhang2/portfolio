import React from 'react';
import { theme } from '../data/theme';

const Tag = ({ text }) => {
  return (
    <span 
      className="px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105"
      style={{
        backgroundColor: theme.tagBackground,
        color: theme.tagColor,
        fontFamily: theme.bodyFontFamily,
      }}
    >
      {text}
    </span>
  );
};

export default Tag;
