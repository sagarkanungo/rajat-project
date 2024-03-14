import React from 'react'
import Signup from '../../Components/auth/SignUp'
import { Container } from '@mui/material';

function page() {
  return (
    <Container maxWidth="xl" disableGutters>
    <Signup/>
    </Container>

  )
}

export default page