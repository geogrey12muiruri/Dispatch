
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Pricing = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 20 }} >
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Our Flexible Pricing Plans
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Basic Plan
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  $29.99/month
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Premium Plan
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  $49.99/month
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Enterprise Plan
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  $99.99/month
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h5" gutterBottom>
            Special Discount
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Get 20% off for the first three months on any plan! Use code: DISCOUNT20
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
