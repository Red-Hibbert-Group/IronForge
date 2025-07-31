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
      { name: 'Blog', path: '/blog' }
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
        background: 'linear-gradient(135deg, #0a0a18 0%, #14142a 50%, #1a1a2e 100%)',
        overflow: 'hidden',
        pt: { xs: 6, md: 8 },
        pb: 4,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(82, 109, 254, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(142, 95, 254, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}
    >
      {/* Modern geometric patterns */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          opacity: 0.03,
          background: `
            linear-gradient(45deg, transparent 40%, rgba(82, 109, 254, 0.1) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(142, 95, 254, 0.1) 50%, transparent 60%)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Main CTA Section */}
          <Grid item xs={12} md={4}>
            <Box 
              sx={{ 
                p: { xs: 3, md: 4 }, 
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)', 
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(82, 109, 254, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #526DFE 0%, #8E5FFE 100%)',
                  borderRadius: '20px 20px 0 0',
                }
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 800,
                  mb: 2,
                  background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                Let's work together
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  color: 'text.secondary',
                  mb: 3,
                  maxWidth: '100%',
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                Start your journey with us and transform your business operations with our expert solutions
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                  boxShadow: '0 8px 25px rgba(82, 109, 254, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    boxShadow: '0 12px 35px rgba(82, 109, 254, 0.4)',
                    transform: 'translateY(-3px)',
                    background: 'linear-gradient(135deg, #6281FF 0%, #9D75FF 100%)',
                  },
                  alignSelf: 'flex-start',
                  mb: 3,
                }}
              >
                Get Started
              </Button>
              
              {/* Contact Information */}
              <Stack spacing={2} sx={{ mt: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, rgba(82, 109, 254, 0.1) 0%, rgba(142, 95, 254, 0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(82, 109, 254, 0.2)',
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: 16, color: '#526DFE' }} />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.85rem' }}>
                    123 Business Avenue, Tech City, TC 10111
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, rgba(82, 109, 254, 0.1) 0%, rgba(142, 95, 254, 0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(82, 109, 254, 0.2)',
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 16, color: '#526DFE' }} />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.85rem' }}>
                    contact@ironforge.com
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, rgba(82, 109, 254, 0.1) 0%, rgba(142, 95, 254, 0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(82, 109, 254, 0.2)',
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: 16, color: '#526DFE' }} />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.85rem' }}>
                    +1 (555) 123-4567
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* Links Section */}
          <Grid item container xs={12} md={8} spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={4}>
              <Box sx={{ 
                height: '100%',
                p: 3,
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                }
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'white',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -6,
                      left: 0,
                      width: 25,
                      height: 2,
                      borderRadius: 1,
                      background: 'linear-gradient(90deg, #526DFE 0%, #8E5FFE 100%)',
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
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.85rem',
                        px: 1.5,
                        py: 0.75,
                        borderRadius: '6px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontWeight: 400,
                        '&:hover': { 
                          color: 'white',
                          backgroundColor: 'rgba(82, 109, 254, 0.15)',
                          transform: 'translateX(4px)',
                          boxShadow: '0 4px 12px rgba(82, 109, 254, 0.2)',
                        },
                        cursor: 'pointer',
                        textTransform: 'none',
                      }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ 
                height: '100%',
                p: 3,
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                }
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'white',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -6,
                      left: 0,
                      width: 25,
                      height: 2,
                      borderRadius: 1,
                      background: 'linear-gradient(90deg, #526DFE 0%, #8E5FFE 100%)',
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
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.8rem',
                        px: 1.5,
                        py: 0.75,
                        borderRadius: '6px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontWeight: 400,
                        '&:hover': { 
                          color: 'white',
                          backgroundColor: 'rgba(82, 109, 254, 0.15)',
                          transform: 'translateX(4px)',
                          boxShadow: '0 4px 12px rgba(82, 109, 254, 0.2)',
                        },
                        textAlign: 'left',
                        lineHeight: 1.2,
                        minHeight: 'auto',
                        textTransform: 'none',
                      }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ 
                height: '100%',
                p: 3,
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                }
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'white',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -6,
                      left: 0,
                      width: 25,
                      height: 2,
                      borderRadius: 1,
                      background: 'linear-gradient(90deg, #526DFE 0%, #8E5FFE 100%)',
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
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.8rem',
                        px: 1.5,
                        py: 0.75,
                        borderRadius: '6px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontWeight: 400,
                        '&:hover': { 
                          color: 'white',
                          backgroundColor: 'rgba(82, 109, 254, 0.15)',
                          transform: 'translateX(4px)',
                          boxShadow: '0 4px 12px rgba(82, 109, 254, 0.2)',
                        },
                        textAlign: 'left',
                        lineHeight: 1.2,
                        minHeight: 'auto',
                        textTransform: 'none',
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
        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                fontSize: '0.9rem',
              }}
            >
              © {new Date().getFullYear()} 
              <Box 
                component="span" 
                sx={{ 
                  fontWeight: 700, 
                  background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
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
              spacing={2}
              sx={{
                '& .MuiIconButton-root': {
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px) scale(1.1)',
                  }
                }
              }}
            >
              <IconButton 
                size="medium" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': { 
                    backgroundColor: 'rgba(82, 109, 254, 0.2)',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(82, 109, 254, 0.3)',
                    border: '1px solid rgba(82, 109, 254, 0.3)',
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="medium" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': { 
                    backgroundColor: 'rgba(82, 109, 254, 0.2)',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(82, 109, 254, 0.3)',
                    border: '1px solid rgba(82, 109, 254, 0.3)',
                  },
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="medium" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': { 
                    backgroundColor: 'rgba(82, 109, 254, 0.2)',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(82, 109, 254, 0.3)',
                    border: '1px solid rgba(82, 109, 254, 0.3)',
                  },
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="medium" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': { 
                    backgroundColor: 'rgba(82, 109, 254, 0.2)',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(82, 109, 254, 0.3)',
                    border: '1px solid rgba(82, 109, 254, 0.3)',
                  },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DynamicFooter;