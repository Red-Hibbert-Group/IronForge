import { Box, Container, Typography, Card, CardContent, Icon } from '@mui/material';
import { 
  CloudQueue, 
  Security, 
  Speed, 
  Psychology, 
  Assessment, 
  Support,
  BusinessCenter,
  Transform,
  School
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Oracle EPM Implementation',
      description: 'End-to-end implementation of Oracle EPM solutions with expertise in Financials, SCM, PLM, HCM, and CX.',
      icon: CloudQueue,
      gradient: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)'
    },
    {
      title: 'Business Transformation',
      description: 'Complete digital transformation services including process optimization and change management.',
      icon: Transform,
      gradient: 'linear-gradient(135deg, #0061ff 0%, #60efff 100%)'
    },
    {
      title: 'Consulting & Advisory',
      description: 'Strategic alignment, KPI definition, and roadmap planning for your Oracle implementations.',
      icon: BusinessCenter,
      gradient: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration services from on-premise to Oracle Cloud Infrastructure with minimal disruption.',
      icon: Speed,
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    {
      title: 'Support & Training',
      description: '24/7 incident resolution, root cause analysis, and comprehensive training via Learning Management Systems.',
      icon: Support,
      gradient: 'linear-gradient(135deg, #F6D365 0%, #FDA085 100%)'
    },
    {
      title: 'Performance Management',
      description: 'Advanced monitoring and optimization of business performance across finance and operations.',
      icon: Assessment,
      gradient: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)'
    },
    {
      title: 'Security & Compliance',
      description: 'Ensure your Oracle implementations are secure and compliant with industry standards.',
      icon: Security,
      gradient: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)'
    },
    {
      title: 'Training Academy',
      description: 'Comprehensive training programs through Trinamix Academy for continuous learning and development.',
      icon: School,
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF000F 100%)'
    },
    {
      title: 'Change Management',
      description: 'Strategic change management services to ensure smooth adoption of new systems and processes.',
      icon: Psychology,
      gradient: 'linear-gradient(135deg, #36D1DC 0%, #5B86E5 100%)'
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
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <Box 
      sx={{ 
        py: 12,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
              },
              gap: 4,
              position: 'relative',
              zIndex: 1
            }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card
                  sx={{
                    height: '100%',
                    background: service.gradient,
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateX(-100%) rotate(45deg)',
                      transition: 'transform 0.6s',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '&::before': {
                        transform: 'translateX(100%) rotate(45deg)',
                      },
                      '& .service-icon-overview': {
                        transform: 'rotateY(360deg)',
                      }
                    },
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  <CardContent
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      color: 'white',
                      p: 4,
                    }}
                  >
                    <Icon
                      component={service.icon}
                      className="service-icon-overview"
                      sx={{
                        fontSize: 60,
                        mb: 3,
                        transition: 'transform 0.6s ease',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                      }}
                    />
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.7,
                        opacity: 0.9,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesOverview;