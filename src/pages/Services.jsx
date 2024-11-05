import { Box, Container, Grid, Typography, Card, CardContent, Icon, Accordion, AccordionSummary, AccordionDetails, Paper, Button, Chip } from '@mui/material';
import { Analytics, Assessment, AccountBalance, Timeline, BarChart, CompareArrows, ExpandMore, Speed, Security, CloudSync, CheckCircle, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';
import { styled } from '@mui/material/styles';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const ServiceCard = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.spacing(3),
  background: '#ffffff',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12)',
    '& .card-media': {
      transform: 'scale(1.08)',
    },
    '& .hover-content': {
      opacity: 1,
      transform: 'translateY(0)',
    }
  }
}));

const Services = () => {
  const services = [
    {
      title: 'Enterprise Performance Management (EPM)',
      description: 'Transform your financial processes with our state-of-the-art EPM solutions. We help organizations streamline operations, improve accuracy, and drive strategic decision-making.',
      icon: Analytics,
      stats: [
        { value: '50%', label: 'Faster Close Time' },
        { value: '99.9%', label: 'Accuracy Rate' },
        { value: '40%', label: 'Cost Reduction' }
      ],
      benefits: [
        'Real-time financial insights',
        'Automated workflows',
        'Enhanced compliance',
        'Improved decision-making'
      ],
      subServices: [
        {
          title: 'Financial Close & Consolidation (FCCS)',
          description: 'Streamline your financial close process and consolidate financial statements across multiple entities with our advanced FCCS solution.',
          icon: AccountBalance,
          features: [
            'Automated consolidation processes',
            'Multi-GAAP reporting',
            'Intercompany transaction matching',
            'Journal entry management'
          ],
          tags: ['Consolidation', 'Reporting', 'Automation'],
          keyMetrics: [
            { value: '60%', label: 'Faster Close Cycle' },
            { value: '100%', label: 'Compliance Rate' }
          ],
          useCases: [
            'Global consolidation for multinational corporations',
            'Statutory reporting compliance',
            'Group financial reporting'
          ]
        },
        {
          title: 'Planning & Budgeting (EPBCS)',
          description: 'Advanced planning and forecasting solutions for future-focused financial modeling and budgeting processes.',
          icon: Timeline,
          features: [
            'Rolling forecasts',
            'What-if scenario analysis',
            'Driver-based planning',
            'Predictive planning'
          ],
          tags: ['Forecasting', 'Budgeting', 'Analysis'],
          keyMetrics: [
            { value: '45%', label: 'Planning Cycle Reduction' },
            { value: '90%', label: 'Forecast Accuracy' }
          ],
          useCases: [
            'Annual budget preparation',
            'Sales and revenue planning',
            'Workforce planning'
          ]
        },
        {
          title: 'Account Reconciliation (ARCS)',
          description: 'Automate and streamline your account reconciliation process with powerful matching and verification capabilities.',
          features: [
            'Automated matching rules',
            'Risk-based reconciliation',
            'Variance analysis',
            'Compliance tracking'
          ]
        },
        {
          title: 'Enterprise Cost Management (ECMS)',
          description: 'Sophisticated cost allocation and management solutions for better profitability analysis.',
          features: [
            'Activity-based costing',
            'Profitability reporting',
            'Cost driver analysis',
            'Resource allocation'
          ]
        },
        {
          title: 'Tax Reporting (TRCS)',
          description: 'Comprehensive tax provision and reporting solution to streamline corporate tax operations.',
          features: [
            'Global tax provision',
            'Country-by-country reporting',
            'Tax automation',
            'Compliance management'
          ]
        },
        {
          title: 'Narrative Reporting',
          description: 'Create and manage board books, regulatory filings, and other narrative management reports.',
          features: [
            'Collaborative report authoring',
            'XBRL tagging',
            'Document management',
            'Workflow automation'
          ]
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      {/* Enhanced Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)',
            backgroundSize: '50px 50px',
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.light',
                    fontWeight: 600,
                    letterSpacing: 2,
                    mb: 2,
                    display: 'block'
                  }}
                >
                  ENTERPRISE SOLUTIONS
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    lineHeight: 1.2,
                    mb: 3,
                    background: 'linear-gradient(45deg, #fff, #64B5F6)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Transform Your Financial Operations
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    mb: 4,
                    fontWeight: 300,
                    lineHeight: 1.6
                  }}
                >
                  Unlock the power of intelligent financial management with our comprehensive EPM solutions
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      px: 4,
                      background: 'linear-gradient(45deg, primary.main, primary.light)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    Explore Solutions
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      px: 4,
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.5)',
                      '&:hover': {
                        borderColor: 'white',
                        background: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    Schedule Demo
                  </Button>
                </Box>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: '100%',
                    height: '100%',
                    border: '2px solid',
                    borderColor: 'primary.light',
                    borderRadius: 4,
                    zIndex: 0
                  }
                }}
              >
                <Box
                  component="img"
                  src="/path/to/dashboard-preview.png"
                  alt="EPM Dashboard Preview"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: 6,
          background: 'white',
          transform: 'translateY(-50px)',
          borderRadius: '20px 20px 0 0',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {services[0].stats.map((stat, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      background: 'transparent',
                      border: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      {stat.label}
                    </Typography>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(180deg, #f0f2f5 0%, #ffffff 100%)',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 8,
              fontWeight: 800,
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Enterprise Performance Management Solutions
          </Typography>

          <Grid container spacing={4}>
            {services[0].subServices.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <ServiceCard elevation={0}>
                  {/* Card Media Section */}
                  <Box
                    className="card-media"
                    sx={{
                      height: 200,
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #0d47a1 0%, #1a237e 100%)',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url(/path/to/service-pattern.svg)',
                        backgroundSize: 'cover',
                        opacity: 0.1,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        width: '100%',
                        px: 3,
                      }}
                    >
                      <Icon
                        component={service.icon || Analytics}
                        sx={{
                          fontSize: 56,
                          color: 'white',
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Card Content */}
                  <Box sx={{ p: 3 }}>
                    {/* Tags */}
                    {service.tags && (
                      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {service.tags.map((tag, idx) => (
                          <Chip
                            key={idx}
                            label={tag}
                            size="small"
                            sx={{
                              borderRadius: '6px',
                              background: 'linear-gradient(45deg, #e3f2fd, #bbdefb)',
                              color: '#1565c0',
                              fontWeight: 600,
                              '&:hover': {
                                background: 'linear-gradient(45deg, #bbdefb, #90caf9)',
                              }
                            }}
                          />
                        ))}
                      </Box>
                    )}

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Key Metrics */}
                    {service.keyMetrics && (
                      <Grid container spacing={2} sx={{ mb: 3 }}>
                        {service.keyMetrics.map((metric, idx) => (
                          <Grid item xs={6} key={idx}>
                            <Box
                              sx={{
                                p: 2,
                                borderRadius: 2,
                                background: 'linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)',
                                border: '1px solid',
                                borderColor: 'divider',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  transform: 'translateY(-4px)',
                                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                }
                              }}
                            >
                              <Typography
                                variant="h4"
                                sx={{
                                  fontWeight: 800,
                                  color: 'primary.main',
                                  mb: 0.5,
                                }}
                              >
                                {metric.value}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: 'text.secondary',
                                  fontWeight: 500,
                                }}
                              >
                                {metric.label}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    )}

                    {/* Features List */}
                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1.5,
                            p: 1.5,
                            borderRadius: 2,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              background: 'rgba(25, 118, 210, 0.04)',
                              transform: 'translateX(4px)',
                            }
                          }}
                        >
                          <CheckCircle
                            sx={{
                              mr: 1.5,
                              fontSize: 20,
                              color: 'success.main',
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              color: 'text.primary',
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Action Buttons */}
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        mt: 3,
                      }}
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForward />}
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          background: 'linear-gradient(45deg, #1565c0, #1976d2)',
                          boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #1976d2, #1565c0)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 20px rgba(25, 118, 210, 0.4)',
                          }
                        }}
                      >
                        Learn More
                      </Button>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            background: 'rgba(25, 118, 210, 0.04)',
                          }
                        }}
                      >
                        Contact Us
                      </Button>
                    </Box>
                  </Box>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default Services;