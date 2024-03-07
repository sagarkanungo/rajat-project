import React from 'react'
import { Grid } from '@mui/material';

function SectionWrapper({ justify, backgroundColour, children }) {
    return (
        <Grid
          container
          justifyContent={justify}
          sx={{
            padding: {
              xs: '64px 16px',
              sm: '120px 48px',
              md: '120px 136px',
            },
            background: backgroundColour,
            textAlign: { xs: 'center', sm: 'left' },
          }}>
          {children}
        </Grid>
      );
}

export default SectionWrapper