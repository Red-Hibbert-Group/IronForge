import { Box, Typography, Container } from '@mui/material';

const AnimatedHeader = ({ title, subtitle }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: 'center',
          py: 6,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontWeight: 700,
          }}
          data-aos="fade-up"
        >
          {title}
        </Typography>
        
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: '600px', mx: 'auto' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {subtitle}
        </Typography>
      </Box>
    </Container>
  );
};

export default AnimatedHeader; 