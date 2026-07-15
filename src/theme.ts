import { createTheme } from '@mui/material/styles';

/**
 * Theme mode type (user preference)
 */
export type ThemeMode = 'light' | 'dark' | 'system';

/**
 * Resolved theme mode (actual theme applied)
 */
export type ResolvedThemeMode = 'light' | 'dark';

export const createCustomTheme = (mode: ResolvedThemeMode) => {
  const isDark = mode === 'dark';
  const colors = {
    primary: isDark
      ? { main: '#000000', light: '#000000', dark: '#000000' }
      : { main: '#00aeff', light: '#f1faff', dark: '#7da0b0' }, //title is main. Border of other topics is light. Dark is text within other topics.
    secondary: isDark
      ? {main: '#000000', light: '#000000', dark: '#000000' }
      : { main: '#000000', light: '#000000', dark: '#000000' },
    labels: isDark
      ? { main: '#000000', light: '#000000', dark: '#000000' }
      : { main: '#ff00e6', light: '#f5f5f5', dark: '#c294baec' }, //keyword labels. Main is border on selection. Dark is text. Light is border
    typeLabels: isDark
      ? { main: '#000000', light: '#000000', dark: '#000000' }
      : { main: '#000000', light: '#000000', dark: '#000000' },
    surface: isDark
      ? { default: '#000000', paper: '#000000', raised: '#000000' }
      : { default: '#f5f6f2', paper: '#fffef9', raised: '#ffffff' }, //background color
    text: isDark
      ? { primary: '#ecefed', secondary: '#b3b8b6', muted: '#8e9491' }
      : { primary: '#6b6b6b', secondary: '#9b9b9b', muted: '#ff0b0b' }, //author names. also arxiv
    border: isDark ? '#303433' : '#d9ded9', //border lines
  };

  return createTheme({
    palette: {
      mode,
      primary: {
        ...colors.primary,
        contrastText: isDark ? '#10201e' : '#ff0000',
      },
      secondary: {
        ...colors.secondary,
        contrastText: isDark ? '#1f120c' : '#007ffe',
      },
      background: {
        default: colors.surface.default,
        paper: colors.surface.paper,
      },
      text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary,
      },
      labels: {
        ...colors.labels,
        contrastText: isDark ? '#101716' : '#ffffff',
      },
      success: {
        main: isDark ? '#7fc48f' : '#ff0000',
        light: isDark ? '#20422f' : '#00ff59',
        dark: isDark ? '#aad8b5' : '#00ff80',
      },
      warning: {
        main: colors.secondary.main,
        light: colors.secondary.light,
        dark: colors.secondary.dark,
      },
      link: {
        main: isDark ? '#8acbc2' : '#ffff00',
        hover: isDark ? '#b9e1db' : '#00fff7',
        visited: isDark ? '#c4a386' : '#74432d',
      },
      divider: colors.border,
    },
    typography: {
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: {
        fontWeight: 600,
        letterSpacing: 0,
      },
      h2: {
        fontWeight: 600,
        letterSpacing: 0,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
        fontSize: '1.1rem',
      },
      subtitle1: {
        fontWeight: 500,
        fontSize: '1rem',
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: '0.9rem',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
      caption: {
        fontSize: '0.75rem',
        lineHeight: 1.4,
      },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 4,
            fontWeight: 650,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            fontWeight: 650,
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            boxShadow: 'none',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.surface.default,
          },
          '::selection': {
            backgroundColor: isDark ? '#315e5a' : '#00ffbb',
            color: colors.text.primary,
          },
          a: {
            color: colors.primary.main,
            textDecoration: 'none',
            transition: 'color 0.2s ease-in-out',
            '&:hover': {
              color: colors.primary.dark,
            },
            '&:visited': {
              color: colors.primary.main,
            },
            '&:visited:hover': {
              color: colors.primary.dark,
            },
          },
        },
      },
    },
  });
};
