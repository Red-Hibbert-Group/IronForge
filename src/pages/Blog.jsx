import React from 'react';
import { Box, Container, Typography, Paper, Chip, Divider, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBack, CalendarToday, Person, Category, TrendingUp, Build, Psychology } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Import data
import blogData from '../data/blogData.json';

// Icon mapping for dynamic icon rendering
const iconMap = {
  ArrowBack: ArrowBack,
  TrendingUp: TrendingUp,
  CalendarToday: CalendarToday,
  Person: Person,
  Category: Category,
  Build: Build,
  Psychology: Psychology,
};

const Blog = () => {
  const theme = useTheme();
  
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
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back to Home */}
            <Box sx={{ mb: 4 }}>
              <Button
                component={Link}
                to="/"
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
                {blogData.backButton.text}
              </Button>
            </Box>

            {/* Blog Header */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                mb: 4,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 800,
                  color: theme.palette.text.primary,
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                {blogData.header.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.6
                }}
              >
                {blogData.header.subtitle}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {blogData.header.tags.map((tag, index) => {
                  const colors = {
                    primary: theme.palette.primary.main,
                    success: theme.palette.accent.success,
                    secondary: theme.palette.secondary.main
                  };
                  const color = colors[tag.color] || theme.palette.primary.main;
                  
                  return (
                    <Chip 
                      key={index}
                      label={tag.label} 
                      sx={{ 
                        background: `${color}15`,
                        color: color,
                        fontWeight: 500
                      }} 
                    />
                  );
                })}
              </Box>
            </Paper>

            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
                    {iconMap[blogData.featuredArticle.icon] && 
                      React.createElement(iconMap[blogData.featuredArticle.icon], { sx: { fontSize: 24 } })
                    }
                  </Box>
                  <Box>
                    <Typography variant="overline" sx={{ 
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      fontSize: '0.75rem'
                    }}>
                      FEATURED ARTICLE
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Published on {blogData.featuredArticle.publishDate}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    mb: 3,
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    lineHeight: 1.3
                  }}
                >
                  {blogData.featuredArticle.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 4,
                    lineHeight: 1.7,
                    fontSize: '1.1rem'
                  }}
                >
                  {blogData.featuredArticle.excerpt}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                  {blogData.featuredArticle.tags.map((tag, index) => {
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

                <Button
                  component={Link}
                  to={`/blog/${blogData.featuredArticle.slug}`}
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600
                  }}
                >
                  {blogData.featuredArticle.buttonText}
                </Button>
              </Paper>
            </motion.div>

            {/* Recent Articles */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 4,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              {blogData.recentArticles.title}
            </Typography>

            {blogData.recentArticles.articles.map((article, index) => {
              const IconComponent = iconMap[article.icon];
              const colors = [
                theme.palette.accent.success,
                theme.palette.secondary.main,
                theme.palette.accent.warning
              ];
              const color = colors[index] || theme.palette.primary.main;
              
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Paper
                  component={Link}
                  to={`/blog/${article.slug}`}
                  elevation={0}
                  sx={{
                    p: 4,
                    mb: 3,
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'flex',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 15px 35px ${article.color}15`,
                      '& .article-icon': {
                        transform: 'scale(1.1)',
                        color: article.color
                      }
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                    <Box
                      className="article-icon"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '12px',
                        background: `${article.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        flexShrink: 0
                      }}
                    >
                      {IconComponent && <IconComponent sx={{ fontSize: 28, color: color }} />}
                    </Box>
                    
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Box>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                          <Chip 
                            label={article.category}
                            size="small"
                            sx={{ 
                              background: `${color}15`,
                              color: color,
                              fontWeight: 500,
                              fontSize: '0.75rem'
                            }} 
                          />
                          <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                            {article.date} • {article.readTime}
                          </Typography>
                        </Box>
                        
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 2,
                            fontSize: '1.25rem',
                            lineHeight: 1.4
                          }}
                        >
                          {article.title}
                        </Typography>
                        
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.6,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {article.excerpt}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
              );
            })}

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  mt: 6,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}10 100%)`,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    mb: 2
                  }}
                >
                  {blogData.newsletter.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 4,
                    maxWidth: '500px',
                    mx: 'auto',
                    lineHeight: 1.6
                  }}
                >
                  {blogData.newsletter.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600
                  }}
                >
                  {blogData.newsletter.buttonText}
                </Button>
              </Paper>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Blog; 