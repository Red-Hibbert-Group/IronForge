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

// Import data
import aboutData from '../data/aboutData.json';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Timeline: TimelineIcon,
  Security: SecurityIcon,
  Speed: SpeedIcon,
  Groups: GroupsIcon,
  BarChart: BarChartIcon,
  AccountBalance: AccountBalanceIcon,
  Assessment: AssessmentIcon,
  AutoGraph: AutoGraphIcon,
  IntegrationInstructions: IntegrationInstructionsIcon,
  DataUsage: DataUsageIcon,
};

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
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* Light particles background for consistency with Home */}
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
          {/* Create subtle particle effect */}
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                y: [Math.random() * 100, Math.random() * 100 + 200],
                x: [Math.random() * 100, Math.random() * 100 + 200],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                borderRadius: '50%',
                background: `rgba(82, 109, 254, ${Math.random() * 0.3 + 0.1})`,
                boxShadow: '0 0 10px rgba(82, 109, 254, 0.3)',
                zIndex: 1,
              }}
            />
          ))}
        </Box>
        
        {/* Subtle gradient overlay */}
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
        
        {/* Animated floating elements */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            animate={floatingAnimation}
            style={{
              position: 'absolute',
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(82, 109, 254, ${Math.random() * 0.08 + 0.02}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
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
            border: '1px dashed rgba(82, 109, 254, 0.1)',
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
            border: '1px dashed rgba(142, 95, 254, 0.1)',
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
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        fontSize: '1rem',
                        mb: 2,
                        display: 'block',
                        textTransform: 'uppercase',
                        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {aboutData.hero.subtitle}
                    </Typography>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Typography 
                      variant="h1"
                      sx={{
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                        fontWeight: 800,
                        mb: 3,
                        background: `linear-gradient(to right, ${theme.palette.text.primary} 20%, ${theme.palette.primary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1.2,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {aboutData.hero.title}
                    </Typography>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Typography 
                      variant="h4"
                      sx={{
                        color: theme.palette.text.secondary,
                        maxWidth: '600px',
                        fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                        fontWeight: 300,
                        lineHeight: 1.6,
                        mb: 4
                      }}
                    >
                      {aboutData.hero.description}
                    </Typography>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                      <Button
                        variant="contained"
                        sx={{
                          px: 4,
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                        }}
                      >
                        {aboutData.hero.primaryButton}
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          px: 4,
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                        }}
                      >
                        {aboutData.hero.secondaryButton}
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
                      border: `2px dashed ${theme.palette.primary.main}20`,
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
                      border: `2px dashed ${theme.palette.secondary.main}20`,
                    }}
                  />
                  {/* Hero Image or 3D Element would go here */}
                  <Box
                    sx={{
                      width: '70%',
                      height: '70%',
                      background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
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

        {/* Stats Section with Enhanced Design */}
        <Container maxWidth="lg" sx={{ py: 12, position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4}>
            {aboutData.stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'center',
                      position: 'relative',
                      borderRadius: '24px',
                      border: `1px solid ${theme.palette.primary.main}20`,
                      transform: 'perspective(1000px) rotateX(5deg)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateX(0deg) translateY(-10px)',
                        border: `1px solid ${theme.palette.primary.main}50`,
                        boxShadow: `0 20px 40px ${theme.palette.primary.main}15`,
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
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, transparent 100%)`,
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
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
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
                          color: theme.palette.text.primary,
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

        {/* OneStream Implementation Solutions */}
        <Box sx={{ 
          position: 'relative',
          py: 16,
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)',
        }}>
          
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
                    background: `linear-gradient(45deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 90%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {aboutData.oneStreamSolutions.title}
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    mb: 8,
                    color: theme.palette.text.secondary,
                    maxWidth: '800px',
                    mx: 'auto',
                    fontWeight: 300,
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    lineHeight: 1.6,
                  }}
                >
                  {aboutData.oneStreamSolutions.subtitle}
                </Typography>
              </motion.div>
            </Box>
            
            <Grid container spacing={4} alignItems="stretch">
              {aboutData.oneStreamSolutions.solutions.map((solution, index) => {
                const IconComponent = iconMap[solution.icon];
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div
                      style={{ height: '100%' }}
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
                          background: 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(20px)',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '24px',
                          overflow: 'hidden',
                          boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                          position: 'relative',
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
                            border: `1px solid ${theme.palette.primary.main}30`,
                            '& .solution-icon': {
                              transform: 'scale(1.1) rotate(5deg)',
                              boxShadow: `0 12px 24px ${theme.palette.primary.main}40`,
                            }
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '100%',
                            background: `linear-gradient(180deg, ${theme.palette.primary.main}10 0%, transparent 100%)`,
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
                              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                              boxShadow: `0 8px 20px ${theme.palette.primary.main}30`,
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                              transform: 'rotate(-5deg)',
                            }}
                          >
                            {IconComponent && (
                              <IconComponent 
                                sx={{ 
                                  fontSize: 35,
                                  color: 'white',
                                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                                }} 
                              />
                            )}
                          </Box>
                          <Typography
                            variant="h5"
                            sx={{
                              mb: 2,
                              fontWeight: 700,
                              color: theme.palette.text.primary,
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
                              color: theme.palette.text.secondary,
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
                                  color: theme.palette.text.primary,
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
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
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
                );
              })}
            </Grid>
          </Container>
        </Box>

        {/* Core Strengths Section */}
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
                  background: `linear-gradient(45deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 90%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                  mb: 2
                }}
              >
                {aboutData.expertise.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'center',
                  color: theme.palette.text.secondary,
                  maxWidth: '800px',
                  mx: 'auto',
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                  fontWeight: 300,
                  lineHeight: 1.6,
                  mb: 8
                }}
              >
                {aboutData.expertise.subtitle}
              </Typography>
            </motion.div>
          </Box>
          
          <Grid container spacing={4} alignItems="stretch">
            {aboutData.expertise.strengths.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    style={{ height: '100%' }}
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
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(20px)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                        position: 'relative',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: `0 20px 40px ${theme.palette.primary.main}15`,
                          border: `1px solid ${theme.palette.primary.main}30`,
                          '& .strength-icon': {
                            transform: 'scale(1.1) rotate(10deg)',
                          }
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '100%',
                          background: `linear-gradient(180deg, ${theme.palette.primary.main}10 0%, transparent 100%)`,
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
                            background: `rgba(${theme.palette.primary.main}40, 0.1)`,
                            backdropFilter: 'blur(5px)',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
                            transform: 'rotate(-5deg)',
                          }}
                        >
                          {IconComponent && (
                            <IconComponent 
                              sx={{ 
                                fontSize: 35,
                                color: theme.palette.primary.main,
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                              }} 
                            />
                          )}
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 2,
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            fontSize: { xs: '1.3rem', md: '1.5rem' },
                            letterSpacing: '-0.01em'
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: theme.palette.text.secondary,
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
              );
            })}
          </Grid>
        </Container>

        {/* Why Choose Us Section */}
        <Box sx={{ 
          position: 'relative',
          py: 16,
          zIndex: 2,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}10 100%)`,
          backdropFilter: 'blur(20px)',
        }}>
          
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
                    color: theme.palette.text.primary,
                    mb: 2,
                    '& span': {
                      background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                    }
                  }}
                >
                  {aboutData.whyChooseUs.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                    maxWidth: '800px',
                    mx: 'auto',
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    fontWeight: 300,
                    lineHeight: 1.6,
                    mb: 8
                  }}
                >
                  {aboutData.whyChooseUs.subtitle}
                </Typography>
              </motion.div>
            </Box>
            
            <Grid container spacing={4} alignItems="stretch">
              {aboutData.whyChooseUs.reasons.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    style={{ height: '100%' }}
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
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        p: 4,
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          background: 'rgba(255, 255, 255, 0.9)',
                          border: `1px solid ${theme.palette.primary.main}30`,
                          '& .choose-icon': {
                            transform: 'scale(1.1) rotate(10deg)',
                            color: theme.palette.primary.main,
                          }
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '100%',
                          background: `linear-gradient(180deg, ${theme.palette.primary.main}10 0%, transparent 100%)`,
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
                          color: theme.palette.secondary.main,
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
                          color: theme.palette.text.primary,
                          fontSize: { xs: '1.3rem', md: '1.5rem' },
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: theme.palette.text.secondary,
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

export default About; 