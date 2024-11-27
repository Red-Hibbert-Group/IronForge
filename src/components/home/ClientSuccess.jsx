import { Box, Container, Typography, Grid, Card, CardContent, Paper, Fade } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SavingsIcon from '@mui/icons-material/Savings';
import { useInView } from 'react-intersection-observer';

const ClientSuccess = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
      icon: <TrendingUpIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      bgcolor: 'primary.light'
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
      icon: <AccessTimeIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      bgcolor: 'secondary.light'
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
      icon: <SavingsIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      bgcolor: 'success.light'
    }
  ];

  return (
    <Box py={12} sx={{ 
      backgroundColor: 'background.paper',
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("/path/to/subtle-pattern.png")',
      borderRadius: '16px',
      margin: '2rem 0'
    }}>
      <Container maxWidth="lg">
        <Box mb={8} textAlign="center">
          <Typography 
            variant="overline" 
            color="primary.main" 
            fontWeight="bold"
            sx={{ letterSpacing: 2 }}
          >
            SUCCESS STORIES
          </Typography>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2, #82b1ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Client Success Stories
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ maxWidth: '800px', margin: '0 auto' }}
          >
            Discover how we've helped organizations transform their financial processes
            and achieve remarkable results
          </Typography>
        </Box>

        <Grid container spacing={4} ref={ref}>
          {successStories.map((story, index) => (
            <Grid item xs={12} md={4} key={story.client}>
              <Fade in={inView} timeout={1000 + index * 200}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                    },
                    borderRadius: '16px',
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{ 
                      bgcolor: story.bgcolor,
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    {story.icon}
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mt: 2,
                        fontWeight: 'bold',
                        color: 'primary.dark'
                      }}
                    >
                      {story.client}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{
                        color: 'primary.dark',
                        fontWeight: 500
                      }}
                    >
                      {story.industry}
                    </Typography>
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    <Paper 
                      elevation={0} 
                      sx={{ 
                        bgcolor: 'background.default',
                        p: 3,
                        borderRadius: '12px'
                      }}
                    >
                      <Box mb={3}>
                        <Typography 
                          variant="subtitle1" 
                          gutterBottom 
                          color="primary.main"
                          fontWeight="bold"
                        >
                          Challenge:
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {story.challenge}
                        </Typography>
                      </Box>

                      <Box mb={3}>
                        <Typography 
                          variant="subtitle1" 
                          gutterBottom 
                          color="primary.main"
                          fontWeight="bold"
                        >
                          Solution:
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {story.solution}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography 
                          variant="subtitle1" 
                          gutterBottom 
                          color="primary.main"
                          fontWeight="bold"
                        >
                          Key Results:
                        </Typography>
                        <ul style={{ 
                          paddingLeft: '20px', 
                          margin: '0',
                          listStyleType: 'none' 
                        }}>
                          {story.results.map((result, index) => (
                            <li 
                              key={index}
                              style={{
                                marginBottom: '8px',
                                position: 'relative'
                              }}
                            >
                              <Typography 
                                variant="body1" 
                                color="text.secondary"
                                sx={{
                                  '&::before': {
                                    content: '"→"',
                                    position: 'absolute',
                                    left: '-20px',
                                    color: 'primary.main'
                                  }
                                }}
                              >
                                {result}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                    </Paper>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientSuccess; 