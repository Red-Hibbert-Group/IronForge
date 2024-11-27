import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Chip,
  Stack,
  useTheme
} from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import FormatQuote from '@mui/icons-material/FormatQuote';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';

const CaseStudies = () => {
  const theme = useTheme();

  const cases = [
    {
      title: 'AI-Powered Customer Service Transformation',
      description: 'Implemented an intelligent chatbot system that reduced response time by 75% and improved customer satisfaction scores by 40%',
      image: '/images/ai-customer-service.jpg',
      tags: ['AI', 'Machine Learning', 'Customer Service'],
      metrics: [
        { label: 'Response Time', value: '-75%' },
        { label: 'Customer Satisfaction', value: '+40%' },
        { label: 'Cost Reduction', value: '35%' }
      ]
    },
    {
      title: 'Predictive Analytics for Manufacturing',
      description: 'Developed a machine learning model that predicted equipment failures with 95% accuracy, reducing downtime and maintenance costs',
      image: '/images/predictive-analytics.jpg',
      tags: ['Predictive Analytics', 'IoT', 'Manufacturing'],
      metrics: [
        { label: 'Prediction Accuracy', value: '95%' },
        { label: 'Downtime Reduction', value: '60%' },
        { label: 'Cost Savings', value: '$2.5M' }
      ]
    },
    {
      title: 'Data-Driven Supply Chain Optimization',
      description: 'Revolutionized inventory management using AI algorithms, optimizing stock levels and reducing waste',
      image: '/images/supply-chain.jpg',
      tags: ['Supply Chain', 'AI', 'Optimization'],
      metrics: [
        { label: 'Inventory Reduction', value: '30%' },
        { label: 'Efficiency Gain', value: '45%' },
        { label: 'ROI', value: '300%' }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <Box 
        sx={{ 
          py: 8, 
          backgroundColor: 'background.default',
          background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`
        }}
      >
        <Container>
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom 
            data-aos="fade-down"
            sx={{ 
              fontWeight: 'bold',
              mb: 2
            }}
          >
            Success Stories
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary" 
            sx={{ mb: 8 }} 
            data-aos="fade-up"
          >
            Transforming businesses through innovative AI solutions
          </Typography>
          
          <Grid container spacing={4}>
            {cases.map((caseStudy, index) => (
              <Grid item xs={12} md={6} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[10]
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={caseStudy.image}
                    alt={caseStudy.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      {caseStudy.tags.map((tag, i) => (
                        <Chip 
                          key={i} 
                          label={tag} 
                          size="small" 
                          color="primary" 
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {caseStudy.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {caseStudy.description}
                    </Typography>
                    
                    <Grid container spacing={2}>
                      {caseStudy.metrics.map((metric, i) => (
                        <Grid item xs={4} key={i}>
                          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                            {metric.value}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {metric.label}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button 
                      endIcon={<ArrowForward />}
                      sx={{ textTransform: 'none' }}
                    >
                      Read Full Case Study
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }} data-aos="fade-up">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Let's discuss how our AI solutions can drive your success
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              endIcon={<ArrowForward />}
              sx={{ 
                borderRadius: 2,
                px: 4
              }}
            >
              Schedule a Consultation
            </Button>
          </Box>
        </Container>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default CaseStudies; 