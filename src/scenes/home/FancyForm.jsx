import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const FancyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission or validation logic here.
    console.log(formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Set the height to full viewport height
        width: '100%', // Set the width to full viewport width
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <h1>Fancy Form</h1>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Box sx={{ mb: 2 }}>
          <TextField
            type="text"
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            type="email"
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextareaAutosize
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            variant="outlined"
            fullWidth
            required
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FancyForm;
