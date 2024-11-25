import { Box, ThemeProvider } from '@mui/material';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import ParallaxBanner from '../components/home/ParallaxBanner';
import AnimatedHeader from '../components/home/AnimatedHeader';
import DynamicFooter from '../components/home/DynamicFooter';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { theme } from '../theme/theme';
import Navbar from '../components/Navbar';
import MissionSection from '../components/home/MissionSection';
import ClientSuccess from '../components/home/ClientSuccess';
import OneStreamImplementation from '../components/home/OneStreamImplementation';

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
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
            pointerEvents: 'none',
          },
          '& > *': {
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        }}
      >
        <ParallaxBanner>
          <Hero />
        </ParallaxBanner>
        
        <AnimatedHeader 
          title="Our Services" 
          subtitle="Expert OneStream Implementation Solutions"
          data-aos="fade-down"
          data-aos-delay="100"
          sx={{
            '& h2': {
              background: 'linear-gradient(90deg, #1a237e 0%, #0d47a1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
            },
            '& p': {
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: 'text.secondary',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              px: 3,
            }
          }}
        />
        
        <Box 
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            margin: '24px',
            transform: 'translateZ(0)',
            willChange: 'transform',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at top right, rgba(25, 118, 210, 0.05) 0%, transparent 70%)',
              pointerEvents: 'none'
            },
            perspective: 1000,
            backfaceVisibility: 'hidden'
          }}
        >
          <ServicesOverview />
        </Box>

        <Box
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
          sx={{
            backgroundColor: 'background.paper',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <OneStreamImplementation />
        </Box>

        <Box
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
          sx={{
            backgroundColor: 'background.default',
            transform: 'translateZ(0)',
            willChange: 'transform',
            py: 8,
          }}
        >
          <MissionSection />
        </Box>

        <Box
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          sx={{
            backgroundColor: 'background.paper',
            transform: 'translateZ(0)',
            willChange: 'transform',
            py: 8,
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%': {
                transform: 'translateY(0px)',
              },
              '50%': {
                transform: 'translateY(-10px)',
              },
              '100%': {
                transform: 'translateY(0px)',
              },
            },
          }}
        >
          <ClientSuccess />
        </Box>

        <Box 
          data-aos="fade-up" 
          data-aos-delay="200"
          data-aos-duration="1000"
          sx={{ 
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.1) 100%)',
            transform: 'translateZ(0)',
            willChange: 'transform',
            borderRadius: '16px',
            margin: '24px',
            padding: '40px 20px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
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