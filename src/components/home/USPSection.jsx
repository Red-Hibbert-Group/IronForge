import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InsightsIcon from '@mui/icons-material/Insights';

const USPSection = () => {
  const features = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Rapid Implementation',
      description: 'Get your OneStream solution up and running in record time with our accelerated implementation methodology.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols ensure your financial data remains protected at all times.'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Our dedicated support team is available around the clock to address any issues or questions.'
    },
    {
      icon: <InsightsIcon sx={{ fontSize: 40 }} />,
      title: 'Advanced Analytics',
      description: 'Turn data into actionable insights with our powerful analytics and reporting capabilities.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Grid 
          container 
          spacing={3}
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div variants={item}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: '16px',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.9) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                      '& .icon-container': {
                        transform: 'scale(1.1)',
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(13, 71, 161, 0.05) 100%)',
                      top: '-50px',
                      right: '-50px',
                    }
                  }}
                >
                  <Box
                    className="icon-container"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '70px',
                      height: '70px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                      color: 'white',
                      mb: 2,
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 1.5,
                      fontSize: '1.25rem',
                      color: '#1a237e'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default USPSection; 