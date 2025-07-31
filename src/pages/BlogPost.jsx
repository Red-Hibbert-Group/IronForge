import React from 'react';
import { Box, Container, Typography, Paper, Chip, Divider, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBack, CalendarToday, Person, Category, TrendingUp, Build, Psychology, EmojiObjects, Rocket, Code, Business } from '@mui/icons-material';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Import blog posts data
import blogPosts from '../data/blogPosts.json';

// Icon mapping for dynamic icon rendering
const iconMap = {
  ArrowBack: ArrowBack,
  TrendingUp: TrendingUp,
  CalendarToday: CalendarToday,
  Person: Person,
  Category: Category,
  Build: Build,
  Psychology: Psychology,
  EmojiObjects: EmojiObjects,
  Rocket: Rocket,
  Code: Code,
  Business: Business,
};

const BlogPost = () => {
  const theme = useTheme();
  const { slug } = useParams();
  
  // Get the blog post data based on the slug
  const blogPost = blogPosts[slug];
  
  // If blog post doesn't exist, redirect to blog page
  if (!blogPost) {
    return <Navigate to="/blog" replace />;
  }

  // Function to render content based on type
  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return (
            <Typography
              key={index}
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                lineHeight: 1.8,
                fontSize: '1.1rem',
                fontWeight: item.style === 'bold' ? 600 : 400
              }}
            >
              {item.text}
            </Typography>
          );
        
        case 'quote':
          return (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                mb: 3,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                border: `1px solid ${theme.palette.primary.main}20`,
                borderRadius: '12px',
                fontStyle: 'italic'
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  fontWeight: 500
                }}
              >
                "{item.text}"
              </Typography>
            </Paper>
          );
        
        case 'list':
          return (
            <Box key={index} sx={{ mb: 3 }}>
              {item.items.map((listItem, listIndex) => (
                <Typography
                  key={listIndex}
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 2,
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}
                >
                  • {listItem}
                </Typography>
              ))}
            </Box>
          );
        
        case 'section':
          return (
            <Box key={index} sx={{ mb: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    background: `linear-gradient(135deg, ${theme.palette[item.color]?.main || theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  {iconMap[item.icon] && 
                    React.createElement(iconMap[item.icon], { sx: { fontSize: 20 } })
                  }
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    fontSize: { xs: '1.5rem', md: '2rem' }
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              {renderContent(item.content)}
            </Box>
          );
        
        default:
          return null;
      }
    });
  };
  
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
          position: 'relative',
          overflow: 'hidden',
          pt: 12,
          pb: 8
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back to Blog */}
            <Box sx={{ mb: 4 }}>
              <Button
                component={Link}
                to="/blog"
                startIcon={<ArrowBack />}
                sx={{
                  color: theme.palette.primary.main,
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}10`
                  }
                }}
              >
                Back to Blog
              </Button>
            </Box>

            {/* Article Header */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                mb: 4,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  {iconMap[blogPost.icon] && 
                    React.createElement(iconMap[blogPost.icon], { sx: { fontSize: 24 } })
                  }
                </Box>
                <Box>
                  <Typography variant="overline" sx={{ 
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: '0.75rem'
                  }}>
                    {blogPost.category.toUpperCase()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Published on {blogPost.publishDate}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  color: theme.palette.text.primary,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '3rem' },
                  lineHeight: 1.2
                }}
              >
                {blogPost.title}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                {blogPost.tags.map((tag, index) => {
                  const IconComponent = iconMap[tag.icon];
                  const colors = [
                    theme.palette.primary.main,
                    theme.palette.accent.success,
                    theme.palette.text.secondary
                  ];
                  const color = colors[index] || theme.palette.primary.main;
                  
                  return (
                    <Chip 
                      key={index}
                      icon={IconComponent && <IconComponent />}
                      label={tag.label} 
                      variant="outlined"
                      sx={{ 
                        borderColor: color,
                        color: color
                      }} 
                    />
                  );
                })}
              </Box>
            </Paper>

            {/* Article Content */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Render dynamic content */}
              {renderContent(blogPost.content)}

              <Divider sx={{ my: 4 }} />

              {/* CTA Section */}
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px'
                  }}
                >
                  Get Started Today
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default BlogPost; 