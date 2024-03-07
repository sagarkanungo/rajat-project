import { Container } from '@mui/material';
import Contact from '../../Components/contact/Contact';

export default function page() {


  return (
 <Container maxWidth='xl'
 disableGutters
    sx={{ overflowX: 'hidden' }}>
 <Contact/>
 </Container>
  );
}
