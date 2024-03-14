import Login from '../../Components/auth/Login'
import React from 'react'
import { Container } from '@mui/material';

function page() {
    return (
        <Container maxWidth="xl" disableGutters>
    
        <Login/>
        </Container>
    
      )
}

export default page