import { Box, Container, Typography, Paper, Grid, Avatar, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { keyframes } from '@mui/system';
import { motion } from 'framer-motion';

const shine = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

const testimonials = [
  {
    quote: "IronForge transformed our financial processes with their OneStream expertise. The implementation was smooth and the results exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CFO, Tech Solutions Inc.",
    avatar: "/avatars/avatar1.jpg",
    rating: 5,
    company: "Tech Solutions Inc.",
    companyLogo: "/logos/tech-solutions.png"
  },
  {
    quote: "Their deep understanding of OneStream and commitment to our success made them the perfect partner for our digital transformation journey.",
    author: "Michael Chen",
    position: "Director of Finance, Global Corp",
    avatar: "/avatars/avatar2.jpg",
    rating: 5,
    company: "Global Corp",
    companyLogo: "/logos/global-corp.png"
  },
  {
    quote: "The team's technical expertise combined with their business acumen delivered exceptional value to our organization.",
    author: "David Miller",
    position: "VP Finance, Enterprise Systems",
    avatar: "/avatars/avatar3.jpg",
    rating: 5,
    company: "Enterprise Systems",
    companyLogo: "/logos/enterprise-systems.png"
  }
];

const Testimonials = () => {
  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={{ 
        py: 15,
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          animation: `${float} 20s infinite`,
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            mb: 10,
            position: 'relative',
          }}
        >
          <Typography 
            variant="h1"
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            sx={{ 
              color: '#fff',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '4px',
              mb: 4,
              textTransform: 'uppercase'
            }}
          >
            TESTIMONIALS
          </Typography>
          <Typography 
            variant="h2" 
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            sx={{ 
              color: '#fff',
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              '& span': {
                color: '#FFD700'
              }
            }}
          >
            What Our <span>Clients</span> Say
          </Typography>
          <Typography
            variant="h6"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            sx={{
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Don't just take our word for it. Here's what industry leaders say about our services.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper 
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      background: 'rgba(255,255,255,0.1)',
                      '& .quote-icon': {
                        transform: 'rotate(10deg)',
                        color: 'primary.light',
                      }
                    }
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={testimonial.avatar}
                      sx={{ 
                        width: 60, 
                        height: 60,
                        border: '2px solid',
                        borderColor: 'primary.light'
                      }}
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#fff',
                          fontWeight: 600
                        }}
                      >
                        {testimonial.author}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.7)'
                        }}
                      >
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>

                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    sx={{ 
                      mb: 3,
                      '& .MuiRating-icon': {
                        color: '#FFD700'
                      }
                    }}
                  />

                  <FormatQuoteIcon 
                    className="quote-icon"
                    sx={{ 
                      fontSize: 40,
                      color: 'rgba(255,255,255,0.4)',
                      mb: 2,
                      transition: 'all 0.3s ease',
                    }}
                  />

                  <Typography 
                    sx={{ 
                      color: '#fff',
                      flex: 1,
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      mb: 3,
                      fontWeight: 300,
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>

                  <Box
                    sx={{
                      mt: 'auto',
                      pt: 3,
                      borderTop: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#fff',
                        fontWeight: 600
                      }}
                    >
                      {testimonial.company}
                    </Typography>
                    <Box
                      component="img"
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      sx={{
                        height: 30,
                        opacity: 0.9,
                        filter: 'brightness(0) invert(1)',
                      }}
                    />
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

export default Testimonials;