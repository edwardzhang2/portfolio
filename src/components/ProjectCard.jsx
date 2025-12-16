import React from 'react';
import { theme } from '../data/theme';
import Tag from './Tag';

const ProjectCard = ({ project }) => {
  const { title, summary, tags, image, link, demo } = project;

  // Default fallback image if project image is missing
  const imageUrl = image || '/placeholder.jpg';

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full group transform hover:scale-[1.02] hover:-translate-y-1 animate-fade-in-up"
      style={{ 
        borderRadius: theme.cardBorderRadius,
        boxShadow: theme.cardShadow,
        backgroundColor: theme.cardBackground,
      }}
    >
      {/* Project Image */}
      <div className="w-full h-56 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `
              <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: ${theme.fontFamily}; color: ${theme.accentColor}; font-size: 1.25rem; font-weight: 600;">
                ${title.split(' ')[0]}
              </div>
            `;
          }}
        />
        {/* Overlay gradient on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{ background: `linear-gradient(135deg, ${theme.accentColor}, ${theme.accentColorLight})` }}
        ></div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow">
        {/* Title */}
        <h3 
          className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors duration-300"
          style={{ 
            color: theme.textColor,
            fontFamily: theme.fontFamily,
          }}
        >
          {title}
        </h3>

        {/* Summary */}
        <p 
          className="mb-5 flex-grow leading-relaxed"
          style={{ 
            color: theme.textColorLight,
            fontFamily: theme.bodyFontFamily,
            lineHeight: '1.7'
          }}
        >
          {summary}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-all duration-200 hover:translate-x-1"
              style={{ 
                color: theme.accentColor,
                fontFamily: theme.fontFamily,
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-all duration-200 hover:translate-x-1"
              style={{ 
                color: theme.accentColor,
                fontFamily: theme.fontFamily,
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
