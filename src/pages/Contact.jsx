import { Box, Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Typography variant="h2" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              Get in touch with us to learn more about our AI solutions and how we can help transform your business.
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 2 }} />
                <Typography>info@ironforgeanalytics.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 2 }} />
                <Typography>+1 (555) 123-4567</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 2 }} />
                <Typography>123 AI Street, Tech City, TC 12345</Typography>  
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Paper elevation={3} sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      required
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 