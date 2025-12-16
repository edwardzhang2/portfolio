// Theme configuration - Human-designed, opinionated, restrained
export const theme = {
  // Colors - Desaturated, serious, professional
  accentColor: '#5B5FC7', // Muted indigo - restrained accent
  accentColorLight: '#7377CF', // Subtle hover variant
  textColor: '#E9ECF2', // High-contrast on dark
  textColorLight: '#A7AFC0', // Muted secondary text on dark
  backgroundColor: '#0F1419', // Global default (same dark as Home)
  backgroundDark: '#0F1419', // Alias (kept for compatibility)
  cardBackground: '#151C25', // Slightly lifted surface
  surfaceRaised: '#1A2330', // Optional second elevation
  borderColor: 'rgba(255,255,255,0.10)',
  
  // Typography - Restrained, serious, human
  // Swap these in one place (these also drive global CSS variables)
  fontFamily: '"IBM Plex Sans"', // Headings / UI
  bodyFontFamily: '"Source Serif 4"', // Body copy (human warmth, still professional)
  
  // Font sizes - Intentional hierarchy
  fontSize: {
    hero: '3.75rem',      // 60px - restrained, not gigantic
    h1: '2.5rem',         // 40px
    h2: '1.875rem',       // 30px
    h3: '1.5rem',         // 24px
    body: '1.0625rem',    // 17px - slightly larger than default
    small: '0.9375rem',   // 15px
  },
  
  // Spacing & Layout - Asymmetric, intentional
  maxWidth: '1140px',        // Narrower constraint
  sectionSpacing: {
    tight: '4rem',           // 64px
    normal: '6rem',          // 96px
    loose: '8rem',           // 128px
  },
  borderRadius: '12px',
  cardBorderRadius: '16px',
  
  // Shadows - Minimal, earned (dark-mode tuned)
  shadowSm: '0 1px 2px rgba(0, 0, 0, 0.30)',
  shadowMd: '0 10px 28px rgba(0, 0, 0, 0.28)',
  shadowLg: '0 18px 52px rgba(0, 0, 0, 0.35)',
  
  // Tag styling
  tagBackground: 'rgba(91, 95, 199, 0.16)',
  tagColor: '#E9ECF2',
  
  // Animations - Restrained
  transitionSpeed: '0.2s',
  hoverScale: '1.0', // No scale on hover - too decorative
};

// Helper function to get theme values
export const getThemeValue = (key) => theme[key];

// Apply theme to global CSS variables (keeps customization centralized)
export const applyThemeToDocument = (t = theme) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  const hexToRgb = (hex) => {
    const normalized = hex.replace('#', '').trim();
    const full =
      normalized.length === 3
        ? normalized
            .split('')
            .map((c) => c + c)
            .join('')
        : normalized;
    const int = Number.parseInt(full, 16);
    if (Number.isNaN(int) || full.length !== 6) return null;
    return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
  };

  const accentRgb = hexToRgb(t.accentColor);
  const accentSoft = accentRgb
    ? `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.10)`
    : 'rgba(91, 95, 199, 0.10)';

  root.style.setProperty('--color-accent', t.accentColor);
  root.style.setProperty('--color-accent-soft', accentSoft);
  root.style.setProperty('--color-text', t.textColor);
  root.style.setProperty('--color-text-muted', t.textColorLight);
  root.style.setProperty('--color-bg', t.backgroundColor);
  root.style.setProperty('--color-card', t.cardBackground);
  root.style.setProperty('--color-border', t.borderColor || 'rgba(255,255,255,0.10)');

  root.style.setProperty(
    '--font-heading',
    `${t.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
  );
  root.style.setProperty(
    '--font-body',
    `${t.bodyFontFamily}, ui-serif, Georgia, "Times New Roman", serif`
  );
};
