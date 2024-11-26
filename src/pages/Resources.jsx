import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { 
  Article, 
  Book, 
  VideoLibrary, 
  Assignment, 
  CloudDownload, 
  School, 
  Forum,
  CorporateFare
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';
import { motion } from 'framer-motion';

const Resources = () => {
  const resources = [
    {
      title: 'OneStream Documentation',
      description: 'Comprehensive guides and technical documentation for OneStream XF platform',
      icon: Assignment,
      color: '#2196f3',
      items: [
        'Implementation Guides',
        'Technical Specifications',
        'Best Practices',
        'API Documentation'
      ]
    },
    {
      title: 'Whitepapers',
      description: 'In-depth research and analysis on financial consolidation and reporting',
      icon: Book,
      color: '#4caf50',
      items: [
        'Financial Close Optimization',
        'Planning & Forecasting',
        'Data Integration Strategies',
        'Performance Management'
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for OneStream implementation and usage',
      icon: VideoLibrary,
      color: '#ff9800',
      items: [
        'Platform Overview',
        'Configuration Tutorials',
        'User Training Videos',
        'Advanced Features'
      ]
    },
    {
      title: 'Case Studies',
      description: 'Success stories and implementation examples from our clients',
      icon: CorporateFare,
      color: '#e91e63',
      items: [
        'Industry Solutions',
        'Implementation Stories',
        'ROI Analysis',
        'Client Testimonials'
      ]
    },
    {
      title: 'Training Materials',
      description: 'Comprehensive training resources for users and administrators',
      icon: School,
      color: '#9c27b0',
      items: [
        'User Guides',
        'Admin Training',
        'Certification Paths',
        'Workshop Materials'
      ]
    },
    {
      title: 'Downloads',
      description: 'Templates, tools, and resources for OneStream implementation',
      icon: CloudDownload,
      color: '#00bcd4',
      items: [
        'Project Templates',
        'Configuration Tools',
        'Testing Scripts',
        'Checklists'
      ]
    },
    {
      title: 'Blog Articles',
      description: 'Latest insights about OneStream and financial management',
      icon: Article,
      color: '#795548',
      items: [
        'Implementation Tips',
        'Industry Trends',
        'Best Practices',
        'Product Updates'
      ]
    },
    {
      title: 'Community Forum',
      description: 'Connect with experts and share knowledge with the community',
      icon: Forum,
      color: '#607d8b',
      items: [
        'Discussion Boards',
        'Expert Q&A',
        'User Groups',
        'Knowledge Base'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
          pt: 12,
          pb: 8
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                color: 'white',
                textAlign: 'center',
                mb: 2
              }}
            >
              Resources
            </Typography>
            <Typography 
              variant="h5" 
              sx={{
                color: 'rgba(255,255,255,0.7)',
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                mb: 8
              }}
            >
              Comprehensive learning materials and resources for OneStream implementation
            </Typography>
          </motion.div>
          
          <Grid container spacing={4}>
            {resources.map((resource, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 3
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: `${resource.color}20`,
                            p: 2,
                            borderRadius: 2,
                            mr: 2
                          }}
                        >
                          <resource.icon sx={{ fontSize: 40, color: resource.color }} />
                        </Box>
                      </Box>
                      <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
                        {resource.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                        {resource.description}
                      </Typography>
                      <Box sx={{ mt: 'auto' }}>
                        {resource.items.map((item, idx) => (
                          <Typography 
                            key={idx}
                            variant="body2"
                            sx={{
                              color: 'rgba(255,255,255,0.6)',
                              py: 0.5,
                              display: 'flex',
                              alignItems: 'center',
                              '&:before': {
                                content: '""',
                                width: 6,
                                height: 6,
                                bgcolor: resource.color,
                                borderRadius: '50%',
                                mr: 2
                              }
                            }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
                      <Button 
                        variant="contained"
                        sx={{ 
                          mt: 3,
                          bgcolor: resource.color,
                          '&:hover': {
                            bgcolor: `${resource.color}dd`
                          }
                        }}
                      >
                        Access Resources
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default Resources; 