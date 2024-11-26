import { Container, Typography, Grid, Box, Paper, Card, CardContent, Icon } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <>
      <Navbar />
      <Box 
        sx={{
          background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Hero Section with Background Animation */}
        <Box
          sx={{
            position: 'relative',
            height: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.02)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2%, transparent 0%)',
              backgroundSize: '50px 50px',
              opacity: 0.4,
              animation: 'pulse 4s ease-in-out infinite'
            }
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 1 }}
            >
              <Typography 
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                  fontWeight: 800,
                  textAlign: 'center',
                  color: 'white',
                  mb: 3
                }}
              >
                Redefining Financial Excellence
              </Typography>
              <Typography 
                variant="h4"
                sx={{
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: '800px',
                  mx: 'auto',
                  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.8rem' }
                }}
              >
                Your Premier Partner in OneStream Implementation
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Stats Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
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
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'center',
                      position: 'relative',
                      borderRadius: 4,
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h3"
                        sx={{
                          color: '#82B1FF',
                          fontWeight: 700,
                          mb: 1
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          fontWeight: 500
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
          background: 'rgba(255,255,255,0.02)',
          py: 8 
        }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontWeight: 700,
                color: 'white'
              }}
            >
              OneStream Implementation Solutions
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Comprehensive suite of OneStream XF platform implementations tailored to your business needs
            </Typography>
            
            <Grid container spacing={4}>
              {oneStreamSolutions.map((solution, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={scaleIn}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        transition: 'all 0.3s ease-in-out',
                        border: '1px solid rgba(26,35,126,0.1)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                          border: '1px solid rgba(26,35,126,0.2)',
                        }
                      }}
                    >
                      <CardContent>
                        <Box sx={{ 
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2
                        }}>
                          {solution.icon}
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.primary.main
                            }}
                          >
                            {solution.title}
                          </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          {solution.description}
                        </Typography>
                        <Box component="ul" sx={{ 
                          pl: 2,
                          m: 0,
                          '& li': {
                            mb: 1,
                            color: '#334155'
                          }
                        }}>
                          {solution.features.map((feature, idx) => (
                            <Typography component="li" key={idx}>
                              {feature}
                            </Typography>
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

        {/* Expertise Cards */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
              color: theme.palette.primary.main
            }}
          >
            Our Core Strengths
          </Typography>
          <Grid container spacing={4}>
            {expertise.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(20px)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 2 }}>
                        {item.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: theme.palette.primary.main
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Success Metrics */}
        <Box sx={{ background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)', py: 8, color: 'white' }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 700,
                color: 'white',
                '& span': {
                  background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }
              }}
            >
              Why <span>Organization</span> Choose Us
            </Typography>
            <Grid container spacing={4}>
              {whyChooseUs.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <CheckCircleOutlineIcon 
                        sx={{ 
                          fontSize: 50, 
                          mb: 2,
                          color: '#FFD700', // Gold color
                          filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.3))', // Adds a subtle glow effect
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: '#FFA500', // Changes to orange-gold on hover
                            transform: 'scale(1.1)'
                          }
                        }} 
                      />
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography>
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
    icon: <TimelineIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
    title: 'Financial Analytics',
    description: 'Advanced analytics solutions that transform raw data into actionable insights.'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
    title: 'Secure Integration',
    description: 'Enterprise-grade security with seamless system integration capabilities.'
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
    title: 'Performance Optimization',
    description: 'Cutting-edge tools and methodologies for maximum system performance.'
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
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
    icon: <BarChartIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
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
    icon: <AccountBalanceIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
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
    icon: <AssessmentIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
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
    icon: <AutoGraphIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
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
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
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
    icon: <DataUsageIcon sx={{ fontSize: 40, color: '#1a237e' }} />,
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