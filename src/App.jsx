import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './global/Navbar';
import Home from './scenes/home/Home';
import About from './scenes/about/About';
import Contact from './scenes/contact/Contact';
import Pricing from './scenes/pricing/Pricing';
import Service from './scenes/servicefolder/Service';
import './index.css';

// Define the services data
const services = [
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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ marginTop: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* Pass the services data as a prop to the Service component */}
          <Route path="/service" element={<Service services={services} />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
