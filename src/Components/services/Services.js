import React from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import serviceDetail from "./ServiceDetail";

function Services() {
  return (
    <Box style={{ marginTop: 80, marginLeft: 4 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 200,
          textDecoration: "underLine",
        }}
      >
        Our Services
      </Typography>
      {serviceDetail.map((item, index) => (
        <Box key={index} style={{  padding: "60px 24px 0px",textAlign:'center' }}>
          <Typography variant="h4" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {item.details}
          </Typography>
          <Box style={{ display: "flex", gap: "10px", marginTop: "10px",justifyContent:'center' }}>
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
                    width: "20%",
                    cursor: "pointer",
                    backgroundColor: "azure",
                    transition: "transform 0.2s",
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", // Increases shadow on hover
                      borderColor: "#007bff",
                    },
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    {pkg.name}
                  </Typography>
                  <Typography style={{ fontSize: "1.2em", marginBottom: 10 }}>
                    {pkg.duration}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {pkg.price} /-
                  </Typography>
                  <ul style={{ textAlign: "left", paddingLeft: 0 }}>
                    {pkg.features &&
                      Array.isArray(pkg.features) &&
                      pkg.features.map((feature, j) => (
                        <li key={j}>{feature}</li>
                      ))}
                  </ul>

                
                </Box>
              ))}
          </Box>
          <Divider
           sx={{
            width: "80%",
            margin: "24px auto", // Centering the divider and applying equal margin
            background: "#E8E9E8",
          }}
          />
        </Box>
        
      ))}
    </Box>
  );
}

export default Services;
