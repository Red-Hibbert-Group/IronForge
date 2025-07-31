import { Box, Container, Typography, Grid, Card, CardContent, Button, useTheme } from '@mui/material';
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

// Import data
import resourcesData from '../data/resourcesData.json';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Assignment: Assignment,
  Book: Book,
  VideoLibrary: VideoLibrary,
  Forum: Forum,
  School: School,
  CloudDownload: CloudDownload,
};

const Resources = () => {
  const theme = useTheme();
  
  // Map JSON resources to include theme colors and icons
  const resources = resourcesData.resources.map((resource, index) => {
    const colors = [
      theme.palette.primary.main,
      theme.palette.accent.success,
      theme.palette.secondary.main,
      theme.palette.accent.warning,
      theme.palette.secondary.dark,
      theme.palette.primary.dark
    ];
    
    return {
      ...resource,
      icon: iconMap[resource.icon],
      color: colors[index] || theme.palette.primary.main
    };
  });

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ pt: 15, pb: 10 }}>
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
                color: theme.palette.text.primary,
                textAlign: 'center',
                mb: 3,
                background: `linear-gradient(45deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {resourcesData.hero.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                mb: 8,
                lineHeight: 1.6
              }}
            >
              {resourcesData.hero.subtitle}
            </Typography>
          </motion.div>

          {/* Resource Cards */}
          <Grid container spacing={4} alignItems="stretch" sx={{ mb: 10 }}>
            {resources.map((resource, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  style={{ height: '100%', display: 'flex' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '20px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 20px 40px ${resource.color}20`,
                        '& .resource-icon': {
                          transform: 'scale(1.1)',
                          color: resource.color,
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '100%',
                        background: `linear-gradient(180deg, ${resource.color}10 0%, transparent 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                      <Box
                        className="resource-icon"
                        sx={{
                          mb: 3,
                          width: 60,
                          height: 60,
                          borderRadius: '16px',
                          background: `${resource.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <resource.icon sx={{ fontSize: 30, color: resource.color }} />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 2
                        }}
                      >
                        {resource.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          mb: 3,
                          lineHeight: 1.6
                        }}
                      >
                        {resource.description}
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        {resource.items.map((item, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 1,
                              color: theme.palette.text.primary
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: resource.color,
                                mr: 2,
                                flexShrink: 0,
                              }}
                            />
                            {item}
                          </Box>
                        ))}
                      </Box>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          borderColor: resource.color,
                          color: resource.color,
                          '&:hover': {
                            borderColor: resource.color,
                            backgroundColor: `${resource.color}10`,
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

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                p: 6,
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 3
                }}
              >
                {resourcesData.supportSection.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                {resourcesData.supportSection.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                {resourcesData.supportSection.buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant}
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem'
                    }}
                  >
                    {button.text}
                  </Button>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default Resources; 