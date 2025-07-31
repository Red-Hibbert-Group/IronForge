import { Box, Container, Typography, Grid, Card, CardContent, Button, IconButton, useTheme } from '@mui/material';
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

// Import data
import implementationData from '../data/implementationData.json';

// Icon mapping for dynamic icon rendering
const iconMap = {
  CloudSync: CloudSync,
  Timeline: Timeline,
  Assessment: Assessment,
  School: School,
};

const Implementation = () => {
  const theme = useTheme();
  
  // Map JSON implementations to include theme colors and icons
  const implementations = implementationData.implementations.map((impl, index) => {
    const colors = [
      theme.palette.primary.main,
      theme.palette.accent.success,
      theme.palette.secondary.main,
      theme.palette.accent.warning
    ];
    
    return {
      ...impl,
      icon: iconMap[impl.icon],
      color: colors[index] || theme.palette.primary.main
    };
  });

  const phases = implementationData.phases.items;

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ pt: 15, pb: 10 }}>
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
                color: theme.palette.text.primary,
                textAlign: 'center',
                mb: 3,
                background: `linear-gradient(45deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {implementationData.hero.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                mb: 8,
                lineHeight: 1.6
              }}
            >
              {implementationData.hero.subtitle}
            </Typography>
          </motion.div>

          {/* Implementation Cards */}
          <Grid container spacing={4} alignItems="stretch" sx={{ mb: 10 }}>
            {implementations.map((impl, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  style={{ height: '100%', display: 'flex' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '20px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 20px 40px ${impl.color}20`,
                        '& .impl-icon': {
                          transform: 'scale(1.1)',
                          color: impl.color,
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '100%',
                        background: `linear-gradient(180deg, ${impl.color}10 0%, transparent 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      <Box
                        className="impl-icon"
                        sx={{
                          mb: 3,
                          width: 60,
                          height: 60,
                          borderRadius: '16px',
                          background: `${impl.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <impl.icon sx={{ fontSize: 30, color: impl.color }} />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 2
                        }}
                      >
                        {impl.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          mb: 3,
                          lineHeight: 1.6
                        }}
                      >
                        {impl.description}
                      </Typography>
                      <Box>
                        {impl.features.map((feature, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                              color: theme.palette.text.primary
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: impl.color,
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
            ))}
          </Grid>

          {/* Implementation Phases */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                color: theme.palette.text.primary,
                textAlign: 'center',
                mb: 2
              }}
            >
              {implementationData.phases.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto',
                mb: 8,
                fontSize: '1.1rem',
                lineHeight: 1.6
              }}
            >
              {implementationData.phases.subtitle}
            </Typography>

            <Grid container spacing={4} alignItems="stretch">
              {phases.map((phase, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    style={{ height: '100%', display: 'flex' }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        width: '100%',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: `0 15px 35px ${theme.palette.primary.main}15`,
                        }
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontWeight: 'bold',
                              mr: 2
                            }}
                          >
                            {index + 1}
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 0.5
                              }}
                            >
                              {phase.phase}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                              }}
                            >
                              {phase.duration}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.text.secondary,
                            mb: 3,
                            lineHeight: 1.6
                          }}
                        >
                          {phase.description}
                        </Typography>
                        <Box>
                          {phase.activities.map((activity, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1,
                                color: theme.palette.text.primary
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  background: theme.palette.primary.main,
                                  mr: 2,
                                  flexShrink: 0,
                                }}
                              />
                              {activity}
                            </Box>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* CTA Section */}
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 3
                }}
              >
                {implementationData.cta.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                {implementationData.cta.description}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                {implementationData.cta.buttonText}
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default Implementation;