import { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme, Collapse, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navRef = useRef(null);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Services',
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
    { label: 'Implementation', path: '/implementation' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile drawer when route changes
    setMobileOpen(false);
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  // Logo variants for animation
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + custom * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={isScrolled ? 4 : 0}
      component={motion.div}
      initial="hidden"
      animate="visible"
      sx={{
        background: isScrolled 
          ? 'rgba(13, 13, 29, 0.85)'
          : 'linear-gradient(180deg, rgba(13, 13, 29, 0.9) 0%, rgba(13, 13, 29, 0) 100%)',
        backdropFilter: isScrolled ? 'blur(15px)' : 'blur(8px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          ref={navRef}
          sx={{ 
            height: isScrolled ? '70px' : '80px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            style={{ display: 'flex' }}
          >
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: { xs: '1.5rem', md: '2rem' },
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.2em 0.4em',
                background: 'transparent',
                borderRadius: '8px',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transform: 'perspective(1000px)',
                transformStyle: 'preserve-3d',
                '&:hover': {
                  transform: 'perspective(1000px) scale(1.05)',
                  '& .iron, & .forge': {
                    letterSpacing: '1px',
                  },
                  '& .iron': {
                    background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transform: 'translateZ(15px)',
                  },
                  '& .forge': {
                    background: 'linear-gradient(135deg, #8E5FFE 0%, #526DFE 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transform: 'translateZ(15px)',
                  },
                  '& .logo-icon': {
                    transform: 'translateZ(20px) rotateY(360deg)',
                    opacity: 1,
                  }
                },
              }}
            >
              {/* Logo Icon */}
              <Box 
                className="logo-icon"
                sx={{
                  position: 'relative',
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 15px rgba(82, 109, 254, 0.25)',
                  transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: 'translateZ(10px)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    background: 'white',
                    borderRadius: '2px',
                    transformOrigin: 'center',
                    transform: 'rotate(45deg)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '18px',
                    height: '3px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '1px',
                    top: '18px',
                  }
                }}
              />
              
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '-4px' }}>
                <span 
                  className="iron"
                  style={{
                    position: 'relative',
                    fontWeight: 900,
                    color: 'white',
                    letterSpacing: '0px',
                    transition: 'all 0.4s ease',
                    transform: 'translateZ(5px)',
                    lineHeight: '1',
                  }}
                >
                  IRON
                </span>
                <span 
                  className="forge"
                  style={{
                    position: 'relative',
                    fontWeight: 800,
                    color: 'white',
                    letterSpacing: '0px',
                    fontSize: '85%',
                    opacity: 0.95,
                    transition: 'all 0.4s ease',
                    transform: 'translateZ(5px)',
                    lineHeight: '1',
                    marginTop: '-2px',
                  }}
                >
                  FORGE
                </span>
              </Box>
            </Typography>
          </motion.div>

          {/* Mobile Menu Toggle */}
          {isMobile ? (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            /* Desktop Navigation */
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  custom={index}
                  variants={navItemVariants}
                  style={{
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      '&:hover .dropdown-menu': {
                        opacity: 1,
                        visibility: 'visible',
                        transform: 'translateY(0)',
                      },
                    }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      endIcon={item.dropdownItems && <KeyboardArrowDownIcon sx={{ fontSize: '1rem', transition: 'transform 0.3s ease' }} />}
                      sx={{
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                        padding: '8px 16px',
                        position: 'relative',
                        textTransform: 'none',
                        transition: 'color 0.3s ease',
                        overflow: 'hidden',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '8px',
                          left: '16px',
                          right: '16px',
                          height: '2px',
                          backgroundColor: 'primary.main',
                          background: 'linear-gradient(90deg, #526DFE, #8E5FFE)',
                          transformOrigin: 'right',
                          transform: location.pathname === item.path 
                            ? 'scaleX(1)' 
                            : 'scaleX(0)',
                          transition: 'transform 0.3s ease',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '&::after': {
                            transformOrigin: 'left',
                            transform: 'scaleX(1)'
                          }
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                    
                    {/* Dropdown Menu */}
                    {item.dropdownItems && (
                      <Box
                        className="dropdown-menu"
                        sx={{
                          position: 'absolute',
                          top: '100%',
                          left: '0',
                          transform: 'translateY(10px)',
                          minWidth: '260px',
                          background: 'rgba(13, 13, 29, 0.95)',
                          backdropFilter: 'blur(15px)',
                          borderRadius: '12px',
                          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
                          padding: '8px',
                          opacity: 0,
                          visibility: 'hidden',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          zIndex: 10,
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '-6px',
                            left: '30px',
                            transform: 'rotate(45deg)',
                            width: '12px',
                            height: '12px',
                            background: 'rgba(13, 13, 29, 0.95)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
                          }
                        }}
                      >
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <Button
                            key={idx}
                            component={Link}
                            to={dropdownItem.path}
                            fullWidth
                            sx={{
                              justifyContent: 'flex-start',
                              color: 'white',
                              fontSize: '0.85rem',
                              textAlign: 'left',
                              padding: '10px 16px',
                              borderRadius: '8px',
                              textTransform: 'none',
                              transition: 'all 0.2s ease',
                              opacity: 0.85,
                              '&:hover': {
                                background: 'rgba(255, 255, 255, 0.1)',
                                paddingLeft: '20px',
                                opacity: 1,
                              }
                            }}
                          >
                            {dropdownItem.label}
                          </Button>
                        ))}
                      </Box>
                    )}
                  </Box>
                </motion.div>
              ))}
              
              {/* Call to Action Button */}
              <motion.div
                variants={navItemVariants}
                custom={navigationItems.length}
              >
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                    color: 'white',
                    borderRadius: '50px',
                    padding: '8px 20px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    ml: 2,
                    boxShadow: '0 8px 20px rgba(82, 109, 254, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 10px 25px rgba(82, 109, 254, 0.3)',
                      transform: 'translateY(-3px)',
                      background: 'linear-gradient(135deg, #6281FF 0%, #9D75FF 100%)',
                    }
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '85%',
            maxWidth: '360px',
            background: 'rgba(13, 13, 29, 0.97)',
            backdropFilter: 'blur(15px)',
            border: 'none',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
            padding: '20px 0',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 2 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            onClick={handleDrawerToggle}
            sx={{
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: '1.5rem',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box 
              sx={{
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 15px rgba(82, 109, 254, 0.25)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  background: 'white',
                  borderRadius: '2px',
                  transformOrigin: 'center',
                  transform: 'rotate(45deg)',
                }
              }}
            />
            <span style={{ background: 'linear-gradient(135deg, #FFFFFF 30%, #D1D5DB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              IRONFORGE
            </span>
          </Typography>
          
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List sx={{ mt: 2 }}>
          {navigationItems.map((item, index) => (
            <Box key={index}>
              <ListItem 
                disablePadding
                sx={{ display: 'block', my: 1 }}
              >
                <Button
                  fullWidth
                  component={item.dropdownItems ? 'button' : Link}
                  to={!item.dropdownItems ? item.path : undefined}
                  onClick={item.dropdownItems ? () => handleSubmenuToggle(index) : handleDrawerToggle}
                  endIcon={item.dropdownItems && (openSubmenu === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)}
                  sx={{
                    justifyContent: 'flex-start',
                    py: 1.5,
                    px: 3,
                    width: '100%',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderRadius: 0,
                    position: 'relative',
                    textTransform: 'none',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '15px',
                      left: '20px',
                      width: '20px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #526DFE, #8E5FFE)',
                      transform: location.pathname === item.path 
                        ? 'scaleX(1)' 
                        : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '&::after': {
                        transform: 'scaleX(1)',
                      }
                    }
                  }}
                >
                  {item.label}
                </Button>
                
                {item.dropdownItems && (
                  <Collapse in={openSubmenu === index} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <ListItem key={idx} disablePadding>
                          <Button
                            fullWidth
                            component={Link}
                            to={dropdownItem.path}
                            onClick={handleDrawerToggle}
                            sx={{
                              pl: 5,
                              py: 1.2,
                              justifyContent: 'flex-start',
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '0.9rem',
                              textAlign: 'left',
                              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: 0,
                              ml: 3,
                              textTransform: 'none',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'white',
                                borderLeft: '1px solid rgba(82, 109, 254, 0.5)',
                              }
                            }}
                          >
                            {dropdownItem.label}
                          </Button>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </ListItem>
            </Box>
          ))}
          
          {/* Mobile CTA Button */}
          <ListItem sx={{ mt: 3, px: 3 }}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              fullWidth
              onClick={handleDrawerToggle}
              sx={{
                background: 'linear-gradient(135deg, #526DFE 0%, #8E5FFE 100%)',
                color: 'white',
                borderRadius: '50px',
                py: 1.2,
                fontSize: '0.95rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 8px 20px rgba(82, 109, 254, 0.2)',
                '&:hover': {
                  boxShadow: '0 10px 30px rgba(82, 109, 254, 0.3)',
                  background: 'linear-gradient(135deg, #6281FF 0%, #9D75FF 100%)',
                }
              }}
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

