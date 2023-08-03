
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Import the image assets for each service


const Service = ({ services }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', backgroundColor: '#f5f5f5', p: 3 }}>
      {services.map((service, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2, backgroundColor: '#fff', p: 2, borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={service.imageSrc} alt={service.serviceName} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
              {service.serviceName}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
              {service.description}
            </Typography>
          </Box>
          <Button variant="contained" color="primary" sx={{ mt: 2, backgroundColor: '#ff5722', color: '#fff' }}>
            More Info
          </Button>
        </Box>
      ))}
    </Box>
  );
};

Service.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      serviceName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Service;