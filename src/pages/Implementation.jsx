import { Box, Container, Typography, Grid, Card, CardContent, Button, IconButton } from '@mui/material';
import { 
  Analytics, 
  Architecture, 
  Speed, 
  Security, 
  School,
  CloudSync,
  Timeline,
  Assessment,
  Support,
  IntegrationInstructions
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Implementation = () => {
  const implementations = [
    {
      title: 'OneStream Implementation',
      description: 'End-to-end implementation of OneStream XF platform with best practices and industry standards.',
      icon: CloudSync,
      color: '#2196f3',
      features: [
        'Platform Configuration',
        'Data Integration',
        'Workflow Design',
        'Security Setup'
      ]
    },
    {
      title: 'Financial Close & Consolidation',
      description: 'Streamline your financial close process with automated consolidation and reporting.',
      icon: Timeline,
      color: '#4caf50',
      features: [
        'Automated Consolidation',
        'Intercompany Matching',
        'Currency Translation',
        'Financial Reporting'
      ]
    },
    {
      title: 'Planning & Forecasting',
      description: 'Advanced planning solutions for budgeting, forecasting, and strategic modeling.',
      icon: Assessment,
      color: '#ff9800',
      features: [
        'Driver-based Planning',
        'Rolling Forecasts',
        'Scenario Analysis',
        'Strategic Planning'
      ]
    },
    {
      title: 'Data Integration',
      description: 'Seamless integration with various data sources and systems for unified reporting.',
      icon: IntegrationInstructions,
      color: '#e91e63',
      features: [
        'ETL Processes',
        'Data Mapping',
        'Validation Rules',
        'Audit Trail'
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Discovery & Analysis',
      description: 'We analyze your current processes and requirements to create a tailored implementation plan.',
      icon: Analytics,
      color: '#2196f3'
    },
    {
      title: 'Design & Configuration',
      description: 'Expert configuration of OneStream platform following industry best practices.',
      icon: Architecture,
      color: '#4caf50'
    },
    {
      title: 'Data Migration',
      description: 'Seamless migration of your data with validation and reconciliation.',
      icon: Speed,
      color: '#ff9800'
    },
    {
      title: 'Testing & Training',
      description: 'Comprehensive testing and user training to ensure successful adoption.',
      icon: School,
      color: '#e91e63'
    },
    {
      title: 'Go-Live & Support',
      description: '24/7 support and maintenance to ensure smooth operations.',
      icon: Support,
      color: '#9c27b0'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Navbar />
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
        pt: 10 
      }}>
        {/* Hero Section */}
        <Container maxWidth="xl">
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
                color: 'white',
                textAlign: 'center',
                mb: 2
              }}
            >
              OneStream Implementation
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                mb: 8
              }}
            >
              Transform your financial processes with our expert OneStream implementation services
            </Typography>
          </motion.div>

          {/* Implementation Cards */}
          <Grid container spacing={4} sx={{ mb: 10 }}>
            {implementations.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 3
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: `${item.color}20`,
                            p: 2,
                            borderRadius: 2,
                            mr: 2
                          }}
                        >
                          <item.icon sx={{ fontSize: 40, color: item.color }} />
                        </Box>
                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                        {item.description}
                      </Typography>
                      <Grid container spacing={2}>
                        {item.features.map((feature, idx) => (
                          <Grid item xs={6} key={idx}>
                            <Box
                              sx={{
                                bgcolor: 'rgba(255,255,255,0.05)',
                                p: 2,
                                borderRadius: 2,
                                height: '100%'
                              }}
                            >
                              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                                {feature}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Implementation Process */}
          <Box sx={{ py: 10 }}>
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                textAlign: 'center',
                mb: 8,
                fontWeight: 700
              }}
            >
              Our Implementation Process
            </Typography>
            <Grid container spacing={4}>
              {processSteps.map((step, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 4
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: `${step.color}20`,
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3
                        }}
                      >
                        <step.icon sx={{ fontSize: 40, color: step.color }} />
                      </Box>
                      <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        {step.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default Implementation;