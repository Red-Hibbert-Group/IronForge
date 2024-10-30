import { Box, Container, Typography, Card, CardContent, Icon } from '@mui/material';
import { SmartToy, Psychology, Timeline, Assessment, Storage, Security } from '@mui/icons-material';

const ServicesOverview = () => {
  const services = [
    {
      title: 'AI Integration Solutions',
      description: 'Seamlessly integrate cutting-edge AI technologies into your existing systems and workflows.',
      icon: SmartToy,
      gradient: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)'
    },
    {
      title: 'Machine Learning Consulting',
      description: 'Expert guidance on implementing machine learning models for your specific business needs.',
      icon: Psychology,
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF000F 100%)'
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage AI-powered analytics to forecast trends and make data-driven decisions.',
      icon: Timeline,
      gradient: 'linear-gradient(135deg, #36D1DC 0%, #5B86E5 100%)'
    },
    {
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and workflows using intelligent AI systems.',
      icon: Assessment,
      gradient: 'linear-gradient(135deg, #FF9966 0%, #FF5E62 100%)'
    },
    {
      title: 'Big Data Solutions',
      description: 'Handle and analyze large datasets with our advanced AI-powered data processing systems.',
      icon: Storage,
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    {
      title: 'AI Security & Compliance',
      description: 'Ensure your AI implementations are secure and compliant with industry standards.',
      icon: Security,
      gradient: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)'
    }
  ];

  const tripleServices = [...services, ...services, ...services];

  return (
    <Box sx={{ py: 8, overflow: 'hidden' }}>
      <Container maxWidth="xl">
        <Box sx={{ position: 'relative' }}>
          <Box 
            className="scroll-content" 
            sx={{ 
              display: 'flex', 
              gap: 3,
              py: 2,
              px: 2
            }}
          >
            {tripleServices.map((service, index) => (
              <Card
                key={index}
                sx={{
                  width: '300px',
                  height: '280px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 4,
                  flexShrink: 0,
                  transition: 'all 0.3s ease-in-out',
                  background: service.gradient,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                    '& .service-icon-overview': {
                      transform: 'scale(1.2)',
                    }
                  }
                }}
              >
                <CardContent
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    p: 3
                  }}
                >
                  <Icon
                    component={service.icon}
                    className="service-icon-overview"
                    sx={{
                      fontSize: 50,
                      mb: 2,
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  />
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.6
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesOverview;