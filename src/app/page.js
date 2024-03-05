import { Container } from '@mui/material';
import Home from '../Components/home/Home'

export default function page() {


  return (
 <Container maxWidth='xl'
 disableGutters
    sx={{ overflowX: 'hidden' }}>
 <Home/>
 </Container>
  );
}
