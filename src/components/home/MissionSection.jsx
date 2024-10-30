import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { AccountBalance, Speed, Security } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const MissionSection = () => {
  const theme = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box 
      sx={{
        background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)',
        py: { xs: 6, md: 10 },
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          textAlign="center" 
          mb={{ xs: 4, md: 8 }}
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2, #64b5f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Our Mission
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            paragraph
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}
          >
            Transforming Financial Processes Through Expert OneStream Implementation
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {[
            {
              icon: AccountBalance,
              title: 'Financial Excellence',
              description: 'We drive financial transformation by leveraging OneStreams unified platform to streamline your processes.',
              delay: 0.2
            },
            {
              icon: Speed,
              title: 'Our Approach',
              description: 'We combine industry best practices with innovative methodologies for seamless OneStream implementation.',
              delay: 0.4
            },
            {
              icon: Security,
              title: 'Commitment',
              description: 'We re dedicated to delivering reliable, secure, and scalable OneStream solutions for your business.',
              delay: 0.6
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
              >
                <Paper 
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    background: 'linear-gradient(145deg, #ffffff, #f8faff)',
                    border: '1px solid rgba(25, 118, 210, 0.08)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(25, 118, 210, 0.15)',
                    }
                  }}
                >
                  <Box 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center"
                    sx={{ height: '100%' }}
                  >
                    <Box
                      sx={{
                        background: 'linear-gradient(45deg, #1976d2, #64b5f6)',
                        borderRadius: '50%',
                        p: 2,
                        mb: 3
                      }}
                    >
                      <item.icon 
                        sx={{ 
                          fontSize: { xs: 36, md: 48 }, 
                          color: 'white'
                        }} 
                      />
                    </Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: '#1976d2',
                        mb: 2
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      align="center" 
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        lineHeight: 1.6
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionSection; 