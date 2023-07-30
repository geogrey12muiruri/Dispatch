
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Review = ({ review, clientName, clientLocation }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
      }}
    >
      <Typography variant="body1" sx={{ mb: 3 }}>
        {review}
      </Typography>
      <Typography variant="subtitle1" fontWeight="bold">
        - {clientName}
      </Typography>
      <div style={{ height: '300px', marginTop: '20px' }}>
        <iframe
          title="Client Location"
          width="150%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.790495299438!2d36.782159473848196!3d-1.30055879868709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109dcb26a413%3A0xca1c503989df391d!2sNgong%20Lane%20Plaza!5e0!3m2!1sen!2ske!4v1690687100671!5m2!1sen!2ske" 
           allowfullscreen="" 
           loading="lazy" 
        ></iframe>
        
           
        
           
      </div>
    </Box>
  );
};

export default Review;
