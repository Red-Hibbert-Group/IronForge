import { Box, Container, Typography, Grid, Card, CardContent, Button, IconButton, Collapse } from '@mui/material';
import { ArrowForward, CheckCircleOutline, Analytics, AccountBalance, Timeline, Assessment, BarChart, Security, ArrowRightAlt, ExpandMore } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Rocket, Architecture, Support, TrendingUp, Engineering, Speed } from '@mui/icons-material';

const Implementation = () => {
  const implementations = [
    {
      title: 'Financial Close & Consolidation',
      subtitle: 'FCCS',
      description: 'Streamline your financial close process and consolidate financial statements across multiple entities.',
      features: [
        'Automated consolidation processes',
        'Multi-GAAP reporting',
        'Intercompany transaction matching'
      ],
      icon: AccountBalance,
      color: '#1976d2'
    },
    {
      title: 'Planning & Budgeting',
      subtitle: 'EPBCS',
      description: 'Advanced planning and forecasting solutions for future-focused financial modeling and budgeting processes.',
      features: [
        'Rolling forecasts',
        'What-if scenario analysis',
        'Driver-based planning capabilities'
      ],
      icon: Timeline,
      color: '#2196f3'
    },
    {
      title: 'Account Reconciliation',
      subtitle: 'ARCS',
      description: 'Automate and streamline your account reconciliation process with powerful matching and verification capabilities.',
      features: [
        'Automated matching rules',
        'Risk-based reconciliation',
        'Variance analysis'
      ],
      icon: Assessment,
      color: '#4caf50'
    },
    {
      title: 'Enterprise Cost Management',
      subtitle: 'ECMS',
      description: 'Sophisticated cost allocation and management solutions for better profitability analysis.',
      features: [
        'Activity-based costing',
        'Profitability reporting',
        'Cost driver analysis'
      ],
      icon: BarChart,
      color: '#ffa726'
    },
    {
      title: 'Tax Reporting',
      subtitle: 'TRCS',
      description: 'Comprehensive tax provision and reporting solution to streamline corporate tax operations.',
      features: [
        'Global tax provision',
        'Country-by-country reporting',
        'Compliance management'
      ],
      icon: Security,
      color: '#f44336'
    },
    {
      title: 'Narrative Reporting',
      subtitle: 'Analytics',
      description: 'Create and manage board books, regulatory filings, and other narrative management reports.',
      features: [
        'Collaborative report authoring',
        'XBRL tagging',
        'Workflow automation'
      ],
      icon: Analytics,
      color: '#9c27b0'
    }
  ];

  const processSteps = [
    {
      icon: Engineering,
      title: 'Discovery & Planning',
      description: 'We analyze your needs and create a tailored implementation roadmap',
      color: '#64B5F6'
    },
    {
      icon: Architecture,
      title: 'Configuration & Setup',
      description: 'Expert configuration of your systems following best practices',
      color: '#81C784'
    },
    {
      icon: Speed,
      title: 'Testing & Validation',
      description: 'Rigorous testing to ensure everything works perfectly',
      color: '#FFB74D'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Smooth deployment with ongoing expert support',
      color: '#E57373'
    }
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);

  // Scroll-driven animation handler
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          position: 'relative',
          overflow: 'hidden',
          color: 'white',
          // Enhanced mesh background with parallax effect
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollPosition * 0.2}px)`,
            transition: 'transform 0.1s ease-out',
            zIndex: 0,
          },
        }}
      >
        {/* Hero Section with Airbnb-style floating cards */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ 
            textAlign: 'center',
            pt: { xs: 15, md: 20 },
            mb: { xs: 6, md: 10 },
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #fff, #82B1FF)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mb: 2,
                  // Text outline effect
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                Implementation Solutions
              </Typography>
              
              {/* Airbnb-style floating search bar */}
              <Box
                sx={{
                  maxWidth: 600,
                  mx: 'auto',
                  mt: 4,
                  mb: 8,
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '100px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.15)',
                    transform: 'scale(1.02)',
                  }
                }}
              >
                <input
                  placeholder="Search solutions..."
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    padding: '16px 24px',
                    width: '100%',
                    fontSize: '1.1rem',
                    outline: 'none',
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '100px',
                    px: 4,
                    py: 1.5,
                    background: 'linear-gradient(45deg, #2196f3, #1976d2)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976d2, #1565c0)',
                    }
                  }}
                >
                  Search
                </Button>
              </Box>
            </motion.div>

            {/* Implementation Cards with Scroll-Driven Animations */}
            <Box sx={{ py: 8 }}>
              <Grid container spacing={4}>
                {implementations.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          position: 'relative',
                          overflow: 'hidden',
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: 4,
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            transform: 'translateY(-8px) scale(1.02)',
                            boxShadow: `0 16px 70px ${item.color}40`,
                            '&::before': {
                              transform: 'translateX(0)',
                            }
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.5s ease',
                          }
                        }}
                      >
                        <CardContent sx={{ p: 4 }}>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box
                                  sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: '20px',
                                    bgcolor: item.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: `0 8px 20px ${item.color}40`,
                                  }}
                                >
                                  <item.icon sx={{ fontSize: 30, color: 'white' }} />
                                </Box>
                                <Box>
                                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
                                    {item.title}
                                  </Typography>
                                  <Typography variant="subtitle1" sx={{ color: item.color, fontWeight: 600 }}>
                                    {item.subtitle}
                                  </Typography>
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                {item.description}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                              <IconButton
                                onClick={() => handleExpandClick(index)}
                                sx={{
                                  transform: expandedCard === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.3s',
                                  color: item.color,
                                }}
                              >
                                <ExpandMore />
                              </IconButton>
                            </Grid>
                          </Grid>

                          <Collapse in={expandedCard === index} timeout="auto" unmountOnExit>
                            <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                              <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                  <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
                                    Key Features
                                  </Typography>
                                  {item.features.map((feature, idx) => (
                                    <Box
                                      key={idx}
                                      sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2,
                                      }}
                                    >
                                      <CheckCircleOutline sx={{ mr: 1, color: item.color }} />
                                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                        {feature}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
                                    Benefits
                                  </Typography>
                                  <Box sx={{ bgcolor: 'rgba(255,255,255,0.05)', p: 3, borderRadius: 2 }}>
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                                      • Increased efficiency and accuracy
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                                      • Reduced manual effort and errors
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                      • Better decision-making capabilities
                                    </Typography>
                                  </Box>
                                  <Button
                                    variant="contained"
                                    sx={{
                                      mt: 3,
                                      bgcolor: item.color,
                                      '&:hover': { bgcolor: `${item.color}CC` },
                                    }}
                                    endIcon={<ArrowRightAlt />}
                                  >
                                    Get Started
                                  </Button>
                                </Grid>
                              </Grid>
                            </Box>
                          </Collapse>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Floating Statistics with Parallax Effect */}
            <Box 
              sx={{ 
                py: 10, 
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(33,150,243,0.1), rgba(33,150,243,0.05))',
                  transform: `translateY(${scrollPosition * 0.1}px)`,
                  borderRadius: 4,
                  zIndex: -1,
                }
              }}
            >
              <Grid container spacing={4}>
                {[
                  { number: '500+', label: 'Successful Implementations' },
                  { number: '98%', label: 'Client Satisfaction' },
                  { number: '50+', label: 'Countries Served' },
                  { number: '15+', label: 'Years of Experience' }
                ].map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: '#82B1FF',
                          mb: 1
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: 'rgba(255,255,255,0.8)' }}
                      >
                        {stat.label}
                      </Typography>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default Implementation;