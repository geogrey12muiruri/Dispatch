import React from 'react';
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
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
            clientLocation
          )}&key=AIzaSyBYiVouwbVCplF9R70xGXuBderQDtgG4cg`}
          allowFullScreen
        ></iframe>
      </div>
    </Box>
  );
};

export default Review;
