import { createTheme, MantineColorsTuple } from '@mantine/core';

// Primary color (Deep Slate)
const primaryColor: MantineColorsTuple = [
  '#f8fafc', // 50
  '#f1f5f9', // 100
  '#e2e8f0', // 200
  '#cbd5e1', // 300
  '#94a3b8', // 400
  '#64748b', // 500
  '#475569', // 600
  '#334155', // 700
  '#1e293b', // 800
  '#0f172a', // 900
];

// Accent color (Cyan)
const accentColor: MantineColorsTuple = [
  '#ecfeff', // 50
  '#cffafe', // 100
  '#a5f3fc', // 200
  '#67e8f9', // 300
  '#22d3ee', // 400
  '#06b6d4', // 500
  '#0891b2', // 600
  '#0e7490', // 700
  '#155e75', // 800
  '#164e63', // 900
];

// Sub-accent color (Amber - for warmth)
const amberColor: MantineColorsTuple = [
  '#fffbeb', // 50
  '#fef3c7', // 100
  '#fde68a', // 200
  '#fcd34d', // 300
  '#fbbf24', // 400
  '#f59e0b', // 500
  '#d97706', // 600
  '#b45309', // 700
  '#92400e', // 800
  '#78350f', // 900
];

export const theme = createTheme({
  colors: {
    primary: primaryColor,
    accent: accentColor,
    amber: amberColor,
  },
  primaryColor: 'primary',
  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  headings: {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.05)',
    md: '0 4px 8px rgba(0, 0, 0, 0.08)',
    lg: '0 12px 24px rgba(0, 0, 0, 0.08)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.12)',
    soft: '0 1px 3px rgba(0, 0, 0, 0.05)',
    'card-hover': '0 12px 24px rgba(0, 0, 0, 0.08)',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        root: {
          fontWeight: 600,
          transition: 'all 0.2s ease',
        },
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        shadow: 'sm',
      },
      styles: {
        root: {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 40px -10px rgba(99, 102, 241, 0.15), 0 2px 8px -2px rgba(99, 102, 241, 0.08)',
          },
        },
      },
    },
    Badge: {
      defaultProps: {
        radius: 'sm',
      },
      styles: {
        root: {
          fontWeight: 500,
        },
      },
    },
    Paper: {
      defaultProps: {
        radius: 'md',
        shadow: 'xs',
      },
    },
  },
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
});
