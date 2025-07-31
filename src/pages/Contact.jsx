import { Box, Container, Grid, Typography, TextField, Button, Paper, useTheme } from '@mui/material';
import { Email, Phone, LocationOn, Send, LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';
import { motion } from 'framer-motion';

// Import data
import contactData from '../data/contactData.json';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Email: Email,
  Phone: Phone,
  LocationOn: LocationOn,
  LinkedIn: LinkedIn,
  Twitter: Twitter,
  Facebook: Facebook,
  Send: Send
};

const Contact = () => {
  const theme = useTheme();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <>
      <Navbar />
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)',
          pt: 12,
          pb: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Animation Elements */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 0,
            opacity: 0.05
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: ['0%', '100%', '0%'],
                y: ['0%', '100%', '0%'],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                color: theme.palette.text.primary,
                textAlign: 'center',
                mb: 2,
                background: `linear-gradient(45deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {contactData.hero.title}
            </Typography>
            <Typography 
              variant="h5" 
              sx={{
                color: theme.palette.text.secondary,
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                mb: 8
              }}
            >
              {contactData.hero.subtitle}
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h4" sx={{ color: theme.palette.text.primary, mb: 4 }}>
                    {contactData.form.title}
                  </Typography>
                  {contactData.contactInfo.map((info, index) => {
                    const IconComponent = iconMap[info.icon];
                    const colorMap = {
                      Email: theme.palette.primary.main,
                      Phone: theme.palette.accent.success,
                      LocationOn: theme.palette.secondary.main
                    };
                    const color = colorMap[info.icon];
                    
                    return (
                      <Box 
                        key={index}
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          mb: 4,
                          p: 3,
                          borderRadius: 2,
                          background: 'rgba(255,255,255,0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(10px)',
                            boxShadow: `0 10px 30px ${color}20`,
                          }
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: `${color}10`,
                            p: 2,
                            borderRadius: 2,
                            mr: 3
                          }}
                        >
                          <IconComponent sx={{ fontSize: 30, color: color }} />
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 0.5 }}>
                            {info.title}
                          </Typography>
                          <Typography sx={{ color: theme.palette.text.secondary }}>
                            {info.content}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>

                {/* Social Links */}
                <Box>
                  <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 3 }}>
                    {contactData.socialSection.title}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {contactData.socialLinks.map((social, index) => {
                      const IconComponent = iconMap[social.icon];
                      return (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              minWidth: 'auto',
                              p: 2,
                              bgcolor: social.color,
                              borderRadius: '50%',
                              '&:hover': {
                                bgcolor: `${social.color}dd`,
                                transform: 'translateY(-3px)',
                              }
                            }}
                          >
                            <IconComponent />
                          </Button>
                        </motion.div>
                      );
                    })}
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Paper 
                  elevation={0}
                  sx={{
                    p: 4,
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.3)',
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      {contactData.form.fields.map((field, index) => (
                        <Grid item xs={12} sm={field.gridSize === 12 ? 12 : 6} key={index}>
                          <TextField
                            fullWidth
                            label={field.label}
                            required={field.required}
                            type={field.type}
                            variant="outlined"
                            multiline={field.type === 'textarea'}
                            rows={field.rows || undefined}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: theme.palette.grey[300],
                                },
                                '&:hover fieldset': {
                                  borderColor: theme.palette.primary.main,
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: theme.palette.text.secondary,
                              },
                            }}
                          />
                        </Grid>
                      ))}
                      <Grid item xs={12}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{
                              py: 2,
                            }}
                            endIcon={<Send />}
                          >
                            {contactData.form.submitButton}
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default Contact; 