import { Box, Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { 
  CloudQueue, 
  Security, 
  Speed, 
  Psychology, 
  Assessment, 
  Support,
  BusinessCenter,
  Transform,
  School,
  ChevronRight
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      title: 'OneStream Implementation',
      description: 'End-to-end implementation of OneStream solutions for financial consolidation, planning, and reporting.',
      icon: CloudQueue,
      gradient: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
      link: '/services/implementation'
    },
    {
      title: 'Business Transformation',
      description: 'Complete digital transformation services including process optimization and change management.',
      icon: Transform,
      gradient: 'linear-gradient(135deg, #5E55EB 0%, #9C6BFF 100%)',
      link: '/services/transformation'
    },
    {
      title: 'Consulting & Advisory',
      description: 'Strategic alignment, KPI definition, and roadmap planning for your OneStream implementations.',
      icon: BusinessCenter,
      gradient: 'linear-gradient(135deg, #4B64FE 0%, #6C87FF 100%)',
      link: '/services/consulting'
    },
    {
      title: 'Financial Consolidation',
      description: 'Streamline and automate your financial close process with powerful consolidation capabilities.',
      icon: Speed,
      gradient: 'linear-gradient(135deg, #536DFE 0%, #8E7BFF 100%)',
      link: '/services/consolidation'
    },
    {
      title: 'Support & Training',
      description: '24/7 incident resolution, root cause analysis, and comprehensive training programs.',
      icon: Support,
      gradient: 'linear-gradient(135deg, #6B77FF 0%, #9E87FF 100%)',
      link: '/services/support'
    },
    {
      title: 'Performance Management',
      description: 'Advanced monitoring and optimization of business performance across finance and operations.',
      icon: Assessment,
      gradient: 'linear-gradient(135deg, #596FFE 0%, #8D90FF 100%)',
      link: '/services/performance'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
      rotateY: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const iconVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.3
      }
    }
  };

  return (
    <Box sx={{ position: 'relative', zIndex: 2 }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Grid container spacing={4} alignItems="stretch">
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div variants={cardVariants} style={{ height: '100%', display: 'flex' }}>
                <Card
                  sx={{
                    height: '100%',
                    width: '100%',
                    background: 'rgba(20, 20, 35, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                    '&:hover': {
                      transform: 'translateY(-16px) scale(1.02)',
                      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)',
                      '& .service-icon-container': {
                        transform: 'scale(1.1)',
                      },
                      '& .service-gradient': {
                        opacity: 1,
                      },
                      '& .service-btn': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                      '& .service-title': {
                        backgroundPosition: 'left bottom',
                      }
                    },
                  }}
                >
                  {/* Background gradient */}
                  <Box
                    className="service-gradient"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `${service.gradient}`,
                      opacity: 0.05,
                      transition: 'opacity 0.5s ease',
                      zIndex: 0,
                    }}
                  />
                  
                  {/* Corner accent */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '150px',
                      height: '150px',
                      background: service.gradient,
                      top: '-75px',
                      right: '-75px',
                      borderRadius: '50%',
                      opacity: 0.15,
                      zIndex: 0,
                    }}
                  />
                  
                  <CardContent
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      zIndex: 1,
                      p: 4,
                    }}
                  >
                    {/* Icon container with gradient background */}
                    <motion.div variants={iconVariants} className="service-icon-container" style={{ transition: 'transform 0.5s ease' }}>
                      <Box
                        sx={{
                          width: '70px',
                          height: '70px',
                          borderRadius: '16px',
                          background: service.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                          mb: 3,
                        }}
                      >
                        <Box
                          component={service.icon}
                          sx={{
                            fontSize: '32px',
                            color: 'white',
                            filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.15))',
                          }}
                        />
                      </Box>
                    </motion.div>
                    
                    <Typography
                      variant="h5"
                      component="h3"
                      className="service-title"
                      sx={{
                        fontWeight: 700,
                        color: 'white',
                        mb: 2,
                        position: 'relative',
                        display: 'inline-block',
                        backgroundImage: `linear-gradient(transparent 80%, rgba(255,255,255,0.1) 80%)`,
                        backgroundSize: '0% 100%',
                        backgroundPosition: 'right bottom',
                        backgroundRepeat: 'no-repeat',
                        transition: 'background-position 0.6s ease',
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                        mb: 4,
                      }}
                    >
                      {service.description}
                    </Typography>
                    
                    <Box sx={{ mt: 'auto' }}>
                      <Button
                        component={Link}
                        to={service.link}
                        className="service-btn"
                        endIcon={<ChevronRight />}
                        sx={{
                          color: 'white',
                          background: service.gradient,
                          px: 2.5,
                          py: 1,
                          borderRadius: '50px',
                          fontSize: '0.85rem',
                          opacity: 0.85,
                          transform: 'translateY(10px)',
                          transition: 'all 0.4s ease',
                          textTransform: 'none',
                          fontWeight: 600,
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                          '&:hover': {
                            background: service.gradient,
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                          }
                        }}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
      
      {/* View All Services Button */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            component={Link}
            to="/services"
            variant="contained"
            size="large"
            endIcon={<ChevronRight />}
            sx={{
              background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              py: 1.5,
              px: 4,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 8px 25px rgba(82, 109, 254, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #6281FF 0%, #9D75FF 100%)',
                boxShadow: '0 12px 35px rgba(82, 109, 254, 0.4)',
                transform: 'translateY(-5px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            View All Services
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ServicesOverview;