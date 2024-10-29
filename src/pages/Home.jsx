import { Box, ThemeProvider } from '@mui/material';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import ParallaxBanner from '../components/home/ParallaxBanner';
import AnimatedHeader from '../components/home/AnimatedHeader';
import ClientCarousel from '../components/home/ClientCarousel';
import DynamicFooter from '../components/home/DynamicFooter';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { theme } from '../theme/theme';
import Navbar from '../components/Navbar';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-out-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box 
        component="main"
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary',
          overflowX: 'hidden',
          '& > *': {
            transition: 'all 0.3s ease-in-out',
          },
        }}
      >
        <ParallaxBanner>
          <Hero />
        </ParallaxBanner>
        
        <AnimatedHeader 
          title="Our Services" 
          subtitle="Discover what we can do for you"
          data-aos="fade-down"
          data-aos-delay="100"
        />
        
        <Box 
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{ 
            backgroundColor: 'background.subtle',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <ServicesOverview />
        </Box>

        <Box 
          data-aos="fade-up" 
          data-aos-delay="150"
          data-aos-duration="1000"
          sx={{
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <ClientCarousel />
        </Box>
        
        <Box 
          data-aos="fade-up" 
          data-aos-delay="200"
          data-aos-duration="1000"
          sx={{ 
            backgroundColor: 'background.paper',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <Testimonials />
        </Box>

        <DynamicFooter />
      </Box>
    </ThemeProvider>
  );
};

export default Home; 