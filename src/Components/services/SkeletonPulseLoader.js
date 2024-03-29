import React from 'react';
import { Box, Typography, Divider, Skeleton } from '@mui/material';
import serviceDetail from '../services/ServiceDetail';

const SkeletonPulseLoader = () => {
  return (
    <Box sx={{ marginTop: { xs: 8, md: 8 }, marginLeft: { xs: 2, md: 4 } }}>
    <Typography
      variant="h3"
      sx={{
        textAlign: "center",
        fontWeight: 200,
        textDecoration: "underLine",
      }}
    >
     <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    </Typography>
    {serviceDetail.map((item, index) => (
      <Box key={index} sx={{ padding: { xs: "20px 12px 0", md: "60px 24px 0" }, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Typography>
        <Typography variant="body1" gutterBottom>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            marginTop: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
            
          }}
        //   onClick={handelClick}
        >
          {item.packages &&
            item.packages.map((pkg, i) => (
              <Box
                key={i}
                sx={{
                  position: "relative",
                  border: "1px solid #ccc",
                  padding: 2,
                  borderRadius: 8,
                  textAlign: "center",
                  width: { xs: "100%", sm: "45%", md: "20%" },
                  cursor: "pointer",
                  backgroundColor: "azure",
                  transition: "transform 0.2s",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Typography variant="h5" gutterBottom>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Typography>
                <Typography style={{ fontSize: "1.2em", marginBottom: 10 }}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Typography>
                <Typography variant="body1" gutterBottom>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Typography>
                <ul style={{ textAlign: "left", paddingLeft: 0 }}>
                  {pkg.features &&
                    Array.isArray(pkg.features) &&
                    pkg.features.map((feature, j) => (
                      <li key={j}> <Skeleton variant="text" sx={{ fontSize: '1rem' }} /></li>
                    ))}
                </ul>
              </Box>
            ))}
        </Box>
        <Divider
          sx={{
            width: { xs: "100%", sm: "80%" },
            margin: "24px auto", // Centering the divider and applying equal margin
            background: "#E8E9E8",
          }}
        />
      </Box>
    ))}
  </Box>
  );
};

export default SkeletonPulseLoader;
