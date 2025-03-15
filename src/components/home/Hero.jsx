import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const floatingAnimation = {
    y: ['-10px', '10px'],
    transition: {
      duration: 3,
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
        pt: { xs: 8, sm: 0 },
        background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
      }}
    >
      {/* 3D Particles Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {/* Create particle effect */}
        {[...Array(25)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: [Math.random() * 100, Math.random() * 100 + 500],
              x: [Math.random() * 100, Math.random() * 100 + 500],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              borderRadius: '50%',
              background: `rgba(82, 109, 254, ${Math.random() * 0.3})`,
              boxShadow: '0 0 10px rgba(82, 109, 254, 0.4)',
              zIndex: 1,
            }}
          />
        ))}
      </Box>
      
      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(82, 109, 254, 0.03) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />
      
      {/* Animated floating elements */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          animate={floatingAnimation}
          style={{
            position: 'absolute',
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(82, 109, 254, ${Math.random() * 0.07}) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(50px)',
            zIndex: 1,
          }}
        />
      ))}
      
      {/* Animated geometric shapes */}
      <Box
        component={motion.div}
        animate={{
          rotate: 360,
          transition: { duration: 50, repeat: Infinity, ease: "linear" }
        }}
        sx={{
          position: 'absolute',
          width: { xs: '400px', md: '800px' },
          height: { xs: '400px', md: '800px' },
          borderRadius: '50%',
          border: '1px dashed rgba(82, 109, 254, 0.2)',
          top: { xs: '-200px', md: '-400px' },
          right: { xs: '-200px', md: '-400px' },
          zIndex: 1
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          rotate: -360,
          transition: { duration: 70, repeat: Infinity, ease: "linear" }
        }}
        sx={{
          position: 'absolute',
          width: { xs: '300px', md: '600px' },
          height: { xs: '300px', md: '600px' },
          borderRadius: '50%',
          border: '1px dashed rgba(142, 95, 254, 0.2)',
          bottom: { xs: '-150px', md: '-300px' },
          left: { xs: '-150px', md: '-300px' },
          zIndex: 1
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 5 }}>
        <Grid 
          container 
          spacing={4} 
          alignItems="center"
          sx={{ 
            flexDirection: { xs: 'column-reverse', md: 'row' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="overline"
                  sx={{
                    color: '#526DFE',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    fontSize: '1rem',
                    mb: 2,
                    display: 'block'
                  }}
                >
                  ENTERPRISE ONESTREAM IMPLEMENTATION
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                    fontWeight: 800,
                    color: '#1A1A2E',
                    lineHeight: 1.1,
                    mb: { xs: 2, md: 3 },
                    background: 'linear-gradient(to right, #1A1A2E, #526DFE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                  }}
                >
                  Transform Your Financial Operations
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    color: '#505060',
                    mb: 4,
                    lineHeight: 1.7,
                    fontWeight: 400,
                    maxWidth: { md: '90%' }
                  }}
                >
                  IronForge delivers premium OneStream implementation services that streamline 
                  corporate performance management, simplify financial consolidation, and 
                  empower decision-makers with real-time insights.
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3}
                  sx={{ 
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    mt: 2
                  }}
                >
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                      color: 'white',
                      boxShadow: '0 10px 30px rgba(82, 109, 254, 0.2)',
                      borderRadius: '50px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      py: 1.5,
                      px: 4,
                      textTransform: 'none',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #6281FF 0%, #9D75FF 100%)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 15px 40px rgba(82, 109, 254, 0.3)',
                      }
                    }}
                  >
                    Get Started
                  </Button>
                  
                  <Button
                    component={Link}
                    to="/services"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#526DFE',
                      color: '#526DFE',
                      borderWidth: 2,
                      borderRadius: '50px',
                      py: 1.5,
                      px: 4,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#8E5FFE',
                        backgroundColor: 'rgba(82, 109, 254, 0.05)',
                      }
                    }}
                  >
                    Our Solutions
                  </Button>
                </Stack>
                
                <Box sx={{ mt: 5, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#505060', 
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      '&::before': {
                        content: '""',
                        display: 'block',
                        width: 20,
                        height: 1,
                        backgroundColor: '#526DFE',
                        marginRight: 1.5
                      }
                    }}
                  >
                    Trusted by Fortune 500 companies worldwide
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Box sx={{ position: 'relative' }}>
                {/* 3D Platform Visualization */}
                <Box
                  sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                    zIndex: 1
                  }}
                >
                  {/* Background glow */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '120%',
                      height: '120%',
                      background: 'radial-gradient(ellipse at center, rgba(82, 109, 254, 0.1) 0%, transparent 60%)',
                      transform: 'translateZ(-50px)',
                      filter: 'blur(40px)',
                      opacity: 0.7,
                      zIndex: -1
                    }}
                  />
                  
                  {/* Platform container */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      minHeight: '400px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(82, 109, 254, 0.1)',
                      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 30px 60px rgba(82, 109, 254, 0.15)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)',
                      }
                    }}
                  >
                    {/* Logo & Content */}
                    <Box
                      sx={{
                        padding: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'translateZ(30px)',
                      }}
                    >
                      <Box
                        component="img"
                        src="/onestream-logo.webp"
                        alt="OneStream Platform"
                        sx={{
                          maxWidth: '100%',
                          width: '250px',
                          height: 'auto',
                          mb: 4
                        }}
                      />
                      
                      {/* Integration lines */}
                      <Box sx={{ position: 'relative', width: '100%', height: '150px' }}>
                        {['Consolidation', 'Planning', 'Reporting', 'Analysis', 'Data Quality'].map((label, index) => (
                          <Box
                            key={index}
                            sx={{
                              position: 'absolute',
                              top: `${index * 30}px`,
                              left: index % 2 === 0 ? '10%' : '60%',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <Box
                              component={motion.div}
                              initial={{ width: 0 }}
                              animate={{ width: '20px' }}
                              transition={{ delay: 1 + index * 0.2, duration: 0.4 }}
                              sx={{
                                height: '2px',
                                background: 'linear-gradient(90deg, #526DFE, #8E5FFE)',
                                marginRight: 1
                              }}
                            />
                            <Typography
                              component={motion.div}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.2 + index * 0.2, duration: 0.4 }}
                              variant="caption"
                              sx={{ color: '#505060', fontSize: '0.8rem' }}
                            >
                              {label}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;