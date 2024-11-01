import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box 
          sx={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
            minHeight: '100vh',
            pt: { xs: 4, md: 8 },
            pb: { xs: 6, md: 12 }
          }}
        >
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <Box 
              mb={8} 
              textAlign="center"
              sx={{
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '2px'
                }
              }}
            >
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  mb: 3
                }}
              >
                About Us
              </Typography>
              <Typography 
                variant="h5" 
                color="textSecondary" 
                sx={{ 
                  maxWidth: '800px', 
                  mx: 'auto',
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                Your Trusted Partner in OneStream Implementation and Financial Solutions
              </Typography>
            </Box>
          </motion.div>

          {/* Main Content */}
          <Grid container spacing={4}>
            {/* Mission Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{ 
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      fontSize: { xs: '1.8rem', md: '2.2rem' }
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography 
                    paragraph
                    sx={{ 
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.8
                    }}
                  >
                    We are dedicated to transforming financial operations through expert OneStream implementation services. Our mission is to help organizations streamline their financial processes, enhance reporting capabilities, and drive better business decisions through innovative solutions.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Expertise Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{ 
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      fontSize: { xs: '1.8rem', md: '2.2rem' }
                    }}
                  >
                    Our Expertise
                  </Typography>
                  <Typography 
                    paragraph
                    sx={{ 
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      mb: 2
                    }}
                  >
                    With years of experience in financial software implementation and consulting, our team brings deep expertise in:
                  </Typography>
                  <Box 
                    component="ul" 
                    sx={{ 
                      pl: 2,
                      '& li': {
                        mb: 1.5,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        position: 'relative',
                        paddingLeft: '20px',
                        '&::before': {
                          content: '"→"',
                          position: 'absolute',
                          left: -5,
                          color: theme.palette.primary.main
                        }
                      }
                    }}
                  >
                    {expertiseList.map((item, index) => (
                      <Typography component="li" key={index}>{item}</Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Why Choose Us Section */}
            <Grid item xs={12}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: { xs: 3, md: 4 },
                    mt: 4,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px'
                  }}
                >
                  <Typography 
                    variant="h4" 
                    gutterBottom
                    sx={{ 
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                      mb: 4,
                      textAlign: 'center'
                    }}
                  >
                    Why Choose Us
                  </Typography>
                  <Grid container spacing={3}>
                    {whyChooseUs.map((item, index) => (
                      <Grid item xs={12} md={4} key={index}>
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={fadeIn}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                        >
                          <Box
                            sx={{
                              textAlign: 'center',
                              p: 2,
                              height: '100%',
                              transition: 'transform 0.3s ease-in-out',
                              '&:hover': {
                                transform: 'translateY(-5px)'
                              }
                            }}
                          >
                            <Typography 
                              variant="h6" 
                              gutterBottom
                              sx={{ 
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                mb: 2
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{ 
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                lineHeight: 1.8
                              }}
                            >
                              {item.description}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <DynamicFooter />
    </>
  );
};

const expertiseList = [
  "OneStream XF Platform Implementation",
  "Financial Consolidation & Reporting",
  "Planning, Budgeting & Forecasting",
  "Financial Data Quality Management",
  "System Integration & Custom Solutions"
];

const whyChooseUs = [
  {
    title: "Certified Expertise",
    description: "Our team consists of certified OneStream professionals with extensive implementation experience across various industries."
  },
  {
    title: "Tailored Solutions",
    description: "We understand that every organization is unique, and we provide customized solutions that align with your specific business needs."
  },
  {
    title: "Proven Track Record",
    description: "Our successful implementations and satisfied clients demonstrate our commitment to delivering exceptional results."
  }
];

export default About; 