import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const features = [
  {
    icon: <AutoGraphIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Financial Consolidation',
    description: 'Streamline complex financial consolidation processes with automated workflows, eliminating manual tasks and reducing closing cycles.'
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Unified Platform',
    description: 'Single platform for financial consolidation, reporting, planning, and analytics, ensuring data consistency across your organization.'
  },
  {
    icon: <AccountTreeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Workflow Management',
    description: 'Built-in workflow capabilities to manage complex processes, tasks, and approvals with full audit trail visibility.'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Data Quality Management',
    description: 'Robust data quality management ensuring accuracy and reliability of financial and operational data.'
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Performance Optimization',
    description: 'High-performance architecture designed to handle large data volumes and complex calculations efficiently.'
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'System Integration',
    description: 'Seamless integration with existing ERP systems, data warehouses, and other enterprise applications.'
  }
];

const OneStreamImplementation = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 4, sm: 6, md: 10 }, 
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-50%',
          width: '200%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(25, 118, 210, 0.08), transparent 70%)',
          animation: 'pulse 15s infinite',
        },
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2, md: 3 },
            mb: { xs: 4, md: 6 },
            flexWrap: 'wrap',
            transform: 'translateY(0)',
            animation: 'fadeInDown 1s ease-out',
            '@keyframes fadeInDown': {
              from: {
                opacity: 0,
                transform: 'translateY(-20px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <Box
            component="img"
            src="/onestream-logo.webp"
            alt="OneStream"
            sx={{
              height: { xs: '35px', sm: '45px', md: '55px' },
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.2rem', sm: '2.7rem', md: '3.2rem' },
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              position: 'relative',
              textShadow: '0 4px 12px rgba(25, 118, 210, 0.1)',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '0',
                width: '100%',
                height: '4px',
                background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                borderRadius: '2px',
                boxShadow: '0 2px 4px rgba(25, 118, 210, 0.2)',
              }
            }}
          >
            Implementation
          </Typography>
        </Box>

        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{ 
            mb: { xs: 5, sm: 7, md: 9 }, 
            maxWidth: '800px', 
            mx: 'auto',
            px: { xs: 3, sm: 4 },
            py: { xs: 3, sm: 4 },
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
            lineHeight: 1.8,
            color: 'text.primary',
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease-out 0.3s both',
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          Transform your financial processes with our comprehensive OneStream implementation services,
          delivering a unified platform for corporate performance management.
        </Typography>

        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            animation: 'fadeIn 1s ease-out 0.6s both',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  height: '100%',
                  backgroundColor: 'background.paper',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 12px 40px rgba(25, 118, 210, 0.15)',
                    '& .MuiSvgIcon-root': {
                      transform: 'scale(1.15) rotate(5deg)',
                    },
                    '& .feature-title': {
                      color: 'primary.main',
                    },
                    '&::before': {
                      transform: 'scale(1.5)',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at top right, rgba(25, 118, 210, 0.05), transparent 70%)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2.5,
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      p: 1.5,
                      borderRadius: '12px',
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                      '& .MuiSvgIcon-root': {
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontSize: { xs: 35, sm: 40 },
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="feature-title"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      transition: 'color 0.3s ease',
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    position: 'relative',
                    color: 'text.secondary',
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: { xs: 6, sm: 8, md: 10 },
            p: { xs: 3, sm: 4, md: 5 },
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            borderRadius: 3,
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(25, 118, 210, 0.25)',
            transform: 'translateZ(0)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
              '&::before': {
                transform: 'rotate(180deg) scale(1.5)',
              }
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2), transparent 70%)',
              transition: 'transform 0.6s ease',
            }
          }}
        >
          <Typography 
            variant="h4" 
            component="h3" 
            gutterBottom 
            fontWeight="bold"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Ready to Transform Your Financial Operations?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              opacity: 0.95,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: 1.8,
            }}
          >
            Our expert team ensures a smooth implementation process, tailored to your organization's needs.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default OneStreamImplementation; 