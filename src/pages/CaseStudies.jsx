import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';

const CaseStudies = () => {
  const cases = [
    {
      title: 'AI Implementation Success Story',
      description: 'How we helped a major corporation implement AI solutions',
      image: '/path-to-image-1.jpg'
    },
    {
      title: 'Machine Learning Integration',
      description: 'Transforming data processing with machine learning',
      image: '/path-to-image-2.jpg'
    },
    // Add more case studies as needed
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom data-aos="fade-down">
            Case Studies
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }} data-aos="fade-up">
            Real-world examples of our AI solutions in action
          </Typography>
          
          <Grid container spacing={4}>
            {cases.map((caseStudy, index) => (
              <Grid item xs={12} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={caseStudy.image}
                    alt={caseStudy.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {caseStudy.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {caseStudy.description}
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

export default CaseStudies; 