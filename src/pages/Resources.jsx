import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Article, Book, VideoLibrary, Assignment } from '@mui/icons-material';

const Resources = () => {
  const resources = [
    {
      title: 'Blog Articles',
      description: 'Latest insights about AI and technology',
      icon: Article
    },
    {
      title: 'Whitepapers',
      description: 'In-depth research and analysis',
      icon: Book
    },
    {
      title: 'Video Tutorials',
      description: 'Learn about our solutions',
      icon: VideoLibrary
    },
    {
      title: 'Documentation',
      description: 'Technical guides and references',
      icon: Assignment
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom data-aos="fade-down">
          Resources
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }} data-aos="fade-up">
          Knowledge base and learning materials
        </Typography>
        
        <Grid container spacing={4}>
          {resources.map((resource, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <resource.icon sx={{ fontSize: 40, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" component="h3" align="center" gutterBottom>
                    {resource.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" align="center">
                    {resource.description}
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

export default Resources; 