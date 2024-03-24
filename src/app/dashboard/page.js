import React from 'react'
import { Container } from '@mui/material';
import Dashboard from '../../Components/dashboard/Dashboard';

function page() {
  return (
    <Container maxWidth="xl" disableGutters>
    <Dashboard/>
    </Container>

  )
}

export default page