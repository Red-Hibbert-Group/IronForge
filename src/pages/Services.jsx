import { Box, Container, Grid, Typography, Card, Button, Chip, IconButton } from '@mui/material';
import { Analytics, Assessment, AccountBalance, Timeline, Security, ArrowForward, PlayArrow, ExpandMore, ChevronRight, CheckCircle, Speed, CalendarToday, Rocket, Architecture, Support, TrendingUp } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const ExpandableCard = styled(motion.div)(({ theme, expanded, serviceColor }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(4),
  padding: theme.spacing(4),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  transform: expanded ? 'scale(1.02)' : 'scale(1)',
  boxShadow: expanded 
    ? `0 20px 40px ${serviceColor}20`
    : '0 8px 16px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: expanded ? 'scale(1.02)' : 'translateY(-10px)',
    '&::before': {
      transform: 'translateX(100%)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    transition: 'transform 0.5s ease-in-out',
  }
}));

const DetailSection = styled(motion.div)(({ theme }) => ({
  overflow: 'hidden',
  marginTop: theme.spacing(3),
}));

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      title: 'Enterprise Performance Management (EPM)',
      icon: Analytics,
      description: 'Transform your financial processes with state-of-the-art EPM solutions. Streamline operations, improve accuracy, and drive strategic decision-making through integrated planning, consolidation, and reporting.',
      features: [
        'Real-time financial insights',
        'Automated workflows',
        'Enhanced compliance',
        'Improved decision-making',
        'Predictive analytics',
        'Multi-currency support'
      ],
      color: '#2196f3',
      subServices: [
        {
          title: 'Financial Close & Consolidation (FCCS)',
          description: 'Streamline your financial close process and consolidate financial statements across multiple entities with advanced automation and controls.',
          features: [
            'Automated consolidation',
            'Multi-GAAP reporting',
            'Intercompany matching',
            'Journal entry management',
            'Currency translation',
            'Elimination rules engine'
          ],
          color: '#1565c0',
          benefits: [
            'Reduce close cycle time by up to 50%',
            'Improve accuracy and reduce errors',
            'Enhanced visibility into close process',
            'Standardized global processes'
          ]
        },
        {
          title: 'Planning & Budgeting (EPBCS)',
          description: 'Advanced planning and forecasting solutions for future-focused financial modeling with built-in predictive capabilities.',
          features: [
            'Rolling forecasts',
            'What-if analysis',
            'Driver-based planning',
            'Predictive planning',
            'Workforce planning',
            'Capital asset planning'
          ],
          color: '#0d47a1',
          benefits: [
            'Reduce planning cycle time',
            'Improve forecast accuracy',
            'Better resource allocation',
            'Strategic decision support'
          ]
        },
        {
          title: 'Account Reconciliation (ARCS)',
          description: 'Automate and streamline your account reconciliation process with intelligent matching and risk-based reconciliation.',
          features: [
            'Automated matching',
            'Risk-based reconciliation',
            'Variance analysis',
            'Compliance tracking',
            'Transaction matching',
            'Balance sheet reconciliation'
          ],
          color: '#2979ff',
          benefits: [
            'Reduce manual effort by 90%',
            'Improve accuracy and control',
            'Real-time visibility',
            'Enhanced compliance'
          ]
        }
      ]
    },
    {
      title: 'Tax Reporting & Compliance (TRCS)',
      icon: AccountBalance,
      description: 'Comprehensive tax provision and reporting solution to streamline corporate tax operations and ensure compliance across multiple jurisdictions worldwide.',
      features: [
        'Global tax provision',
        'Country-by-country reporting',
        'Tax automation',
        'Compliance management',
        'ETR forecasting',
        'Tax journal entries',
        'Automated tax calculations',
        'Real-time tax insights'
      ],
      color: '#4caf50',
      subServices: [
        {
          title: 'Direct Tax Reporting',
          description: 'Streamline the preparation of corporate income tax provisions and reporting with advanced automation.',
          features: [
            'Tax provision automation',
            'Deferred tax management',
            'Return-to-provision reconciliation',
            'Tax basis balance sheet',
            'Tax analytics dashboard',
            'Multi-jurisdiction support'
          ],
          color: '#2e7d32',
          benefits: [
            'Reduce tax preparation time by 60%',
            'Improve accuracy and compliance',
            'Real-time tax position visibility',
            'Streamlined global tax operations'
          ]
        },
        {
          title: 'Indirect Tax Management',
          description: 'Comprehensive solution for managing VAT, GST, and other indirect taxes across global operations.',
          features: [
            'VAT/GST calculations',
            'Cross-border transactions',
            'Digital tax reporting',
            'Compliance monitoring',
            'Tax rate management',
            'Recovery analysis'
          ],
          color: '#388e3c',
          benefits: [
            'Automated tax determination',
            'Reduced compliance risk',
            'Improved cash flow management',
            'Enhanced audit readiness'
          ]
        }
      ]
    },
    {
      title: 'Enterprise Cost Management',
      icon: Assessment,
      description: 'Sophisticated cost allocation and management solutions for better profitability analysis and strategic decision making.',
      features: [
        'Activity-based costing',
        'Profitability reporting',
        'Cost driver analysis',
        'Resource allocation',
        'Margin analysis',
        'Cost simulation'
      ],
      color: '#ff4081',
      subServices: [
        {
          title: 'Cost Allocation Management',
          description: 'Advanced cost allocation engine with multi-dimensional modeling capabilities.',
          features: [
            'Rule-based allocations',
            'Cost pool management',
            'Driver-based allocation',
            'Scenario modeling'
          ],
          color: '#c2185b'
        },
        {
          title: 'Profitability Analysis',
          description: 'Detailed profitability analysis across multiple dimensions and hierarchies.',
          features: [
            'Customer profitability',
            'Product profitability',
            'Channel analysis',
            'Margin optimization'
          ],
          color: '#e91e63'
        }
      ]
    },
    {
      title: 'Risk Management & Compliance',
      icon: Security,
      description: 'Comprehensive risk management solution to identify, assess, and mitigate business risks while ensuring regulatory compliance.',
      features: [
        'Risk Analytics',
        'Compliance Management',
        'Audit Trails',
        'Risk Monitoring',
        'Regulatory Reporting',
        'Control Framework',
        'Risk Assessment',
        'Incident Management'
      ],
      color: '#f44336',
      subServices: [
        {
          title: 'Enterprise Risk Management',
          description: 'Holistic approach to identifying, analyzing, and managing risks across the organization.',
          features: [
            'Risk identification',
            'Risk assessment matrix',
            'Mitigation planning',
            'Risk monitoring',
            'KRI dashboard',
            'Risk reporting'
          ],
          color: '#d32f2f',
          benefits: [
            'Improved risk visibility',
            'Proactive risk management',
            'Better decision making',
            'Enhanced stakeholder confidence'
          ]
        },
        {
          title: 'Compliance Management',
          description: 'Streamline compliance processes and maintain regulatory adherence across jurisdictions.',
          features: [
            'Regulatory tracking',
            'Compliance monitoring',
            'Policy management',
            'Training management',
            'Audit management',
            'Violation tracking'
          ],
          color: '#c62828',
          benefits: [
            'Reduced compliance costs',
            'Automated compliance tracking',
            'Enhanced regulatory reporting',
            'Improved audit readiness'
          ]
        }
      ]
    },
    {
      title: 'Narrative Reporting & Disclosure',
      icon: Timeline,
      description: 'Advanced solution for creating and managing board books, regulatory filings, and other narrative management reports with collaborative features.',
      features: [
        'Collaborative authoring',
        'XBRL tagging',
        'Document management',
        'Workflow automation',
        'Version control',
        'Digital publishing',
        'Regulatory compliance',
        'Report automation'
      ],
      color: '#9c27b0',
      subServices: [
        {
          title: 'Financial Reporting',
          description: 'Streamline the creation and management of financial reports and regulatory filings.',
          features: [
            'Report automation',
            'XBRL integration',
            'Collaborative review',
            'Audit trail',
            'Template management',
            'Multi-format output'
          ],
          color: '#7b1fa2',
          benefits: [
            'Faster report generation',
            'Improved accuracy',
            'Enhanced collaboration',
            'Regulatory compliance'
          ]
        },
        {
          title: 'Board Reporting',
          description: 'Comprehensive solution for creating and managing board books and executive presentations.',
          features: [
            'Board book automation',
            'Secure collaboration',
            'Digital distribution',
            'Mobile access',
            'Version control',
            'Commentary tracking'
          ],
          color: '#6a1b9a',
          benefits: [
            'Streamlined board communication',
            'Enhanced security',
            'Improved governance',
            'Real-time updates'
          ]
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cardVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const renderDetailContent = (service) => (
    <DetailSection
      initial="collapsed"
      animate="expanded"
      exit="collapsed"
      variants={cardVariants}
    >
      <Grid container spacing={3}>
        {/* Key Benefits */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2, color: service.color }}>
            Key Features
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {service.features.map((feature, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  borderRadius: 2,
                  background: `${service.color}08`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(10px)',
                    background: `${service.color}15`,
                  }
                }}
              >
                <ChevronRight sx={{ color: service.color, mr: 1 }} />
                <Typography variant="body2">{feature}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Sub-services if available */}
        {service.subServices && (
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: service.color }}>
              Related Solutions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {service.subServices.map((subService, idx) => (
                <Box
                  key={idx}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    background: `${subService.color}08`,
                    border: `1px solid ${subService.color}15`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(10px)',
                      background: `${subService.color}15`,
                    }
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: subService.color, mb: 1 }}>
                    {subService.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {subService.description}
                  </Typography>
                  {subService.benefits && (
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="caption" sx={{ color: subService.color, fontWeight: 'bold' }}>
                        Key Benefits:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                        {subService.benefits.map((benefit, bidx) => (
                          <Chip
                            key={bidx}
                            label={benefit}
                            size="small"
                            sx={{
                              background: `${subService.color}15`,
                              color: subService.color,
                              fontSize: '0.75rem'
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
        )}
      </Grid>
    </DetailSection>
  );

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: 'radial-gradient(circle at center, #ffffff 0%, transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite',
            '@keyframes pulse': {
              '0%': { opacity: 0.1 },
              '50%': { opacity: 0.2 },
              '100%': { opacity: 0.1 },
            }
          }}
        />

        <Container maxWidth="lg" sx={{ pt: 20, pb: 15 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 800,
                    color: 'white',
                    mb: 3,
                    background: 'linear-gradient(45deg, #fff, #64B5F6)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Transform Your Business
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    mb: 4,
                    lineHeight: 1.8
                  }}
                >
                  Elevate your enterprise with cutting-edge solutions designed for the future of business.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    mb: 4,
                    lineHeight: 1.6,
                    maxWidth: '90%'
                  }}
                >
                  Our comprehensive suite of enterprise solutions empowers organizations to streamline operations,
                  enhance decision-making, and drive sustainable growth. From advanced financial management to
                  intelligent automation, we deliver the tools you need to stay ahead in today's dynamic business landscape.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(33, 150, 243, 0.1)',
                        border: '1px solid rgba(33, 150, 243, 0.3)',
                      }}
                    >
                      <CheckCircle sx={{ color: '#2196f3', fontSize: 20 }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      Industry-leading solutions trusted by Fortune 500 companies
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(76, 175, 80, 0.1)',
                        border: '1px solid rgba(76, 175, 80, 0.3)',
                      }}
                    >
                      <Security sx={{ color: '#4caf50', fontSize: 20 }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      Enterprise-grade security and compliance
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 64, 129, 0.1)',
                        border: '1px solid rgba(255, 64, 129, 0.3)',
                      }}
                    >
                      <Speed sx={{ color: '#ff4081', fontSize: 20 }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      24/7 expert support and rapid implementation
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      borderRadius: '30px',
                      py: 2,
                      px: 4,
                      background: 'linear-gradient(45deg, #2196f3, #64B5F6)',
                      boxShadow: '0 8px 20px rgba(33, 150, 243, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 28px rgba(33, 150, 243, 0.4)',
                      }
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<CalendarToday />}
                    sx={{
                      borderRadius: '30px',
                      py: 2,
                      px: 4,
                      borderColor: 'rgba(255,255,255,0.3)',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'rgba(255,255,255,0.5)',
                        background: 'rgba(255,255,255,0.05)',
                      }
                    }}
                  >
                    Schedule Demo
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: '100%',
                      height: '100%',
                      border: '2px solid rgba(33, 150, 243, 0.2)',
                      borderRadius: 4,
                      zIndex: 0,
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: 4,
                      p: 4,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: '#64B5F6', mb: 3 }}>
                      Why Choose Our Solutions?
                    </Typography>
                    <Grid container spacing={3}>
                      {[
                        {
                          title: 'Rapid Implementation',
                          description: 'Get up and running quickly with our streamlined deployment process',
                          icon: Rocket,
                          color: '#2196f3'
                        },
                        {
                          title: 'Scalable Architecture',
                          description: 'Solutions that grow with your business needs',
                          icon: Architecture,
                          color: '#4caf50'
                        },
                        {
                          title: 'Expert Support',
                          description: '24/7 dedicated support from industry experts',
                          icon: Support,
                          color: '#ff4081'
                        },
                        {
                          title: 'ROI Focused',
                          description: 'Proven track record of delivering measurable business value',
                          icon: TrendingUp,
                          color: '#9c27b0'
                        }
                      ].map((item, index) => (
                        <Grid item xs={6} key={index}>
                          <Box sx={{ height: '100%' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                p: 2,
                                borderRadius: 2,
                                background: `${item.color}08`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: `${item.color}15`,
                                  transform: 'translateY(-5px)',
                                }
                              }}
                            >
                              <item.icon sx={{ color: item.color, fontSize: 32, mb: 2 }} />
                              <Typography variant="subtitle1" sx={{ color: 'white', mb: 1 }}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                {item.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          py: 15,
          background: '#ffffff',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <motion.div variants={itemVariants}>
                    <ExpandableCard
                      onClick={() => handleCardClick(index)}
                      expanded={expandedCard === index}
                      serviceColor={service.color}
                      layout
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          mb: 3,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <service.icon
                            sx={{
                              fontSize: 40,
                              color: service.color,
                              mr: 2,
                            }}
                          />
                          <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            {service.title}
                          </Typography>
                        </Box>
                        <ExpandMore
                          sx={{
                            transform: expandedCard === index ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                            color: service.color,
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{ mb: 3, color: 'text.secondary' }}
                      >
                        {service.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {service.features.slice(0, expandedCard === index ? 2 : 4).map((feature, idx) => (
                          <Chip
                            key={idx}
                            label={feature}
                            sx={{
                              background: `${service.color}15`,
                              color: service.color,
                              '&:hover': {
                                background: `${service.color}25`,
                              }
                            }}
                          />
                        ))}
                      </Box>
                      <AnimatePresence>
                        {expandedCard === index && renderDetailContent(service)}
                      </AnimatePresence>
                    </ExpandableCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default Services;