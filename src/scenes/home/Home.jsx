
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Service from '../services/Service'; // Assuming the correct path to the Service component
import About from '../about/About'; // Assuming the correct path to the About component
import Review from '../reviews/Review'; // Assuming the correct path to the Review component
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import FancyForm from './FancyForm'; // Assuming the correct path to the FancyForm component

const serviceData = [
  {
    imageSrc: 'public/images/christian-chen-l44HV2wprrY-unsplash.jpg',
    serviceName: 'On-Demand Dispatch',
    description: 'Get your packages picked up and delivered on-demand with our quick dispatch service.',
  },
  {
    imageSrc: 'src/assets/riley-crawford-99HLgU4IHLY-unsplash.jpg',
    serviceName: 'Same-Day Deliveries',
    description: 'Experience the convenience of same-day deliveries for your urgent packages.',
  },
  {
    imageSrc: 'src/assets/frank-mckenna-tjX_sniNzgQ-unsplash.jpg',
    serviceName: 'Express Courier Service',
    description: 'Our express courier service ensures fast and reliable delivery for your important shipments.',
  },
];

const Home = () => {

  const [open, setOpen] = useState(false); // State to control the dialog open/close

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    
    <Box sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Streamline your deliveries today
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Trust Vintage Dispatch to handle all your dispatch needs with quick and efficient delivery services.
      </Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }} onClick={handleOpenDialog}>
        Get Started
      </Button>
      <Typography variant="h6" sx={{ mt: 4 }}>
        We offer the following services:
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
        <Service services={serviceData} />
      </Box>
      <Box>
        <About />
      </Box>
      <Box>
        <Review review="Vintage Dispatch has been a game-changer for our business. Their dispatch services are efficient and reliable, and their team is always responsive to our needs. We highly recommend them!"
          clientName="John Doe" 
        />
          
          

           
      </Box>
      
      <Dialog open={open} onClose={handleCloseDialog}>
        <FancyForm /> {/* Replace FancyForm with the actual content of your form */}
      </Dialog>
    </Box>
  );
};

export default Home;
