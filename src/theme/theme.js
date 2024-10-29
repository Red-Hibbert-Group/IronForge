import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Inspired by Apple's bold black
      light: '#333333',
      dark: '#000000',
    },
    secondary: {
      main: '#FF385C', // Airbnb's signature red
      light: '#FF5C7F',
      dark: '#E61E4D',
    },
    accent: {
      spotify: '#1DB954', // Spotify green
      medium: '#02B875', // Medium green
      slack: '#611f69',  // Slack purple
      dribbble: '#ea4c89', // Dribbble pink
    },
    background: {
      default: '#ffffff',
      paper: '#f8f8f8',
      subtle: '#f5f5f7', // Apple-style subtle background
      hero: 'linear-gradient(45deg, #000000 0%, #1a1a1a 100%)', // Inspired by Awwwards
      featured: 'linear-gradient(135deg, #FF385C 0%, #E61E4D 100%)', // Airbnb-style
    },
    text: {
      primary: '#000000',
      secondary: '#6e6e73', // Apple-style secondary text
      light: '#86868b',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '64px',
      lineHeight: 1.1,
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontSize: '48px',
      lineHeight: 1.2,
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    subtitle1: {
      fontSize: '20px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px', // Spotify/Airbnb style rounded buttons
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: 500,
          padding: '12px 24px',
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            transform: 'scale(1.02)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        },
      },
    },
  },
}); 