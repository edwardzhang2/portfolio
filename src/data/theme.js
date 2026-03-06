// Theme configuration - Dark, sleek, linear.app/Vercel style
export const theme = {
  // Colors - Dark theme
  accentColor: '#6366F1',
  accentColorLight: '#818CF8',
  textColor: '#f1f5f9',
  textColorLight: '#94a3b8',
  backgroundColor: '#0a0a0a',
  backgroundDark: '#050505',
  cardBackground: '#111111',
  cardBackgroundAlt: '#161616',
  surfaceRaised: '#1a1a1a',
  borderColor: 'rgba(255,255,255,0.08)',

  // Typography
  fontFamily: '"Inter"',
  bodyFontFamily: '"Inter"',

  // Font sizes
  fontSize: {
    hero: '3.75rem',
    h1: '2.5rem',
    h2: '1.875rem',
    h3: '1.5rem',
    body: '1.0625rem',
    small: '0.9375rem',
  },

  // Spacing & Layout
  maxWidth: '1140px',
  sectionSpacing: {
    tight: '4rem',
    normal: '6rem',
    loose: '8rem',
  },
  borderRadius: '12px',
  cardBorderRadius: '16px',

  // Shadows - dark-tuned
  shadowSm: '0 1px 2px rgba(0, 0, 0, 0.4)',
  shadowMd: '0 4px 12px rgba(0, 0, 0, 0.6)',
  shadowLg: '0 12px 32px rgba(0, 0, 0, 0.8)',

  // Tag styling
  tagBackground: 'rgba(99,102,241,0.12)',
  tagColor: '#a5b4fc',

  // Animations
  transitionSpeed: '0.2s',
  hoverScale: '1.02',
};

export const getThemeValue = (key) => theme[key];

export const applyThemeToDocument = (t = theme) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  const hexToRgb = (hex) => {
    const normalized = hex.replace('#', '').trim();
    const full =
      normalized.length === 3
        ? normalized.split('').map((c) => c + c).join('')
        : normalized;
    const int = Number.parseInt(full, 16);
    if (Number.isNaN(int) || full.length !== 6) return null;
    return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
  };

  const accentRgb = hexToRgb(t.accentColor);
  const accentSoft = accentRgb
    ? `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.12)`
    : 'rgba(99, 102, 241, 0.12)';

  root.style.setProperty('--color-accent', t.accentColor);
  root.style.setProperty('--color-accent-soft', accentSoft);
  root.style.setProperty('--color-text', t.textColor);
  root.style.setProperty('--color-text-muted', t.textColorLight);
  root.style.setProperty('--color-bg', t.backgroundColor);
  root.style.setProperty('--color-card', t.cardBackground);
  root.style.setProperty('--color-border', t.borderColor);

  root.style.setProperty(
    '--font-heading',
    `${t.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
  );
  root.style.setProperty(
    '--font-body',
    `${t.bodyFontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
  );
};
