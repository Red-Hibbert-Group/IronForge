import { Box, Container, Grid, Typography, Button, IconButton, Stack, Divider, Paper } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';

const DynamicFooter = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.7, 0.9], [0.97, 1]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0.85, 1]);

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '#' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Blog', path: '#' }
    ],
    services: [
      { name: 'Financial Close & Consolidation', path: '/services#financial-close-consolidation' },
      { name: 'Planning & Budgeting', path: '/services#planning-budgeting' },
      { name: 'Account Reconciliation', path: '/services#account-reconciliation' },
      { name: 'Enterprise Cost Management', path: '/services#enterprise-cost-management' },
      { name: 'Tax Reporting', path: '/services#tax-reporting' },
      { name: 'Narrative Reporting', path: '/services#narrative-reporting' }
    ],
    solutions: [
      { name: 'Oracle EPM Implementation', path: '/implementation#oracle-epm-implementation' },
      { name: 'SAP Implementation', path: '/implementation#sap-implementation' },
      { name: 'Data Migration Services', path: '/implementation#data-migration-services' },
      { name: 'System Integration', path: '/implementation#system-integration' },
      { name: 'Training & Support', path: '/implementation#training-support' },
      { name: 'Process Optimization', path: '/implementation#process-optimization' }
    ]
  };

  return (
    <Box
      component={motion.footer}
      style={{ scale, opacity }}
      sx={{
        position: 'relative',
        willChange: 'transform',
        transformOrigin: 'center bottom',
        background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
        boxShadow: 'inset 0 5px 15px rgba(0,0,0,0.05)',
        borderTop: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
        pt: { xs: 6, md: 10 },
        pb: 4,
      }}
    >
      {/* Decorative subtle wave pattern at the top */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          opacity: 0.05,
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%230077B6\' fill-opacity=\'1\' d=\'M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,197.3C672,181,768,139,864,133.3C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z\'%3E%3C/path%3E%3C/svg%3E")',
          backgroundSize: 'cover',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Main CTA Section */}
          <Grid item xs={12} md={5}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)', 
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  fontWeight: 800,
                  mb: 2,
                  background: 'linear-gradient(45deg, #0077B6 30%, #00B4D8 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                Let's work together
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '90%',
                }}
              >
                Start your journey with us and transform your business operations with our expert solutions
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                sx={{
                  py: 1.75,
                  px: 4,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #0077B6 30%, #00B4D8 90%)',
                  boxShadow: '0 4px 20px rgba(0, 119, 182, 0.25)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 6px 25px rgba(0, 119, 182, 0.35)',
                    transform: 'translateY(-2px)',
                  },
                  alignSelf: 'flex-start',
                }}
              >
                Get Started
              </Button>
              
              {/* Contact Information */}
              <Stack spacing={2} sx={{ mt: 6 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton 
                    size="small" 
                    sx={{ 
                      backgroundColor: 'rgba(0, 119, 182, 0.1)', 
                      color: '#0077B6',
                      '&:hover': { backgroundColor: 'rgba(0, 119, 182, 0.2)' },
                    }}
                  >
                    <LocationOnIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" color="text.secondary">
                    123 Business Avenue, Tech City, TC 10111
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton 
                    size="small" 
                    sx={{ 
                      backgroundColor: 'rgba(0, 119, 182, 0.1)', 
                      color: '#0077B6',
                      '&:hover': { backgroundColor: 'rgba(0, 119, 182, 0.2)' },
                    }}
                  >
                    <EmailIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" color="text.secondary">
                    contact@ironforge.com
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton 
                    size="small" 
                    sx={{ 
                      backgroundColor: 'rgba(0, 119, 182, 0.1)', 
                      color: '#0077B6',
                      '&:hover': { backgroundColor: 'rgba(0, 119, 182, 0.2)' },
                    }}
                  >
                    <PhoneIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body2" color="text.secondary">
                    +1 (555) 123-4567
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

          {/* Links Section */}
          <Grid item container xs={12} md={7} spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={4}>
              <Box sx={{ height: '100%' }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    position: 'relative',
                    background: 'linear-gradient(45deg, #0077B6 30%, #00B4D8 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 40,
                      height: 3,
                      borderRadius: 1.5,
                      bgcolor: '#0077B6',
                    }
                  }}
                >
                  Company
                </Typography>
                <Stack spacing={1}>
                  {footerLinks.company.map((link) => (
                    <Button
                      key={link.name}
                      component={Link}
                      to={link.path}
                      onClick={link.path === '#' ? (e) => e.preventDefault() : undefined}
                      sx={{
                        justifyContent: 'flex-start',
                        color: 'text.secondary',
                        fontSize: '0.95rem',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        transition: 'all 0.2s ease',
                        '&:hover': { 
                          color: '#0077B6',
                          backgroundColor: 'rgba(0, 119, 182, 0.08)',
                          transform: 'translateX(4px)',
                        },
                        cursor: 'pointer',
                      }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ height: '100%' }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    position: 'relative',
                    background: 'linear-gradient(45deg, #0077B6 30%, #00B4D8 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 40,
                      height: 3,
                      borderRadius: 1.5,
                      bgcolor: '#0077B6',
                    }
                  }}
                >
                  Services
                </Typography>
                <Stack spacing={1}>
                  {footerLinks.services.map((link) => (
                    <Button
                      key={link.name}
                      component={Link}
                      to={link.path}
                      sx={{
                        justifyContent: 'flex-start',
                        color: 'text.secondary',
                        fontSize: '0.95rem',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        transition: 'all 0.2s ease',
                        '&:hover': { 
                          color: '#0077B6',
                          backgroundColor: 'rgba(0, 119, 182, 0.08)',
                          transform: 'translateX(4px)',
                        },
                        textAlign: 'left',
                        lineHeight: 1.2,
                        minHeight: 'auto',
                      }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ height: '100%' }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    position: 'relative',
                    background: 'linear-gradient(45deg, #0077B6 30%, #00B4D8 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 40,
                      height: 3,
                      borderRadius: 1.5,
                      bgcolor: '#0077B6',
                    }
                  }}
                >
                  Solutions
                </Typography>
                <Stack spacing={1}>
                  {footerLinks.solutions.map((link) => (
                    <Button
                      key={link.name}
                      component={Link}
                      to={link.path}
                      sx={{
                        justifyContent: 'flex-start',
                        color: 'text.secondary',
                        fontSize: '0.95rem',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        transition: 'all 0.2s ease',
                        '&:hover': { 
                          color: '#0077B6',
                          backgroundColor: 'rgba(0, 119, 182, 0.08)',
                          transform: 'translateX(4px)',
                        },
                        textAlign: 'left',
                        lineHeight: 1.2,
                        minHeight: 'auto',
                      }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider sx={{ mt: 8, mb: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }} />
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            © {new Date().getFullYear()} 
            <Box 
              component="span" 
              sx={{ 
                fontWeight: 700, 
                background: 'linear-gradient(45deg, #0077B6 30%, #00B4D8 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mx: 0.5,
              }}
            >
              IronForge
            </Box> 
            All rights reserved.
          </Typography>
          
          <Stack 
            direction="row" 
            spacing={1.5}
            sx={{
              '& .MuiIconButton-root': {
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                }
              }
            }}
          >
            <IconButton 
              size="small" 
              sx={{ 
                color: '#0077B6',
                backgroundColor: 'rgba(0, 119, 182, 0.1)',
                '&:hover': { 
                  backgroundColor: '#0077B6',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(0, 119, 182, 0.3)',
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ 
                color: '#0077B6',
                backgroundColor: 'rgba(0, 119, 182, 0.1)',
                '&:hover': { 
                  backgroundColor: '#0077B6',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(0, 119, 182, 0.3)',
                },
              }}
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ 
                color: '#0077B6',
                backgroundColor: 'rgba(0, 119, 182, 0.1)',
                '&:hover': { 
                  backgroundColor: '#0077B6',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(0, 119, 182, 0.3)',
                },
              }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ 
                color: '#0077B6',
                backgroundColor: 'rgba(0, 119, 182, 0.1)',
                '&:hover': { 
                  backgroundColor: '#0077B6',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(0, 119, 182, 0.3)',
                },
              }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default DynamicFooter;