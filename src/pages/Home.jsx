import { Box, ThemeProvider, Button, Container, Typography, Stack, Divider, Grid, useTheme, alpha } from '@mui/material';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import ParallaxBanner from '../components/home/ParallaxBanner';
import AnimatedHeader from '../components/home/AnimatedHeader';
import DynamicFooter from '../components/home/DynamicFooter';
import MissionSection from '../components/home/MissionSection';
import ClientSuccess from '../components/home/ClientSuccess';
import OneStreamImplementation from '../components/home/OneStreamImplementation';
import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { theme } from '../theme/theme';
import Navbar from '../components/Navbar';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SupportIcon from '@mui/icons-material/Support';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef(null);
  const statsRef = useRef(null);
  const theme = useTheme();

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-out-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: 'smooth'
    });
  };

  const featureBoxes = [
    {
      icon: <SpeedIcon sx={{ fontSize: 28 }} />,
      title: "Accelerated Implementation",
      description: "Reduce implementation time by up to 50% with our proven methodologies"
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 28 }} />,
      title: "Enterprise Security",
      description: "Bank-grade security with comprehensive data protection protocols"
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 28 }} />,
      title: "Advanced Analytics",
      description: "Real-time insights and predictive analytics capabilities"
    },
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 28 }} />,
      title: "Seamless Integration",
      description: "Connect with your existing systems and data sources effortlessly"
    },
    {
      icon: <SupportIcon sx={{ fontSize: 28 }} />,
      title: "24/7 Support",
      description: "Dedicated team of certified experts always available"
    }
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.1
      }
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box 
        component="main"
        ref={mainRef}
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary',
          overflowX: 'hidden',
          position: 'relative',
          minHeight: '100vh',
        }}
      >
        {/* Hero Section with Light Modern Gradient */}
        <Box className="light-hero-gradient" sx={{ 
          position: 'relative',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
          pt: 10,
          pb: 15
        }}>
          {/* Company Trust Banner at the top */}
          <Box 
            sx={{
              position: 'absolute',
              top: 20,
              left: 0,
              right: 0,
              zIndex: 10,
              textAlign: 'center',
              py: 1
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary', 
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#526DFE',
                    mr: 1
                  }}
                />
              </Typography>
            </motion.div>
          </Box>

          <Box 
            className="hero-particles"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1
            }}
          />
          
          <Hero />

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            style={{
              position: 'absolute',
              left: '50%',
              bottom: 40,
              zIndex: 10,
              transform: 'translateX(-50%)',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection(statsRef)}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExpandMoreIcon 
                sx={{ 
                  color: '#526DFE', 
                  fontSize: 40,
                  filter: 'drop-shadow(0 0 10px rgba(82, 109, 254, 0.5))'
                }} 
              />
            </motion.div>
          </motion.div>
        </Box>

        {/* Feature Cards */}
        <Box
          ref={statsRef}
          sx={{
            position: 'relative',
            mt: { xs: '-50px', md: '-80px' },
            mb: { xs: 10, md: 15 },
            zIndex: 20,
            px: { xs: 2, md: 4 }
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={3} alignItems="stretch">
              {featureBoxes.map((box, index) => (
                <Grid item xs={12} sm={6} md={4} lg={index > 2 ? 6 : 4} key={index}>
                  <motion.div
                    style={{ height: '100%', display: 'flex' }}
                    custom={index}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                  >
                    <Box
                      sx={{
                        p: 4,
                        height: '100%',
                        width: '100%',
                        borderRadius: '16px',
                        backgroundColor: 'white',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        overflow: 'hidden',
                        position: 'relative',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                          '& .icon-box': {
                            transform: 'scale(1.1) rotateY(10deg)',
                            boxShadow: '0 15px 35px rgba(82, 109, 254, 0.2)',
                          }
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          width: '150px',
                          height: '150px',
                          background: 'radial-gradient(circle, rgba(82, 109, 254, 0.05) 0%, transparent 70%)',
                          top: '-75px',
                          right: '-75px',
                          borderRadius: '50%',
                          zIndex: 0
                        }
                      }}
                    >
                      <Box
                        className="icon-box"
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          boxShadow: '0 10px 25px rgba(82, 109, 254, 0.2)',
                          mb: 3,
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          transform: 'perspective(1000px)'
                        }}
                      >
                        {box.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 1,
                          fontSize: '1.25rem'
                        }}
                      >
                        {box.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          fontSize: '0.95rem'
                        }}
                      >
                        {box.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* OneStream Platform Section */}
        <Box
          sx={{ 
            py: { xs: 8, md: 12 },
            background: 'linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'url(/path-pattern.svg) no-repeat center center',
              backgroundSize: 'cover',
              opacity: 0.1,
              zIndex: 0
            }
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#526DFE',
                        fontWeight: 600,
                        mb: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                    >
                      Premier OneStream Partner
                    </Typography>
                    
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        fontSize: { xs: '2.25rem', md: '3.5rem' },
                        lineHeight: 1.2,
                        mb: 3
                      }}
                    >
                      Transform Your Financial Processes
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 4,
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        maxWidth: '90%'
                      }}
                    >
                      Unify your Corporate Performance Management and drive business excellence with our 
                      industry-leading OneStream implementation services. Streamline consolidation, 
                      planning, forecasting, and reporting in a single platform.
                    </Typography>
                    
                    {/* Feature List */}
                    <Grid container spacing={3} sx={{ mb: 5 }}>
                      {[
                        'Financial Consolidation',
                        'Budgeting & Forecasting',
                        'Reporting & Analytics',
                        'Financial Data Quality',
                        'Cash Flow Planning',
                        'Account Reconciliation'
                      ].map((feature, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckCircleOutlineIcon 
                              sx={{ 
                                color: '#526DFE',
                                mr: 2,
                                fontSize: '1.2rem'
                              }}
                            />
                            <Typography
                              sx={{
                                color: 'text.primary',
                                fontSize: '1rem'
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    
                    <Button
                      component={Link}
                      to="/services"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        borderRadius: '50px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: '0 10px 20px rgba(82, 109, 254, 0.2)',
                        '&:hover': {
                          boxShadow: '0 15px 30px rgba(82, 109, 254, 0.3)',
                          transform: 'translateY(-3px)',
                          background: 'linear-gradient(135deg, #6281FF 0%, #9D75FF 100%)',
                        }
                      }}
                    >
                      Explore OneStream Solutions
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <Box sx={{ position: 'relative' }}>
                    {/* Background glow */}
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '140%',
                        height: '140%',
                        background: 'radial-gradient(ellipse at center, rgba(82, 109, 254, 0.1) 0%, transparent 70%)',
                        top: '-20%',
                        left: '-20%',
                        zIndex: -1,
                        filter: 'blur(40px)',
                        opacity: 0.7
                      }}
                    />
                    
                    {/* Image Frame */}
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                        transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                        transition: 'transform 0.4s ease',
                        '&:hover': {
                          transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                        }
                      }}
                    >
                      {/* Frame Border */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          zIndex: 2,
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          borderRadius: '20px',
                          pointerEvents: 'none'
                        }}
                      />
                      
                      {/* Image */}
                      <Box
                        component="img"
                        src="/onestream-logo.webp"
                        alt="OneStream Platform"
                        sx={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          background: 'white',
                          p: 6,
                          borderRadius: '20px'
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Case Study & Testimonial Section */}
        <Box
          sx={{
            py: { xs: 10, md: 15 },
            background: 'white',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'url("/path-pattern.svg") no-repeat center center',
              backgroundSize: 'cover',
              opacity: 0.05,
              zIndex: 0
            }
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              {/* Section Header */}
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: '#526DFE',
                      letterSpacing: '1px',
                      mb: 2
                    }}
                  >
                    Proven Results
                  </Typography>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '2.25rem', md: '3.5rem' },
                      color: 'text.primary',
                      mb: 2,
                      lineHeight: 1.2
                    }}
                  >
                    Delivering Exceptional Value
                  </Typography>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.1rem',
                      color: 'text.secondary',
                      maxWidth: '750px',
                      mx: 'auto',
                      lineHeight: 1.8
                    }}
                  >
                    Our clients experience measurable improvements in financial performance,
                    operational efficiency, and business agility. Here's how we transform enterprises.
                  </Typography>
                </motion.div>
              </Box>
              
              {/* Stats Grid */}
              <Grid container spacing={4} alignItems="stretch" sx={{ mb: 10 }}>
                {[
                  { value: '96%', label: 'Client Satisfaction', description: 'Our clients rate us 4.8/5 in implementation quality' },
                  { value: '40%', label: 'Reduction in Close Cycle', description: 'Clients see significant improvements in financial close times' },
                  { value: '250+', label: 'Implementations', description: 'Successful OneStream projects delivered globally' },
                  { value: '99.9%', label: 'System Uptime', description: 'Ensuring continuous operation for mission-critical finance' }
                ].map((stat, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      style={{ height: '100%', display: 'flex' }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          width: '100%',
                          p: 4,
                          borderRadius: '16px',
                          position: 'relative',
                          textAlign: 'center',
                          backgroundColor: 'white',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.3s ease',
                          overflow: 'hidden',
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                            '& .stat-value': {
                              color: '#526DFE'
                            }
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: '150px',
                            height: '150px',
                            background: 'radial-gradient(circle, rgba(82, 109, 254, 0.05) 0%, transparent 70%)',
                            borderRadius: '50%',
                            bottom: '-75px',
                            right: '-75px'
                          }
                        }}
                      >
                        <Typography
                          className="stat-value"
                          variant="h2"
                          sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2.5rem', md: '3rem' },
                            color: 'text.primary',
                            mb: 1,
                            transition: 'color 0.3s ease'
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            mb: 1,
                            fontSize: '1.1rem'
                          }}
                        >
                          {stat.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.9rem',
                            lineHeight: 1.6
                          }}
                        >
                          {stat.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
              
              {/* CTA Button */}
              <Box sx={{ textAlign: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button
                    component={Link}
                    to="/case-studies"
                    variant="outlined"
                    size="large"
                    sx={{
                      color: '#526DFE',
                      borderColor: '#526DFE',
                      borderWidth: 2,
                      borderRadius: '50px',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#526DFE',
                        backgroundColor: 'rgba(82, 109, 254, 0.05)',
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    View Success Stories
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Services Section - Enhanced */}
        <Box
          sx={{
            py: { xs: 10, md: 15 },
            background: 'linear-gradient(180deg, #f5f7fa 0%, #e4e9f2 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background design elements */}
          <Box
            component={motion.div}
            animate={{ 
              rotate: 360,
              transition: { duration: 100, repeat: Infinity, ease: "linear" } 
            }}
            sx={{
              position: 'absolute',
              width: '800px',
              height: '800px',
              borderRadius: '50%',
              border: '1px dashed rgba(82, 109, 254, 0.1)',
              top: '-400px',
              left: '-400px',
              zIndex: 0
            }}
          />
          
          <Box
            component={motion.div}
            animate={{ 
              rotate: -360,
              transition: { duration: 120, repeat: Infinity, ease: "linear" } 
            }}
            sx={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              border: '1px dashed rgba(142, 95, 254, 0.1)',
              bottom: '-300px',
              right: '-300px',
              zIndex: 0
            }}
          />
          
          {/* Animated floating particles */}
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                y: [Math.random() * 50, Math.random() * -50],
                x: [Math.random() * 50, Math.random() * -50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                position: 'absolute',
                width: Math.random() * 150 + 50,
                height: Math.random() * 150 + 50,
                borderRadius: '50%',
                background: `radial-gradient(circle, rgba(82, 109, 254, ${Math.random() * 0.03 + 0.02}) 0%, transparent 70%)`,
                filter: 'blur(40px)',
                zIndex: 0,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          <Container maxWidth="lg">
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              {/* Section Header */}
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: '#526DFE',
                      letterSpacing: '1px',
                      mb: 2
                    }}
                  >
                    Our Services
                  </Typography>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '2.25rem', md: '3.5rem' },
                      color: 'text.primary',
                      mb: 2,
                      lineHeight: 1.2
                    }}
                  >
                    Comprehensive OneStream Solutions
                  </Typography>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.1rem',
                      color: 'text.secondary',
                      maxWidth: '750px',
                      mx: 'auto',
                      lineHeight: 1.8
                    }}
                  >
                    From implementation and integration to optimization and support, 
                    we provide end-to-end services tailored to your enterprise needs.
                  </Typography>
                </motion.div>
              </Box>
              
              {/* Enhanced ServicesOverview will be updated separately */}
              <ServicesOverview />
            </Box>
          </Container>
        </Box>

        {/* Final CTA */}
        <Box
          sx={{
            py: { xs: 12, md: 20 },
            background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Elements */}
          <Box
            component={motion.div}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            sx={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              border: '1px dashed rgba(82, 109, 254, 0.2)',
              top: '-200px',
              right: '-200px',
              zIndex: 0
            }}
          />
          
          <Box
            component={motion.div}
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            sx={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              border: '1px dashed rgba(142, 95, 254, 0.2)',
              bottom: '-150px',
              left: '-150px',
              zIndex: 0
            }}
          />
          
          <Container maxWidth="md">
            <Box 
              sx={{ 
                textAlign: 'center',
                position: 'relative',
                zIndex: 2
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    fontWeight: 800,
                    color: 'text.primary',
                    lineHeight: 1.2,
                    mb: 3
                  }}
                >
                  Ready to Transform Your Finance?
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    color: 'text.secondary',
                    mb: 6,
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.8
                  }}
                >
                  Join industry leaders who have revolutionized their financial operations 
                  with our expert OneStream implementation services. Let's build your future-ready 
                  finance organization together.
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  sx={{ 
                    background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                    color: 'white',
                    boxShadow: '0 10px 20px rgba(82, 109, 254, 0.3)',
                    borderRadius: '50px',
                    px: 5,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #6281FF 0%, #9D75FF 100%)',
                      boxShadow: '0 15px 30px rgba(82, 109, 254, 0.4)',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  Schedule a Consultation
                </Button>
              </motion.div>
            </Box>
          </Container>
        </Box>

        <DynamicFooter />
      </Box>
    </ThemeProvider>
  );
};

export default Home; 