import { Box, Container, Grid, Typography, Card, CardContent, Icon } from '@mui/material';
import { SmartToy, Psychology, Timeline, Assessment, Storage, Security } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';

import { theme } from '../theme/theme';

const Services = () => {
  const services = [
    {
      title: 'AI Integration Solutions',
      description: 'Seamlessly integrate cutting-edge AI technologies into your existing systems and workflows.',
      icon: SmartToy
    },
    {
      title: 'Machine Learning Consulting',
      description: 'Expert guidance on implementing machine learning models for your specific business needs.',
      icon: Psychology
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage AI-powered analytics to forecast trends and make data-driven decisions.',
      icon: Timeline
    },
    {
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and workflows using intelligent AI systems.',
      icon: Assessment
    },
    {
      title: 'Big Data Solutions',
      description: 'Handle and analyze large datasets with our advanced AI-powered data processing systems.',
      icon: Storage
    },
    {
      title: 'AI Security & Compliance',
      description: 'Ensure your AI implementations are secure and compliant with industry standards.',
      icon: Security
    }
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ 
        py: 12, 
        background: 'linear-gradient(180deg, background.default 0%, rgba(0,0,0,0.02) 100%)'
      }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            data-aos="fade-down"
            sx={{ 
              mb: 8,
              fontWeight: 700,
              background: 'linear-gradient(45deg, primary.main, primary.light)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: 'primary.light'
                      }
                    },
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, primary.main, primary.light)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out'
                    },
                    '&:hover::before': {
                      opacity: 1
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Icon 
                      component={service.icon} 
                      className="service-icon"
                      sx={{ 
                        fontSize: 48, 
                        mb: 3, 
                        color: 'primary.main',
                        transition: 'all 0.3s ease-in-out',
                        p: 1,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0,0,0,0.03)'
                      }} 
                    />
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
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