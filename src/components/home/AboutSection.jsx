import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';

const AboutSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          About Us
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Your Trusted Partner in OneStream Implementation
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': { transform: 'translateY(-8px)', transition: 'transform 0.3s' }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <AccountTreeIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6">Our Mission</Typography>
                <Typography variant="body1" color="text.secondary" textAlign="center">
                  To empower organizations with seamless OneStream implementations that 
                  transform financial processes and drive sustainable growth.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': { transform: 'translateY(-8px)', transition: 'transform 0.3s' }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <LightbulbIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6">Our Approach</Typography>
                <Typography variant="body1" color="text.secondary" textAlign="center">
                  We combine deep OneStream expertise with agile methodologies to deliver 
                  tailored solutions that maximize your platform's potential.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': { transform: 'translateY(-8px)', transition: 'transform 0.3s' }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <GroupsIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6">Our Team</Typography>
                <Typography variant="body1" color="text.secondary" textAlign="center">
                  Led by certified OneStream experts with decades of combined experience 
                  in financial transformation and CPM implementations.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection; 