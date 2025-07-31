import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Implementation from './pages/Implementation';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import { theme } from './theme/theme';

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
