import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const Hero = () => {
  const floatingAnimation = {
    y: ['-10px', '10px'],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
        pt: { xs: 8, sm: 0 },
      }}
    >
      {/* Animated floating circles */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          animate={floatingAnimation}
          style={{
            position: 'absolute',
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            borderRadius: '50%',
            background: `rgba(255, 255, 255, ${Math.random() * 0.1})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(50px)',
            zIndex: 1,
          }}
        />
      ))}

      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4} 
          alignItems="center"
          sx={{ 
            flexDirection: { xs: 'column-reverse', md: 'row' },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
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
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1.2,
                    mb: { xs: 2, md: 3 },
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  Unlock Your{' '}
                  <Box component="span" sx={{ display: { xs: 'block', sm: 'inline' } }}>
                    Organization's{' '}
                  </Box>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.8,
                      type: 'spring',
                      stiffness: 100,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                      }}
                    >
                      Potential
                    </Box>
                  </motion.span>
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
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: { xs: 3, md: 4 },
                    maxWidth: { xs: '100%', md: '600px' },
                    mx: { xs: 'auto', md: 0 },
                    lineHeight: 1.6,
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
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={{ xs: 2, sm: 3 }}
                  alignItems={{ xs: 'stretch', sm: 'center' }}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: { xs: 2, sm: 1.5 },
                      px: { xs: 6, sm: 4 },
                      borderRadius: '50px',
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      textTransform: 'none',
                      width: { xs: '100%', sm: 'auto' },
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      color: 'white',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-2px) scale(1.02)',
                        boxShadow: '0 8px 25px rgba(33, 150, 243, 0.4)',
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
                      py: { xs: 2, sm: 1.5 },
                      px: { xs: 6, sm: 4 },
                      borderRadius: '50px',
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      textTransform: 'none',
                      width: { xs: '100%', sm: 'auto' },
                      borderColor: 'rgba(255,255,255,0.5)',
                      borderWidth: '2px',
                      color: 'white',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    View Our Work
                  </Button>
                </Stack>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              style={{ height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <Box
                component={motion.div}
                animate={{
                  rotate: [0, 5, -5, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                sx={{
                  width: '100%',
                  height: '400px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;