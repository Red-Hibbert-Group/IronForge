import { Box, Container, Grid, Typography, Card, CardContent, Icon } from '@mui/material';
import { SmartToy, Psychology, Timeline, Assessment, Storage, Security } from '@mui/icons-material';
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
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          data-aos="fade-down"
          sx={{ mb: 6 }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Icon component={service.icon} sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services; 