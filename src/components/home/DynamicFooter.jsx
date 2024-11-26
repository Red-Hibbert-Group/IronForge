import { Box, Container, Grid, Typography, Button, IconButton, Stack } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const DynamicFooter = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.7, 0.9], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0.8, 1]);

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
        backgroundColor: 'background.paper',
        pt: 8,
        pb: 4,
        position: 'relative',
        borderTop: '1px solid',
        borderColor: 'divider',
        willChange: 'transform',
        transformOrigin: 'center bottom',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Main CTA Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Let's work together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                opacity: 0.8,
                mb: 4,
              }}
            >
              Start your project with us and transform your digital presence
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
              }}
            >
              Get Started
            </Button>
          </Grid>

          {/* Links Section */}
          <Grid item container xs={12} md={6} spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
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
                      '&:hover': { color: 'primary.main' },
                      cursor: 'pointer',
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
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
                      '&:hover': { color: 'primary.main' },
                      textAlign: 'left',
                      lineHeight: 1.2,
                      minHeight: 'auto',
                      padding: '4px 8px',
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
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
                      '&:hover': { color: 'primary.main' },
                      textAlign: 'left',
                      lineHeight: 1.2,
                      minHeight: 'auto',
                      padding: '4px 8px',
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} IronForge. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={2}>
            <IconButton color="primary" size="small">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="primary" size="small">
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary" size="small">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary" size="small">
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default DynamicFooter;