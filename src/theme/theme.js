import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#526DFE', // Blue from Home page gradients
      light: '#7C4DFF',
      dark: '#3F51B5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8E5FFE', // Purple from Home page gradients
      light: '#B39DDB',
      dark: '#6A1B9A',
      contrastText: '#ffffff',
    },
    accent: {
      primary: '#526DFE',
      secondary: '#8E5FFE',
      gold: '#FFD700',
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc',
      subtle: '#f5f7fa',
      dark: '#0a0a18',
      darkLighter: '#14142a',
      hero: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
      darkHero: 'linear-gradient(135deg, #0a0a18 0%, #14142a 100%)',
      gradient: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#6e6e73',
      light: '#86868b',
      white: '#ffffff',
      whiteSecondary: 'rgba(255, 255, 255, 0.8)',
      whiteLight: 'rgba(255, 255, 255, 0.7)',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '4rem',
      lineHeight: 1.2,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      '@media (max-width:960px)': {
        fontSize: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '3.5rem',
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      '@media (max-width:960px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      lineHeight: 1.3,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      '@media (max-width:960px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '2rem',
      lineHeight: 1.4,
      fontWeight: 600,
      '@media (max-width:960px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      lineHeight: 1.5,
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      lineHeight: 1.6,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.5px',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          padding: '12px 28px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          letterSpacing: '0.5px',
        },
        contained: {
          background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
          color: '#ffffff',
          boxShadow: '0 8px 20px rgba(82, 109, 254, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #6281FF 0%, #9D75FF 100%)',
            boxShadow: '0 12px 25px rgba(82, 109, 254, 0.4)',
            transform: 'translateY(-3px)',
          },
          '&:active': {
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderRadius: '50px',
          padding: '10px 26px',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(82, 109, 254, 0.1)',
            transform: 'translateY(-2px)',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(82, 109, 254, 0.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.04)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            '&:hover': {
              '& fieldset': {
                borderColor: '#526DFE',
              },
            },
            '&.Mui-focused': {
              '& fieldset': {
                borderColor: '#526DFE',
                borderWidth: '2px',
              },
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#526DFE',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
}); 