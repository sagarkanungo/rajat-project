import { Container } from '@mui/material';
import AboutSection from '../../Components/about/About'

export default function page() {


  return (
 <Container maxWidth='xl'
 disableGutters
    sx={{ overflowX: 'hidden' }}>
 <AboutSection/>
 </Container>
  );
}
