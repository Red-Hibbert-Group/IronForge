import { Box, Container, Grid, Card, CardContent, Typography, Icon } from '@mui/material';
import {
  Biotech,
  Psychology,
  ShowChart,
  AutoAwesome,
  CloudSync,
  Shield,
} from '@mui/icons-material';

const ServicesOverview = () => {
  const services = [
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate cutting-edge AI solutions to transform your business operations',
      icon: Biotech,
      color: 'primary.main'
    },
    {
      title: 'Machine Learning',
      description: 'Harness the power of advanced ML algorithms for intelligent decision-making',
      icon: Psychology,
      color: 'secondary.main'
    },
    {
      title: 'Predictive Analytics',
      description: 'Transform raw data into actionable insights with advanced forecasting models',
      icon: ShowChart,
      color: 'accent.teal'
    },
    {
      title: 'Intelligent Automation',
      description: 'Revolutionize workflows with smart, AI-powered automation solutions',
      icon: AutoAwesome,
      color: 'accent.orange'
    },
    {
      title: 'Cloud AI Solutions',
      description: 'Scale your AI capabilities with robust cloud-based infrastructure',
      icon: CloudSync,
      color: 'accent.rose'
    },
    {
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, ethical, and compliant with regulations',
      icon: Shield,
      color: 'accent.amber'
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: (theme) => theme.shadows[8],
                },
                background: (theme) => `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.subtle} 100%)`,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: '12px',
                      backgroundColor: `${service.color}15`,
                      mr: 2,
                    }}
                  >
                    <Icon
                      component={service.icon}
                      sx={{
                        fontSize: 40,
                        color: service.color,
                      }}
                    />
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesOverview; 