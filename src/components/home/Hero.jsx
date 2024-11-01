import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse 15s infinite',
          },
        }}
      />
      
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          mt: { xs: 8, md: 0 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  Unlock Your Organization's <br />
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Potential
                  </Box>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 4,
                    maxWidth: '600px',
                  }}
                >
                  Transform your financial management with an integrated cloud platform for planning, 
                  budgeting, forecasting, consolidation and reporting - all in one place. Experience 
                  seamless automation and intuitive processes that drive efficiency across your organization.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      backgroundColor: 'white',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    Start Your Project
                  </Button>
                  <Button
                    component={Link}
                    to="/case-studies"
                    variant="outlined"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      borderColor: 'rgba(255,255,255,0.5)',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    View Our Work
                  </Button>
                </Stack>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <Box
                component="img"
                src="https://raw.githubusercontent.com/ShaifArfan/one-page-website-html-css-project/main/img/hero-img.svg"
                alt="Digital Transformation Illustration"
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  display: { xs: 'none', md: 'block' },
                  filter: 'brightness(1.1)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Hero;