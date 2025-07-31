import { Box, Container, Typography, Paper, Chip, Divider, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBack, CalendarToday, Person, Category, TrendingUp, Build, Psychology } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
                Back to Home
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
                Latest Insights & Updates
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.6
                }}
              >
                Stay informed about OneStream implementation best practices, industry trends, and expert insights
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip 
                  label="Implementation" 
                  sx={{ 
                    background: `${theme.palette.primary.main}15`,
                    color: theme.palette.primary.main,
                    fontWeight: 500
                  }} 
                />
                <Chip 
                  label="Best Practices" 
                  sx={{ 
                    background: `${theme.palette.accent.success}15`,
                    color: theme.palette.accent.success,
                    fontWeight: 500
                  }} 
                />
                <Chip 
                  label="Industry Trends" 
                  sx={{ 
                    background: `${theme.palette.secondary.main}15`,
                    color: theme.palette.secondary.main,
                    fontWeight: 500
                  }} 
                />
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
                    <TrendingUp sx={{ fontSize: 24 }} />
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
                      Published on January 15, 2024
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
                  Accelerating Financial Close: 5 Key Strategies for OneStream Implementation
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
                  Discover proven methodologies and best practices that leading organizations use to reduce their financial close cycle time by up to 60% through strategic OneStream XF implementation. Learn from real-world case studies and expert insights.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                  <Chip 
                    icon={<Category />}
                    label="Implementation" 
                    variant="outlined"
                    sx={{ 
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main
                    }} 
                  />
                  <Chip 
                    icon={<Person />}
                    label="Expert Insights" 
                    variant="outlined"
                    sx={{ 
                      borderColor: theme.palette.accent.success,
                      color: theme.palette.accent.success
                    }} 
                  />
                  <Chip 
                    icon={<CalendarToday />}
                    label="15 min read" 
                    variant="outlined"
                    sx={{ 
                      borderColor: theme.palette.text.secondary,
                      color: theme.palette.text.secondary
                    }} 
                  />
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600
                  }}
                >
                  Read Full Article
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
              Recent Articles
            </Typography>

            {[
              {
                title: "OneStream Data Integration Best Practices",
                excerpt: "Learn how to seamlessly integrate data from multiple sources into your OneStream environment with these proven strategies and techniques.",
                date: "January 10, 2024",
                readTime: "8 min read",
                category: "Integration",
                icon: Build,
                color: theme.palette.accent.success
              },
              {
                title: "Advanced Financial Reporting with OneStream",
                excerpt: "Explore advanced reporting capabilities and learn how to create dynamic, interactive financial reports that drive business insights.",
                date: "January 5, 2024",
                readTime: "12 min read",
                category: "Reporting",
                icon: TrendingUp,
                color: theme.palette.secondary.main
              },
              {
                title: "OneStream Security Framework Implementation",
                excerpt: "Comprehensive guide to implementing robust security frameworks and access controls in your OneStream deployment.",
                date: "December 28, 2023",
                readTime: "10 min read",
                category: "Security",
                icon: Psychology,
                color: theme.palette.accent.warning
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    mb: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
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
                  <Box sx={{ display: 'flex', gap: 3 }}>
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
                      <article.icon sx={{ fontSize: 28, color: article.color }} />
                    </Box>
                    
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                        <Chip 
                          label={article.category}
                          size="small"
                          sx={{ 
                            background: `${article.color}15`,
                            color: article.color,
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
                          lineHeight: 1.6
                        }}
                      >
                        {article.excerpt}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            ))}

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
                  Stay Updated
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
                  Subscribe to our newsletter for the latest OneStream insights, implementation tips, and industry best practices delivered to your inbox.
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
                  Subscribe Now
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