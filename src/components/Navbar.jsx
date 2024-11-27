import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navigationItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    {
      label: 'SERVICES',
      path: '/services',
      dropdownItems: [
        { label: 'Financial Close & Consolidation', path: '/services#financial-close-consolidation' },
        { label: 'Planning & Budgeting', path: '/services#planning-budgeting' },
        { label: 'Account Reconciliation', path: '/services#account-reconciliation' },
        { label: 'Enterprise Cost Management', path: '/services#enterprise-cost-management' },
        { label: 'Tax Reporting', path: '/services#tax-reporting' },
        { label: 'Narrative Reporting', path: '/services#narrative-reporting' }
      ],
    },
    { label: 'IMPLEMENTATION', path: '/implementation' },
    { label: 'RESOURCES', path: '/resources' },
    { label: 'CONTACT', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={isScrolled ? 2 : 0}
      sx={{
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.95)'
          : 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            height: isScrolled ? '70px' : '80px',
            transition: 'all 0.3s ease-in-out',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: { xs: '1.5rem', md: '2.4rem' },
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.2em 0.4em',
              background: 'transparent',
              borderRadius: '4px',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: 'perspective(1000px)',
              transformStyle: 'preserve-3d',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: isScrolled 
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                borderRadius: '4px',
                transform: 'translateZ(-10px)',
              },
              '&:hover': {
                transform: 'perspective(1000px) translateY(-5px)',
                '& .iron, & .edge': {
                  transform: 'translateZ(20px)',
                  textShadow: isScrolled
                    ? '0 15px 25px rgba(0,0,0,0.3)'
                    : '0 15px 25px rgba(255,255,255,0.3)',
                },
                '& .divider': {
                  height: '80%',
                  opacity: 1,
                  transform: 'translateZ(25px)',
                }
              },

              '& .divider': {
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) translateZ(15px)',
                width: '2px',
                height: '0%',
                background: isScrolled
                  ? 'linear-gradient(to bottom, transparent, #1B365D, transparent)'
                  : 'linear-gradient(to bottom, transparent, #fff, transparent)',
                opacity: 0,
                transition: 'all 0.4s ease-in-out',
              },

              '& span.iron': {
                position: 'relative',
                fontWeight: 900,
                padding: '0 0.3em',
                background: isScrolled
                  ? 'linear-gradient(135deg, #1B365D 0%, #2C3E50 50%, #1B365D 100%)'
                  : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                transition: 'all 0.4s ease-in-out',
                transform: 'translateZ(10px)',
                textShadow: isScrolled
                  ? '0 5px 15px rgba(0,0,0,0.2)'
                  : '0 5px 15px rgba(255,255,255,0.2)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '100%',
                  height: '2px',
                  background: isScrolled
                    ? 'linear-gradient(90deg, transparent, #1B365D, transparent)'
                    : 'linear-gradient(90deg, transparent, #ffffff, transparent)',
                  opacity: 0.5,
                }
              },

              '& span.edge': {
                position: 'relative',
                fontWeight: 800,
                padding: '0 0.3em',
                background: isScrolled
                  ? 'linear-gradient(135deg, #2C3E50 0%, #1B365D 50%, #2C3E50 100%)'
                  : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                transition: 'all 0.4s ease-in-out',
                transform: 'translateZ(10px)',
                textShadow: isScrolled
                  ? '0 5px 15px rgba(0,0,0,0.2)'
                  : '0 5px 15px rgba(255,255,255,0.2)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '-4px',
                  left: '0',
                  width: '100%',
                  height: '2px',
                  background: isScrolled
                    ? 'linear-gradient(90deg, transparent, #2C3E50, transparent)'
                    : 'linear-gradient(90deg, transparent, #ffffff, transparent)',
                  opacity: 0.5,
                }
              }
            }}
          >
            <span className="iron">Iron</span>
            <div className="divider" />
            <span className="edge">Forge</span>
          </Typography>

          {isMobile ? (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ 
                color: isScrolled ? 'text.primary' : 'white'
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navigationItems.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    position: 'relative',
                    '&:hover .MuiBox-root': {
                      opacity: 1,
                      visibility: 'visible',
                      transform: 'translateY(0)',
                    },
                  }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    endIcon={item.dropdownItems && <KeyboardArrowDownIcon />}
                    sx={{
                      color: isScrolled ? 'text.primary' : 'white',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      letterSpacing: '0.5px',
                      padding: '8px 16px',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '6px',
                        left: '50%',
                        transform: location.pathname === item.path 
                          ? 'translateX(-50%)' 
                          : 'translateX(-50%) scaleX(0)',
                        height: '2px',
                        width: '20px',
                        backgroundColor: isScrolled ? 'primary.main' : 'white',
                        transition: 'transform 0.3s ease-in-out'
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '&::after': {
                          transform: 'translateX(-50%) scaleX(1)'
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                  {item.dropdownItems && (
                    <Box
                      className="MuiBox-root"
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        transform: 'translateY(10px)',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        padding: '8px 0',
                        opacity: 0,
                        visibility: 'hidden',
                        transition: 'all 0.3s ease-in-out',
                        zIndex: 1000,
                        minWidth: '200px',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '-6px',
                          left: '20%',
                          transform: 'translateX(-50%) rotate(45deg)',
                          width: '12px',
                          height: '12px',
                          backgroundColor: 'white',
                        }
                      }}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Button
                          key={dropdownItem.label}
                          component={Link}
                          to={dropdownItem.path}
                          fullWidth
                          sx={{
                            color: 'text.primary',
                            padding: '8px 24px',
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                            '&:hover': {
                              backgroundColor: 'rgba(0,0,0,0.04)',
                              color: 'primary.main'
                            }
                          }}
                        >
                          {dropdownItem.label}
                        </Button>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  backgroundColor: isScrolled ? 'primary.main' : 'white',
                  color: isScrolled ? 'white' : 'primary.main',
                  '&:hover': {
                    backgroundColor: isScrolled ? 'primary.dark' : 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          )}

          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': { 
                width: '100%', 
                maxWidth: '300px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)'
              }
            }}
          >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navigationItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <Button
                    fullWidth
                    component={Link}
                    to={item.path}
                    onClick={handleDrawerToggle}
                    sx={{
                      py: 2,
                      px: 4,
                      justifyContent: 'flex-start',
                      color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                      borderLeft: location.pathname === item.path ? '3px solid' : 'none',
                      borderColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        color: 'primary.main'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                  {item.dropdownItems && (
                    <List sx={{ pl: 4 }}>
                      {item.dropdownItems.map((dropdownItem) => (
                        <ListItem key={dropdownItem.label} disablePadding>
                          <Button
                            fullWidth
                            component={Link}
                            to={dropdownItem.path}
                            onClick={handleDrawerToggle}
                            sx={{
                              py: 1.5,
                              px: 4,
                              justifyContent: 'flex-start',
                              color: 'text.secondary',
                              '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                color: 'primary.main'
                              }
                            }}
                          >
                            {dropdownItem.label}
                          </Button>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </ListItem>
              ))}
              <ListItem sx={{ mt: 2, px: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  component={Link}
                  to="/contact"
                  onClick={handleDrawerToggle}
                  sx={{
                    py: 1.5,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  Get Started
                </Button>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

