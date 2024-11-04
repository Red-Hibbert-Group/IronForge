import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Fade, IconButton } from '@mui/material';
import { ArrowForward, CheckCircleOutline } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';

const Implementation = () => {
  const implementations = [
    {
      title: 'Financial Close & Consolidation',
      description: 'Streamline your financial close process with OneStreams unified platform. Our implementation services help organizations automate consolidations, eliminate manual processes, and ensure accuracy in financial reporting. We specialize in setting up complex consolidation rules, intercompany matching, and journal entry management.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Planning, Budgeting & Forecasting',
      description: 'Transform your planning processes with OneStream extensible platform. We implement robust budgeting and forecasting solutions that integrate operational and financial planning, enabling driver-based planning, rolling forecasts, and what-if scenario analysis.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Financial Data Quality Management',
      description: 'Ensure data accuracy and reliability with OneStreams built-in financial data quality tools. Our implementation includes setting up guided workflows, validation rules, and controls to maintain data integrity throughout the financial process.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Account Reconciliation',
      description: 'Automate and streamline account reconciliations with OneStreams purpose-built solutions. We implement end-to-end reconciliation processes, including automated matching, variance analysis, and approval workflows to reduce manual effort and risk.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Reporting & Analytics',
      description: 'Leverage OneStreams powerful reporting capabilities with our implementation services. We set up comprehensive financial and operational reporting, including dashboard creation, ad-hoc analysis tools, and self-service reporting features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'ESG & Sustainability Reporting',
      description: `Transform your ESG reporting with OneStream's comprehensive platform. Our implementation services include:
      • Environmental metrics tracking (carbon emissions, energy usage, waste management)
      • Social impact measurements (workforce diversity, community engagement, labor practices)
      • Governance reporting (board diversity, ethics, compliance)
      • Automated data collection and validation`,
      image: 'https://images.unsplash.com/photo-1535615615570-3b839f4359be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <>
      <Navbar />
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
            Comprehensive EPM and CPM Solutions for Modern Finance
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container>
          <Box sx={{ 
            mb: 8, 
            p: 4, 
            borderRadius: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                textAlign: 'center', 
                maxWidth: '800px', 
                margin: '0 auto',
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: '#2c3e50'
              }}
            >
              Our certified OneStream experts deliver comprehensive implementation services for both Enterprise Performance Management (EPM) and Corporate Performance Management (CPM) solutions. We follow OneStream's proven methodology to ensure successful deployments that meet your specific business requirements.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {implementations.map((implementation, index) => (
              <Grid item xs={12} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                    '& .MuiCardMedia-root': {
                      transform: 'scale(1.05)'
                    }
                  }
                }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={implementation.image}
                      alt={implementation.title}
                      sx={{ 
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      height: '50%'
                    }} />
                  </Box>
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: 3,
                    position: 'relative'
                  }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        mb: 2,
                        color: '#1976d2',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      {implementation.title}
                      <IconButton 
                        size="small" 
                        sx={{ 
                          ml: 'auto',
                          opacity: 0,
                          transition: 'opacity 0.2s',
                          '.MuiCard-root:hover &': {
                            opacity: 1
                          }
                        }}
                      >
                        <ArrowForward />
                      </IconButton>
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        lineHeight: 1.8,
                        color: '#546e7a'
                      }}
                    >
                      {implementation.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ 
            mt: 12, 
            textAlign: 'center',
            p: 5,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            color: 'white',
            boxShadow: '0 8px 32px rgba(25, 118, 210, 0.2)'
          }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              data-aos="fade-up"
              sx={{ 
                fontWeight: 700,
                mb: 4,
                color: 'white'
              }}
            >
              Why Choose Our Implementation Services?
            </Typography>
            <Grid container spacing={3} sx={{ maxWidth: '900px', margin: '0 auto' }}>
              {[
                'Certified OneStream implementation experts',
                'Proven methodology and best practices',
                'Tailored solutions for your specific industry needs',
                'End-to-end project management and support',
                'Training and knowledge transfer included',
                'Post-implementation support and optimization'
              ].map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateX(8px)'
                    }
                  }}>
                    <CheckCircleOutline sx={{ color: '#81d4fa' }} />
                    <Typography sx={{ textAlign: 'left' }}>{benefit}</Typography>
                  </Box>
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