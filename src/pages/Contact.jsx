import React from 'react';
import { contact } from '../data/contact';
import { theme } from '../data/theme';

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="mx-auto px-6 sm:px-8 lg:px-12 py-14 md:py-16" style={{ maxWidth: theme.maxWidth }}>
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: theme.textColor, fontFamily: theme.fontFamily }}
          >
            {contact.heading}
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: theme.textColorLight, fontFamily: theme.bodyFontFamily, lineHeight: '1.7' }}
          >
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Primary */}
          <div className="col-span-12 lg:col-span-7">
            <div
              className="rounded-2xl p-8 md:p-9"
              style={{
                backgroundColor: theme.cardBackground,
                borderRadius: theme.cardBorderRadius,
                border: `1px solid ${theme.borderColor}`,
              }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: theme.textColorLight, fontFamily: theme.fontFamily }}
              >
                Email
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="block text-2xl md:text-3xl font-semibold hover:opacity-70 transition-opacity"
                style={{ color: theme.textColor, fontFamily: theme.fontFamily, lineHeight: '1.15' }}
              >
                {contact.email}
              </a>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                    fontFamily: theme.fontFamily,
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  }}
                >
                  Resume (PDF)
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                    fontFamily: theme.fontFamily,
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  }}
                >
                  GitHub
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{
                    borderColor: theme.borderColor,
                    color: theme.textColor,
                    fontFamily: theme.fontFamily,
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div className="col-span-12 lg:col-span-5 lg:mt-10">
            <div
              className="rounded-2xl p-7 md:p-8"
              style={{
                backgroundColor: 'transparent',
                borderRadius: theme.cardBorderRadius,
                border: `1px solid rgba(255,255,255,0.06)`,
              }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-5"
                style={{ color: theme.textColorLight, fontFamily: theme.fontFamily }}
              >
                Other
              </div>

              {contact.location ? (
                <div className="mb-4">
                  <div className="text-sm" style={{ color: theme.textColorLight, fontFamily: theme.fontFamily }}>
                    Location
                  </div>
                  <div className="text-base" style={{ color: theme.textColor, fontFamily: theme.bodyFontFamily }}>
                    {contact.location}
                  </div>
                </div>
              ) : null}

              {contact.phone ? (
                <div className="mb-4">
                  <div className="text-sm" style={{ color: theme.textColorLight, fontFamily: theme.fontFamily }}>
                    Phone
                  </div>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-base hover:opacity-70 transition-opacity"
                    style={{ color: theme.textColor, fontFamily: theme.fontFamily }}
                  >
                    {contact.phone}
                  </a>
                </div>
              ) : null}

              {contact.twitter ? (
                <div>
                  <div className="text-sm" style={{ color: theme.textColorLight, fontFamily: theme.fontFamily }}>
                    Twitter
                  </div>
                  <a
                    href={contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:opacity-70 transition-opacity"
                    style={{ color: theme.textColor, fontFamily: theme.fontFamily }}
                  >
                    {contact.twitter}
                  </a>
                </div>
              ) : (
                <p className="text-sm" style={{ color: theme.textColorLight, fontFamily: theme.bodyFontFamily, lineHeight: '1.6' }}>
                  If you’re reaching out about internships or project work, a short note with context is perfect.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
