import { Box, Container, Typography, Paper, Chip, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBack, CalendarToday, Person, Category, TrendingUp, Build, Psychology } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Blog = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0a0a18 0%, #14142a 100%)',
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
                  color: '#526DFE',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(82, 109, 254, 0.1)'
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
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: '#ffffff',
                  mb: 2,
                  lineHeight: 1.2,
                  letterSpacing: '-0.03em'
                }}
              >
                OneStream Custom Dev: From MVP to Millions
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: '#526DFE',
                  fontWeight: 600,
                  mb: 3,
                  fontStyle: 'italic'
                }}
              >
                How custom OneStream development transforms business operations and drives exponential growth
              </Typography>

              {/* Meta Information */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                <Chip
                  icon={<CalendarToday sx={{ fontSize: '1rem' }} />}
                  label="December 15, 2024"
                  sx={{ 
                    backgroundColor: 'rgba(82, 109, 254, 0.1)', 
                    color: '#526DFE',
                    border: '1px solid rgba(82, 109, 254, 0.3)'
                  }}
                />
                <Chip
                  icon={<Person sx={{ fontSize: '1rem' }} />}
                  label="IronForge Team"
                  sx={{ 
                    backgroundColor: 'rgba(82, 109, 254, 0.1)', 
                    color: '#526DFE',
                    border: '1px solid rgba(82, 109, 254, 0.3)'
                  }}
                />
                <Chip
                  icon={<Category sx={{ fontSize: '1rem' }} />}
                  label="OneStream Development"
                  sx={{ 
                    backgroundColor: 'rgba(82, 109, 254, 0.1)', 
                    color: '#526DFE',
                    border: '1px solid rgba(82, 109, 254, 0.3)'
                  }}
                />
              </Box>
            </Paper>

            {/* Blog Content */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                lineHeight: 1.8,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  mb: 3,
                  textAlign: 'justify'
                }}
              >
                In modern finance departments, OneStream has become the backbone for consolidation, planning, and reporting. But for companies with unique needs and bold goals, using the platform "as-is" is only the beginning.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  mb: 3,
                  textAlign: 'justify'
                }}
              >
                That's where custom development inside OneStream comes in — a way to extend, enhance, and personalize the platform to solve problems traditional features can't. And often, it all starts with a single idea — a simple proof of concept or Minimum Viable Product (MVP) — that can grow into something transformative.
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#ffffff',
                  mb: 2,
                  mt: 4,
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Build sx={{ color: '#526DFE', fontSize: '1.5rem' }} />
                Phase 1: A Simple Start
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  mb: 3,
                  textAlign: 'justify'
                }}
              >
                A large retail company once needed a basic dashboard to monitor store-level sales performance across their international branches. Their challenge was simple but urgent: they needed real-time visibility without relying on monthly manual data dumps from regional teams.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  mb: 3,
                  textAlign: 'justify'
                }}
              >
                A small MVP was built — a straightforward dashboard inside OneStream that connected to their existing data warehouse and showed daily sales trends. It allowed them to filter by store, region, and product category.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  mb: 3,
                  textAlign: 'justify'
                }}
              >
                The MVP went live within a month. It worked well, solved their immediate pain point, and got leadership's attention.
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#ffffff',
                  mb: 2,
                  mt: 4,
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <TrendingUp sx={{ color: '#526DFE', fontSize: '1.5rem' }} />
                Phase 2: Scale, Automate, Transform
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  mb: 3,
                  textAlign: 'justify'
                }}
              >
                The company soon realized they could go further. They didn't just want to view sales data — they wanted to:
              </Typography>

              <Box sx={{ ml: 3, mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    mb: 1,
                    '&::before': {
                      content: '"• "',
                      color: '#526DFE',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  Compare it with forecasts
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    mb: 1,
                    '&::before': {
                      content: '"• "',
                      color: '#526DFE',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  Trigger alerts when targets weren't met
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    mb: 1,
                    '&::before': {
                      content: '"• "',
                      color: '#526DFE',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  Tie performance to staffing and promotional campaigns
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  mb: 3,
                  textAlign: 'justify'
                }}
              >
                Over the next few months, the MVP evolved into a fully integrated performance management module:
              </Typography>

              <Box sx={{ ml: 3, mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    mb: 1,
                    '&::before': {
                      content: '"• "',
                      color: '#526DFE',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  A custom forecasting engine using Business Rules
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    mb: 1,
                    '&::before': {
                      content: '"• "',
                      color: '#526DFE',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  Drillable dashboards linked to workforce data
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    mb: 1,
                    '&::before': {
                      content: '"• "',
                      color: '#526DFE',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  Automated alerts and task workflows inside OneStream
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  mb: 3,
                  textAlign: 'justify'
                }}
              >
                What began as a small dashboard became a strategic tool used by sales, HR, and finance. The solution eliminated weeks of manual consolidation and helped the company respond faster to market shifts — leading to measurable savings and stronger financial control.
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#ffffff',
                  mb: 2,
                  mt: 4,
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Psychology sx={{ color: '#526DFE', fontSize: '1.5rem' }} />
                Why Custom Dev Is the Key to OneStream's Power
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  mb: 3,
                  textAlign: 'justify'
                }}
              >
                OneStream is powerful out of the box — but not every business fits into a box. Custom development allows teams to:
              </Typography>

              <Box sx={{ ml: 3, mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    mb: 1,
                    '&::before': {
                      content: '"• "',
                      color: '#526DFE',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  Build tools tailored to internal processes
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    mb: 1,
                    '&::before': {
                      content: '"• "',
                      color: '#526DFE',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  Automate complex calculations and approvals
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    mb: 1,
                    '&::before': {
                      content: '"• "',
                      color: '#526DFE',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  Integrate with CRMs, ERPs, or other internal platforms
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  mb: 3,
                  textAlign: 'justify'
                }}
              >
                By leveraging the extensibility of OneStream — from business rules to custom dashboards to marketplace components — companies can build exactly what they need, rather than forcing a workaround.
              </Typography>

              <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

              <Typography
                variant="h6"
                sx={{
                  color: '#526DFE',
                  fontWeight: 600,
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}
              >
                Ready to transform your OneStream implementation? Contact IronForge to discover how custom development can accelerate your journey from MVP to millions.
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Blog; 