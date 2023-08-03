
import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
              Vintage Dispatch
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/" style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}>
              Home
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}>
              About
            </Link>
            <Link to="/pricing" style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}>
              Pricing
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}>
              +254798765432
            </Link>
            <Link to="/service" style={{ textDecoration: 'none', color: '#fff', margin: '0 10px' }}>
              Services
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
