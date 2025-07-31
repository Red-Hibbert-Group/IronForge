import { Box, Container, Grid, Typography, Card, Button, Chip, IconButton, useTheme } from '@mui/material';
import { Analytics, Assessment, AccountBalance, Timeline, Security, ArrowForward, PlayArrow, ExpandMore, ChevronRight, CheckCircle, Speed, CalendarToday, Rocket, Architecture, Support, TrendingUp } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

// Import data
import servicesData from '../data/servicesData.json';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Analytics: Analytics,
  Assessment: Assessment,
  AccountBalance: AccountBalance,
  Timeline: Timeline,
  Security: Security,
  CheckCircle: CheckCircle,
  Speed: Speed,
  Rocket: Rocket,
  Architecture: Architecture,
  Support: Support,
  TrendingUp: TrendingUp,
};

const ExpandableCard = styled(motion.div)(({ theme, expanded, serviceColor }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(4),
  padding: theme.spacing(4),
  border: '1px solid rgba(255, 255, 255, 0.3)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  transform: expanded ? 'scale(1.02)' : 'scale(1)',
  boxShadow: expanded 
    ? `0 20px 40px ${serviceColor}20`
    : '0 8px 16px rgba(0, 0, 0, 0.08)',
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
    background: 'linear-gradient(45deg, transparent, rgba(82, 109, 254, 0.1), transparent)',
    transition: 'transform 0.5s ease-in-out',
  }
}));

const DetailSection = styled(motion.div)(({ theme }) => ({
  overflow: 'hidden',
  marginTop: theme.spacing(3),
}));

const Services = () => {
  const theme = useTheme();
  const [expandedCard, setExpandedCard] = useState(null);

  // Map JSON services to include theme colors and icons
  const services = servicesData.services.map((service, serviceIndex) => {
    const colorMap = {
      0: theme.palette.primary.main,      // EPM
      1: theme.palette.accent.success,    // Tax
      2: theme.palette.secondary.main,    // Cost
      3: theme.palette.accent.error,      // Risk
      4: theme.palette.secondary.dark,    // Narrative
    };
    
    return {
      ...service,
      icon: iconMap[service.icon],
      color: colorMap[serviceIndex] || theme.palette.primary.main,
      subServices: service.subServices?.map((subService, subIndex) => ({
        ...subService,
        color: serviceIndex === 0 ? 
          (subIndex === 0 ? theme.palette.primary.dark : subIndex === 1 ? theme.palette.primary.main : theme.palette.primary.light) :
          serviceIndex === 1 ? theme.palette.accent.success :
          serviceIndex === 2 ? 
            (subIndex === 0 ? theme.palette.secondary.main : theme.palette.secondary.light) :
          serviceIndex === 3 ? theme.palette.accent.error :
          theme.palette.secondary.dark
             })) || []
     };
   });

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
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
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
            opacity: 0.05,
            background: `radial-gradient(circle at center, ${theme.palette.primary.main} 0%, transparent 70%)`,
            animation: 'pulse 4s ease-in-out infinite',
            '@keyframes pulse': {
              '0%': { opacity: 0.05 },
              '50%': { opacity: 0.1 },
              '100%': { opacity: 0.05 },
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
                    color: theme.palette.text.primary,
                    mb: 3,
                    background: `linear-gradient(45deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {servicesData.hero.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 4,
                    lineHeight: 1.8
                  }}
                >
                  {servicesData.hero.subtitle}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 4,
                    lineHeight: 1.6,
                    maxWidth: '90%'
                  }}
                >
                  {servicesData.hero.description}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                  {servicesData.hero.benefits.map((benefit, index) => {
                    const IconComponent = iconMap[benefit.icon];
                    const colors = [
                      theme.palette.primary.main,
                      theme.palette.accent.success,
                      theme.palette.secondary.main
                    ];
                    const color = colors[index] || theme.palette.primary.main;
                    
                    return (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                            background: `${color}10`,
                            border: `1px solid ${color}30`,
                      }}
                    >
                          {IconComponent && <IconComponent sx={{ color: color, fontSize: 20 }} />}
                    </Box>
                        <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                          {benefit.title}
                    </Typography>
                  </Box>
                    );
                  })}
                </Box>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                  >
                    {servicesData.hero.primaryButton}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<CalendarToday />}
                  >
                    {servicesData.hero.secondaryButton}
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
                      border: `2px solid ${theme.palette.primary.main}20`,
                      borderRadius: 4,
                      zIndex: 0,
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      background: 'rgba(255,255,255,0.8)',
                      borderRadius: 4,
                      p: 4,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 3 }}>
                      {servicesData.whyChooseSection.title}
                    </Typography>
                    <Grid container spacing={3} alignItems="stretch">
                      {servicesData.whyChooseSection.features.map((item, index) => {
                        const IconComponent = iconMap[item.icon];
                        const colors = [
                          theme.palette.primary.main,
                          theme.palette.accent.success,
                          theme.palette.secondary.main,
                          theme.palette.secondary.dark
                        ];
                        const color = colors[index] || theme.palette.primary.main;
                        
                        return (
                        <Grid item xs={6} key={index}>
                          <Box sx={{ height: '100%', display: 'flex' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                width: '100%',
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
                              <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary, mb: 1 }}>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                {item.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        );
                      })}
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
            <Grid container spacing={4} alignItems="stretch">
              {services.map((service, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <motion.div variants={itemVariants} style={{ height: '100%', display: 'flex' }}>
                    <ExpandableCard
                      style={{ width: '100%' }}
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
                          <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
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