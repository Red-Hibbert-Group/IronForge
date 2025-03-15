import React, { useEffect } from 'react';
import { Container, Typography, Grid, Box, Paper, Card, CardContent, Icon, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';
import TimelineIcon from '@mui/icons-material/Timeline';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DataUsageIcon from '@mui/icons-material/DataUsage';

const About = () => {
  const theme = useTheme();     
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
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
    <>
      <Navbar />
      <Box 
        sx={{
          background: 'linear-gradient(135deg, #0a0a18 0%, #14142a 100%)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* 3D Particles Background - Across entire page */}
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
          {/* Create particle effect - limited to 15 for better performance */}
          {[...Array(15)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                y: [Math.random() * 100, Math.random() * 100 + 300],
                x: [Math.random() * 100, Math.random() * 100 + 300],
                opacity: [0, 0.7, 0],
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
                background: `rgba(82, 109, 254, ${Math.random() * 0.5})`,
                boxShadow: '0 0 10px rgba(82, 109, 254, 0.8)',
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
            background: 'radial-gradient(circle at 30% 50%, rgba(82, 109, 254, 0.05) 0%, transparent 70%)',
            zIndex: 1,
          }}
        />
        
        {/* Animated floating elements - reduced to 3 for performance */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            animate={floatingAnimation}
            style={{
              position: 'absolute',
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(82, 109, 254, ${Math.random() * 0.1}) 0%, transparent 70%)`,
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

        {/* Enhanced Hero Section */}
        <Box
          component={motion.div}
          style={{ y: parallaxY }}
          sx={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            pt: { xs: 10, sm: 0 },
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
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
                        display: 'block',
                        textTransform: 'uppercase',
                        background: 'linear-gradient(45deg, #526DFE 30%, #8E5FFE 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      About IronForge
                    </Typography>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Typography 
                      variant="h1"
                      sx={{
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                        fontWeight: 800,
                        mb: 3,
                        background: 'linear-gradient(to right, #FFFFFF 20%, #A5B4FC)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1.2,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      Redefining Financial Excellence
                    </Typography>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Typography 
                      variant="h4"
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        maxWidth: '600px',
                        fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                        fontWeight: 300,
                        lineHeight: 1.6,
                        mb: 4
                      }}
                    >
                      Your Premier Partner in OneStream Implementation
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                      <Button
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(45deg, #526DFE 30%, #8E5FFE 90%)',
                          color: 'white',
                          px: 4,
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          borderRadius: '12px',
                          textTransform: 'none',
                          boxShadow: '0 8px 16px rgba(82, 109, 254, 0.2)',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 12px 20px rgba(82, 109, 254, 0.3)',
                          }
                        }}
                      >
                        Get Started
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          color: 'white',
                          borderColor: 'rgba(255,255,255,0.3)',
                          px: 4,
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          borderRadius: '12px',
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: '#526DFE',
                            background: 'rgba(82, 109, 254, 0.1)',
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </motion.div>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component={motion.div}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  sx={{
                    position: 'relative',
                    height: { xs: '300px', md: '500px' },
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {/* 3D Animated Decoration */}
                  <Box
                    component={motion.div}
                    animate={{
                      rotate: 360,
                      transition: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      border: '2px dashed rgba(82, 109, 254, 0.2)',
                    }}
                  />
                  <Box
                    component={motion.div}
                    animate={{
                      rotate: -360,
                      transition: { duration: 25, repeat: Infinity, ease: "linear" }
                    }}
                    sx={{
                      position: 'absolute',
                      width: '80%',
                      height: '80%',
                      borderRadius: '50%',
                      border: '2px dashed rgba(142, 95, 254, 0.2)',
                    }}
                  />
                  {/* Hero Image or 3D Element would go here */}
                  <Box
                    sx={{
                      width: '70%',
                      height: '70%',
                      background: 'radial-gradient(circle, rgba(82, 109, 254, 0.2) 0%, transparent 70%)',
                      borderRadius: '50%',
                      filter: 'blur(40px)',
                      animation: 'pulse 3s infinite',
                      '@keyframes pulse': {
                        '0%': { opacity: 0.5, transform: 'scale(0.95)' },
                        '50%': { opacity: 0.8, transform: 'scale(1.05)' },
                        '100%': { opacity: 0.5, transform: 'scale(0.95)' },
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Stats Section with Enhanced 3D Effect */}
        <Container maxWidth="lg" sx={{ py: 12, position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'center',
                      position: 'relative',
                      borderRadius: '24px',
                      border: '1px solid rgba(82, 109, 254, 0.2)',
                      transform: 'perspective(1000px) rotateX(5deg)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateX(0deg) translateY(-10px)',
                        border: '1px solid rgba(82, 109, 254, 0.5)',
                        boxShadow: '0 20px 40px rgba(82, 109, 254, 0.15)',
                        '& .stat-value': {
                          transform: 'scale(1.1)',
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(82, 109, 254, 0.1) 0%, transparent 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      }
                    }}
                  >
                    <CardContent sx={{ position: 'relative', zIndex: 1, py: 4 }}>
                      <Typography
                        className="stat-value"
                        variant="h3"
                        sx={{
                          background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontWeight: 800,
                          mb: 1,
                          fontSize: { xs: '2.5rem', md: '3.5rem' },
                          transition: 'transform 0.4s ease'
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255,255,255,0.9)',
                          fontWeight: 500,
                          fontSize: '1.1rem',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* OneStream Implementation Solutions with Enhanced UI */}
        <Box sx={{ 
          position: 'relative',
          py: 16,
          zIndex: 2,
        }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(8, 8, 20, 0.9), rgba(20, 20, 42, 0.9))',
              backdropFilter: 'blur(20px)',
              zIndex: -1
            }}
          />
          
          <Container maxWidth="lg">
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{ mb: 12 }}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: 'center',
                    mb: 2,
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    background: 'linear-gradient(45deg, #FFFFFF 30%, #A5B4FC 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em'
                  }}
                >
                  OneStream Implementation Solutions
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    mb: 8,
                    color: 'rgba(255,255,255,0.8)',
                    maxWidth: '800px',
                    mx: 'auto',
                    fontWeight: 300,
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    lineHeight: 1.6,
                  }}
                >
                  Comprehensive suite of OneStream XF platform implementations tailored to your business needs
                </Typography>
              </motion.div>
            </Box>
            
            <Grid container spacing={4}>
              {oneStreamSolutions.map((solution, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.6, -0.05, 0.01, 0.99],
                          delay: index * 0.1
                        }
                      }
                    }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(20px)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                        position: 'relative',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 20px 40px rgba(82, 109, 254, 0.2)',
                          border: '1px solid rgba(82, 109, 254, 0.3)',
                          '& .solution-icon': {
                            transform: 'scale(1.1) rotate(5deg)',
                            boxShadow: '0 12px 24px rgba(82, 109, 254, 0.4)',
                          }
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '100%',
                          background: 'linear-gradient(180deg, rgba(82, 109, 254, 0.1) 0%, transparent 100%)',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                        },
                        '&:hover::before': {
                          opacity: 1,
                        }
                      }}
                    >
                      <CardContent sx={{ position: 'relative', p: 4 }}>
                        <Box
                          className="solution-icon"
                          sx={{ 
                            mb: 3,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '70px',
                            height: '70px',
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                            boxShadow: '0 8px 20px rgba(82, 109, 254, 0.3)',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: 'rotate(-5deg)',
                          }}
                        >
                          {React.cloneElement(solution.icon, { 
                            sx: { 
                              fontSize: 35,
                              color: 'white',
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                            } 
                          })}
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 2,
                            fontWeight: 700,
                            color: 'white',
                            fontSize: { xs: '1.3rem', md: '1.5rem' },
                            letterSpacing: '-0.01em'
                          }}
                        >
                          {solution.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            mb: 3,
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '1rem',
                            lineHeight: 1.6
                          }}
                        >
                          {solution.description}
                        </Typography>
                        <Box 
                          component="ul" 
                          sx={{ 
                            pl: 0,
                            m: 0,
                            listStyle: 'none',
                          }}
                        >
                          {solution.features.map((feature, idx) => (
                            <Box
                              component="li"
                              key={idx}
                              sx={{ 
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1.5,
                                color: 'rgba(255,255,255,0.9)',
                                fontSize: '0.95rem',
                                '&:last-child': {
                                  mb: 0
                                }
                              }}
                            >
                              <Box
                                sx={{
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                                  mr: 2,
                                  flexShrink: 0,
                                }}
                              />
                              {feature}
                            </Box>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Core Strengths Section with Enhanced UI */}
        <Container maxWidth="lg" sx={{ py: 16, position: 'relative', zIndex: 2 }}>
          <Box
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ mb: 12 }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  textAlign: 'center',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  background: 'linear-gradient(45deg, #FFFFFF 30%, #A5B4FC 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                  mb: 2
                }}
              >
                Our Core Strengths
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: '800px',
                  mx: 'auto',
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                  fontWeight: 300,
                  lineHeight: 1.6,
                  mb: 8
                }}
              >
                Empowering businesses with cutting-edge financial solutions and expertise
              </Typography>
            </motion.div>
          </Box>
          
          <Grid container spacing={4}>
            {expertise.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.6, -0.05, 0.01, 0.99],
                        delay: index * 0.1
                      }
                    }
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(20px)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: '24px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                      overflow: 'hidden',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(82, 109, 254, 0.15)',
                        border: '1px solid rgba(82, 109, 254, 0.3)',
                        '& .strength-icon': {
                          transform: 'scale(1.1) rotate(10deg)',
                          background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(82, 109, 254, 0.1) 0%, transparent 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      }
                    }}
                  >
                    <CardContent sx={{ position: 'relative', zIndex: 1, p: 4 }}>
                      <Box 
                        className="strength-icon"
                        sx={{ 
                          mb: 3,
                          width: '70px',
                          height: '70px',
                          borderRadius: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(5px)',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                          transform: 'rotate(-5deg)',
                        }}
                      >
                        {React.cloneElement(item.icon, { 
                          sx: { 
                            fontSize: 35,
                            color: 'white',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                          } 
                        })}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: 'white',
                          fontSize: { xs: '1.3rem', md: '1.5rem' },
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '1rem',
                          lineHeight: 1.6
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Why Choose Us Section with Enhanced UI */}
        <Box sx={{ 
          position: 'relative',
          py: 16,
          zIndex: 2,
        }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.95) 0%, rgba(13, 71, 161, 0.95) 100%)',
              backdropFilter: 'blur(20px)',
              zIndex: -1
            }}
          />
          
          <Container maxWidth="lg">
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{ mb: 12 }}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: 'center',
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    color: 'white',
                    mb: 2,
                    '& span': {
                      background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                      filter: 'drop-shadow(0 2px 5px rgba(255, 215, 0, 0.3))'
                    }
                  }}
                >
                  Why <span>Organizations</span> Choose Us
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.8)',
                    maxWidth: '800px',
                    mx: 'auto',
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    fontWeight: 300,
                    lineHeight: 1.6,
                    mb: 8
                  }}
                >
                  Delivering excellence through innovation, expertise, and unwavering commitment to client success
                </Typography>
              </motion.div>
            </Box>
            
            <Grid container spacing={4}>
              {whyChooseUs.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.6, -0.05, 0.01, 0.99],
                          delay: index * 0.1
                        }
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        p: 4,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 215, 0, 0.3)',
                          '& .choose-icon': {
                            transform: 'scale(1.1) rotate(10deg)',
                            color: '#FFD700',
                            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))'
                          }
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '100%',
                          background: 'linear-gradient(180deg, rgba(255, 215, 0, 0.1) 0%, transparent 100%)',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                        },
                        '&:hover::before': {
                          opacity: 1,
                        }
                      }}
                    >
                      <CheckCircleOutlineIcon 
                        className="choose-icon"
                        sx={{ 
                          fontSize: 70,
                          mb: 3,
                          color: '#FFD700',
                          filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.3))',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          transform: 'rotate(-5deg)',
                        }} 
                      />
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 2,
                          textAlign: 'center', 
                          fontWeight: 700,
                          color: 'white',
                          fontSize: { xs: '1.3rem', md: '1.5rem' },
                          letterSpacing: '-0.01em',
                          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: 'rgba(255,255,255,0.8)',
                          textAlign: 'center',
                          fontSize: '1rem',
                          lineHeight: 1.6
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <DynamicFooter />
    </>
  );
};

const stats = [
  { value: '500+', label: 'Successful Implementations' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '15+', label: 'Years of Excellence' },
  { value: '24/7', label: 'Global Support' }
];

const expertise = [
  {
    icon: <TimelineIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: 'Financial Analytics',
    description: 'Advanced analytics solutions that transform raw data into actionable insights.'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: 'Secure Integration',
    description: 'Enterprise-grade security with seamless system integration capabilities.'
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: 'Performance Optimization',
    description: 'Cutting-edge tools and methodologies for maximum system performance.'
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: 'Expert Consultation',
    description: 'Strategic guidance from certified OneStream professionals.'
  }
];

const whyChooseUs = [
  {
    title: "Industry-Leading Expertise",
    description: "Ranked #1 in OneStream implementation with a team of elite certified professionals and the highest success rate in complex enterprise deployments."
  },
  {
    title: "Innovation-Driven Solutions",
    description: "Pioneering cutting-edge approaches that combine OneStream's capabilities with our proprietary methodologies for unprecedented business outcomes."
  },
  {
    title: "Proven Enterprise Success",
    description: "Trusted by Fortune 500 companies with a 100% implementation success rate and documented ROI improvement for every client engagement."
  },
  {
    title: "Global Reach & Support",
    description: "Operating across continents with localized expertise and 24/7 premium support infrastructure for seamless service delivery."
  }
];

const oneStreamSolutions = [
  {
    icon: <BarChartIcon sx={{ fontSize: 35, color: 'white' }} />,
    title: 'Corporate Performance Management (CPM)',
    description: 'Unified CPM software that streamlines financial operations and enhances decision-making capabilities.',
    features: [
      'Financial Close & Consolidation',
      'Planning, Budgeting & Forecasting',
      'Financial Data Quality Management',
      'Financial Reporting & Analysis'
    ]
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 35, color: 'white' }} />,
    title: 'Financial Close & Consolidation',
    description: 'Accelerate your financial close process with automated consolidation and reporting.',
    features: [
      'Automated Currency Conversion',
      'Intercompany Eliminations',
      'Complex Ownership Structures',
      'Journal Entry Management'
    ]
  },
  {
    icon: <AssessmentIcon sx={{ fontSize: 35, color: 'white' }} />,
    title: 'Planning & Forecasting',
    description: 'Dynamic planning and forecasting solutions for better business insights.',
    features: [
      'Driver-Based Planning',
      'Rolling Forecasts',
      'Scenario Analysis',
      'Predictive Analytics'
    ]
  },
  {
    icon: <AutoGraphIcon sx={{ fontSize: 35, color: 'white' }} />,
    title: 'Financial Data Analytics',
    description: 'Transform financial data into actionable insights with advanced analytics.',
    features: [
      'Custom Dashboards',
      'KPI Monitoring',
      'Trend Analysis',
      'Performance Metrics'
    ]
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 35, color: 'white' }} />,
    title: 'System Integration',
    description: 'Seamless integration with existing enterprise systems and data sources.',
    features: [
      'ERP Integration',
      'Data Warehouse Connection',
      'API Development',
      'Custom Connectors'
    ]
  },
  {
    icon: <DataUsageIcon sx={{ fontSize: 35, color: 'white' }} />,
    title: 'Data Quality Management',
    description: 'Ensure data accuracy and reliability across your financial processes.',
    features: [
      'Data Validation Rules',
      'Audit Trail',
      'Data Governance',
      'Quality Controls'
    ]
  }
];

export default About; 