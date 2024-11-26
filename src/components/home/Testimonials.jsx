import { Box, Container, Typography, Card, Avatar, Rating, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CFO",
    company: "Tech Solutions Inc.",
    image: "/avatars/sarah.jpg", // Add placeholder image path
    rating: 5,
    testimonial: "IronForge transformed our financial processes completely. The implementation was smooth, and the results were immediate. Our month-end close time reduced by 60%."
  },
  {
    name: "Michael Chen",
    role: "Director of Finance",
    company: "Global Corp",
    image: "/avatars/michael.jpg",
    rating: 5,
    testimonial: "The level of automation and accuracy we've achieved with IronForge's solutions is remarkable. Their team's expertise and support are unmatched."
  },
  {
    name: "Emma Williams",
    role: "VP of Operations",
    company: "Innovation Labs",
    image: "/avatars/emma.jpg",
    rating: 5,
    testimonial: "Implementing IronForge's EPM solution was one of the best decisions we made. The ROI has been exceptional, and the ongoing support is outstanding."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 15 },
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'radial-gradient(circle at center, #ffffff 0%, transparent 70%)',
        }}
      />

      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            sx={{
              color: 'white',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            TESTIMONIALS
          </Typography>
          <Typography
            variant="h3"
            component={motion.h3}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            sx={{
              color: 'white',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600,
              mb: 3,
            }}
          >
            What Our <span style={{ color: '#ffd700' }}>Clients</span> Say
          </Typography>
          <Typography
            variant="body1"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Don't just take our word for it. Here's what industry leaders say about our services.
          </Typography>
        </Box>

        {/* Testimonials Carousel */}
        <Box
          sx={{
            position: 'relative',
            maxWidth: '1000px',
            mx: 'auto',
            px: { xs: 2, md: 8 },
          }}
        >
          <Card
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={activeIndex}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
            }}
          >
            <FormatQuoteIcon
              sx={{
                position: 'absolute',
                top: { xs: -20, md: -30 },
                left: { xs: 20, md: 40 },
                fontSize: { xs: '4rem', md: '6rem' },
                color: 'rgba(255, 255, 255, 0.1)',
                transform: 'rotate(180deg)',
              }}
            />
            
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src={testimonials[activeIndex].image}
                sx={{
                  width: { xs: 80, md: 100 },
                  height: { xs: 80, md: 100 },
                  mx: 'auto',
                  mb: 3,
                  border: '4px solid rgba(255, 255, 255, 0.1)',
                }}
              />
              <Rating 
                value={testimonials[activeIndex].rating} 
                readOnly 
                sx={{ mb: 3 }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  lineHeight: 1.8,
                  mb: 4,
                  fontStyle: 'italic',
                }}
              >
                "{testimonials[activeIndex].testimonial}"
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {testimonials[activeIndex].name}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 0.5,
                }}
              >
                {testimonials[activeIndex].role}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                {testimonials[activeIndex].company}
              </Typography>
            </Box>
          </Card>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mt: 4,
            }}
          >
            <IconButton
              onClick={prevTestimonial}
              sx={{
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
              onClick={nextTestimonial}
              sx={{
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;