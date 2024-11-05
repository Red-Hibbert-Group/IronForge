import { Box, Container, Typography, Grid, Card, CardContent, IconButton, Icon, Fade, Button } from '@mui/material';
import { ArrowForward, CheckCircleOutline, Analytics, AccountBalance, Timeline, Assessment, BarChart, Security } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';
import { motion } from 'framer-motion';

const Implementation = () => {
  const implementations = [
    {
      title: 'Financial Close & Consolidation',
      subtitle: 'FCCS',
      description: 'Streamline your financial close process and consolidate financial statements across multiple entities with our advanced FCCS solution.',
      features: [
        'Automated consolidation processes',
        'Multi-GAAP reporting',
        'Intercompany transaction matching'
      ],
      icon: AccountBalance,
      gradient: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)'
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
      gradient: 'linear-gradient(135deg, #2196f3 0%, #64b5f6 100%)'
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
      gradient: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)'
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
      gradient: 'linear-gradient(135deg, #ffa726 0%, #ffd54f 100%)'
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
      gradient: 'linear-gradient(135deg, #f44336 0%, #ef9a9a 100%)'
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
      gradient: 'linear-gradient(135deg, #9c27b0 0%, #e1bee7 100%)'
    }
  ];

  const MotionCard = motion(Card);

  return (
    <>
      <Navbar />
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Replace the current hero section with the previous heading style */}
        <Box sx={{ 
          pt: 15,
          pb: 6,
          background: 'linear-gradient(135deg, #f6f9fc 0%, #ffffff 100%)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
          }
        }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 3 }}>
              <Box
                component="img"
                src="/onestream-logo.webp"
                alt="OneStream"
                sx={{
                  height: { xs: '35px', sm: '45px', md: '55px' },
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Typography
                variant="h2"
                component="span"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.2rem' },
                  background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  position: 'relative',
                  textShadow: '0 4px 12px rgba(25, 118, 210, 0.1)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '0',
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 4px rgba(25, 118, 210, 0.2)',
                  }
                }}
              >
                Implementation Services
              </Typography>
            </Box>
            <Typography 
              variant="h5" 
              align="center" 
              sx={{ 
                color: '#666',
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              Enterprise Performance Management Solutions for Modern Finance
            </Typography>
          </Container>
        </Box>

        {/* Implementation Cards Section */}
        <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
          <Container>
            <Grid container spacing={4}>
              {implementations.map((implementation, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <MotionCard
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      overflow: 'hidden',
                      background: '#ffffff',
                      position: 'relative',
                      '&:hover': {
                        '& .implementation-overlay': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        background: implementation.gradient,
                        p: 4,
                        color: 'white',
                      }}
                    >
                      <Icon
                        component={implementation.icon}
                        sx={{
                          fontSize: 40,
                          mb: 2,
                        }}
                      />
                      <Typography variant="h5" fontWeight={700} gutterBottom>
                        {implementation.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                        {implementation.subtitle}
                      </Typography>
                    </Box>

                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="body1" sx={{ mb: 3, color: '#546e7a' }}>
                        {implementation.description}
                      </Typography>
                      
                      <Box sx={{ mt: 2 }}>
                        {implementation.features.map((feature, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                            }}
                          >
                            <CheckCircleOutline
                              sx={{ mr: 1, color: 'primary.main', fontSize: 20 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      <Button
                        variant="contained"
                        endIcon={<ArrowForward />}
                        sx={{
                          mt: 3,
                          borderRadius: 2,
                          textTransform: 'none',
                          background: implementation.gradient,
                          '&:hover': {
                            background: implementation.gradient,
                            filter: 'brightness(110%)',
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </MotionCard>
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

export default Implementation;