
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Animates only once when it comes into view
    threshold: 0.2, // Determines the percentage of the element's visibility in the viewport to trigger the animation
  });

  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <div ref={inViewRef}>
          <Slide direction="left" in={inView} timeout={1000}>
            <img src="src/assets/kendall-henderson-Pj6TgpS_Vt4-unsplash.jpg" alt="About Us" style={{ width: '100%', borderRadius: '8px' }} />
          </Slide>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1">
            Vintage Dispatch is a leading dispatch service provider based in Kenya. With a strong commitment to excellence and customer satisfaction, we specialize in providing efficient and reliable dispatch solutions to businesses of all sizes. Our dedicated team of professionals is passionate about delivering exceptional service and ensuring that your dispatch needs are met with precision and reliability. Whether you require same-day delivery or scheduled dispatch services, Vintage Dispatch is here to streamline your operations and help your business thrive.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
