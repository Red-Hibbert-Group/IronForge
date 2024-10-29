import { Box } from '@mui/material';

const ParallaxBanner = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'linear-gradient(45deg, rgba(26, 35, 126, 0.9), rgba(0, 105, 92, 0.9))',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        },
        '& > *': {
          position: 'relative',
          zIndex: 2,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ParallaxBanner; 