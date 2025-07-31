import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { LinkedIn, Email } from '@mui/icons-material';

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Jane Smith",
      position: "Chief Executive Officer",
      expertise: "20+ years in Financial Transformation",
      image: "/path/to/jane-image.jpg", // Add actual image paths
      linkedin: "https://linkedin.com/in/jane-smith",
      email: "jane@company.com"
    },
    {
      name: "John Davis",
      position: "OneStream Practice Lead",
      expertise: "15+ years in CPM Implementation",
      image: "/path/to/john-image.jpg",
      linkedin: "https://linkedin.com/in/john-davis",
      email: "john@company.com"
    },
    {
      name: "Sarah Johnson",
      position: "Technical Director",
      expertise: "12+ years in Enterprise Solutions",
      image: "/path/to/sarah-image.jpg",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      email: "sarah@company.com"
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h2" gutterBottom>
          Leadership Team
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Meet Our OneStream Implementation Experts
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="stretch">
        {leaders.map((leader) => (
          <Grid item xs={12} md={4} key={leader.name}>
            <Box sx={{ height: '100%', display: 'flex' }}>
              <Card sx={{ height: '100%', width: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image={leader.image}
                alt={leader.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {leader.name}
                </Typography>
                <Typography variant="subtitle1" color="primary.main" gutterBottom>
                  {leader.position}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {leader.expertise}
                </Typography>
                <Box display="flex" justifyContent="center" gap={1}>
                  <IconButton href={leader.linkedin} target="_blank" color="primary">
                    <LinkedIn />
                  </IconButton>
                  <IconButton href={`mailto:${leader.email}`} color="primary">
                    <Email />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LeadershipTeam; 