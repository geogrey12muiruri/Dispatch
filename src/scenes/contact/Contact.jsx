import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1" gutterBottom>
              Address: 123 Main Street, City, State, Zip Code
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: info@dispatchcompany.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Contact Form
            </Typography>
            <form>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                required
              />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
