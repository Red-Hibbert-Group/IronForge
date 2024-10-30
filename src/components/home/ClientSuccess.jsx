import { Box, Container, Typography, Grid, Card, CardContent, Paper } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SavingsIcon from '@mui/icons-material/Savings';

const ClientSuccess = () => {
  const successStories = [
    {
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Complex financial consolidation across 50+ subsidiaries",
      solution: "Implemented OneStream XF for unified reporting",
      results: [
        "70% faster month-end close",
        "99.9% accuracy in financial reporting",
        "$2M annual cost savings"
      ],
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      client: "Tech Solutions Inc",
      industry: "Technology",
      challenge: "Disconnected planning and forecasting processes",
      solution: "OneStream Planning and Forecasting solution",
      results: [
        "50% reduction in planning cycle",
        "Real-time scenario analysis",
        "Improved forecast accuracy by 40%"
      ],
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      client: "Financial Services Group",
      industry: "Banking",
      challenge: "Manual reporting processes and compliance risks",
      solution: "End-to-end OneStream implementation",
      results: [
        "Automated compliance reporting",
        "85% reduction in manual tasks",
        "$1.5M operational savings"
      ],
      icon: <SavingsIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    }
  ];

  return (
    <Box py={8} sx={{ backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          Client Success Stories
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary" 
          textAlign="center" 
          mb={6}
        >
          Real Results from Real Transformations
        </Typography>

        <Grid container spacing={4}>
          {successStories.map((story) => (
            <Grid item xs={12} md={4} key={story.client}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={2}>
                    {story.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom textAlign="center">
                    {story.client}
                  </Typography>
                  <Typography 
                    variant="subtitle2" 
                    color="primary.main" 
                    gutterBottom 
                    textAlign="center"
                  >
                    {story.industry}
                  </Typography>
                  
                  <Paper elevation={0} sx={{ bgcolor: 'grey.50', p: 2, mt: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Challenge:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {story.challenge}
                    </Typography>
                    
                    <Typography variant="subtitle1" gutterBottom>
                      Solution:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {story.solution}
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom>
                      Key Results:
                    </Typography>
                    <ul style={{ paddingLeft: '20px', margin: '0' }}>
                      {story.results.map((result, index) => (
                        <li key={index}>
                          <Typography variant="body2" color="text.secondary">
                            {result}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Paper>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientSuccess; 