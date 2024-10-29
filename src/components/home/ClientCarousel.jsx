import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
  '/client1.png',
  '/client2.png',
  '/client3.png',
  '/client4.png',
  '/client5.png',
];

const ClientCarousel = () => {
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 6 }}>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                '& img': {
                  width: '100%',
                  height: 'auto',
                  filter: 'grayscale(100%)',
                  opacity: 0.7,
                  transition: 'all 0.4s ease-in-out',
                  transform: 'scale(0.95)',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    opacity: 1,
                    transform: 'scale(1)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  },
                },
              }}
            >
              <img src={client} alt={`Client ${index + 1}`} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default ClientCarousel; 