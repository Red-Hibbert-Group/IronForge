import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Navbar from '../components/Navbar';
import DynamicFooter from '../components/home/DynamicFooter';

const Implementation = () => {
  const implementations = [
    {
      title: 'Financial Close & Consolidation',
      description: 'Streamline your financial close process with OneStreams unified platform. Our implementation services help organizations automate consolidations, eliminate manual processes, and ensure accuracy in financial reporting. We specialize in setting up complex consolidation rules, intercompany matching, and journal entry management.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Planning, Budgeting & Forecasting',
      description: 'Transform your planning processes with OneStream extensible platform. We implement robust budgeting and forecasting solutions that integrate operational and financial planning, enabling driver-based planning, rolling forecasts, and what-if scenario analysis.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Financial Data Quality Management',
      description: 'Ensure data accuracy and reliability with OneStreams built-in financial data quality tools. Our implementation includes setting up guided workflows, validation rules, and controls to maintain data integrity throughout the financial process.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Account Reconciliation',
      description: 'Automate and streamline account reconciliations with OneStreams purpose-built solutions. We implement end-to-end reconciliation processes, including automated matching, variance analysis, and approval workflows to reduce manual effort and risk.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Reporting & Analytics',
      description: 'Leverage OneStreams powerful reporting capabilities with our implementation services. We set up comprehensive financial and operational reporting, including dashboard creation, ad-hoc analysis tools, and self-service reporting features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'ESG & Sustainability Reporting',
      description: `Transform your ESG reporting with OneStream's comprehensive platform. Our implementation services include:
      • Environmental metrics tracking (carbon emissions, energy usage, waste management)
      • Social impact measurements (workforce diversity, community engagement, labor practices)
      • Governance reporting (board diversity, ethics, compliance)
      • Automated data collection and validation`,
      image: 'https://images.unsplash.com/photo-1535615615570-3b839f4359be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <>
      <Navbar />
      <Box sx={{ 
        pt: 15,
        pb: 6,
        backgroundColor: 'white',
        borderBottom: '1px solid #eaeaea'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 600,
              color: '#1a1a1a',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            OneStream Implementation Services
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            Comprehensive EPM and CPM Solutions for Modern Finance
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container>
          <Box sx={{ mb: 8 }}>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                textAlign: 'center', 
                maxWidth: '800px', 
                margin: '0 auto',
                fontSize: '1.1rem',
                lineHeight: 1.8
              }}
            >
              Our certified OneStream experts deliver comprehensive implementation services for both Enterprise Performance Management (EPM) and Corporate Performance Management (CPM) solutions. We follow OneStream's proven methodology to ensure successful deployments that meet your specific business requirements.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {implementations.map((implementation, index) => (
              <Grid item xs={12} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={implementation.image}
                    alt={implementation.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '1.5rem',
                        mb: 2
                      }}
                    >
                      {implementation.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {implementation.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              data-aos="fade-up"
              sx={{ 
                fontWeight: 600,
                mb: 4
              }}
            >
              Why Choose Our Implementation Services?
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              data-aos="fade-up"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 2
              }}
            >
              • Certified OneStream implementation experts<br />
              • Proven methodology and best practices<br />
              • Tailored solutions for your specific industry needs<br />
              • End-to-end project management and support<br />
              • Training and knowledge transfer included<br />
              • Post-implementation support and optimization
            </Typography>
          </Box>
        </Container>
      </Box>
      <DynamicFooter />
    </>
  );
};

export default Implementation; 