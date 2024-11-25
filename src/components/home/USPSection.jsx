import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const USPCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const USPSection = () => {
  const usps = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Trusted Expertise',
      description: 'Over decade of experience in OneStream implementation with 100% success rate',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Rapid Implementation',
      description: 'Streamlined processes ensuring quick deployment without compromising quality',
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40 }} />,
      title: 'Innovative Solutions',
      description: 'Custom-tailored approaches combining industry best practices with cutting-edge technology',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: 6,
          background: (theme) =>
            `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Why Choose Us
      </Typography>
      <Grid container spacing={4}>
        {usps.map((usp, index) => (
          <Grid item xs={12} md={4} key={index}>
            <USPCard elevation={3}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                  }}
                >
                  {usp.icon}
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  {usp.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {usp.description}
                </Typography>
              </Box>
            </USPCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default USPSection; 