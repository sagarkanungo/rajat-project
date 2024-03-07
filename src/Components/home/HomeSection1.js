"use client";

import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";




export default function HomeSection1() {
 
  return (
    <>
     <Box sx={{ paddingTop: "50px" }}>
        <Box sx={{ position: "relative" }}>
          <img src="HomeiMAGE.jpg" alt="home" style={{ width: "100%", height: "500px", filter: "brightness(50%)" }} />
          <Box
            style={{
              position: "absolute",
              top: "150px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#fff",
              fontSize: "24px",
              width: "80%",
            }}
          >
          <Box sx={{paddingTop:'80px'}}>
          <Typography variant="h3" sx={{ color: "#FFF", fontSize: "6vw" }}>
              Welcome to TaxSmart
            </Typography>
            <Typography variant="body1" style={{color: "#FFF", fontSize: "3vw" }}>
            Streamline Your Taxes and GST with Our Web Application 
            </Typography>
          </Box>
            <Grid container justifyContent="center" spacing={2}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ maxWidth: { xs: "50%", sm: "40%",lg:'20%' }, textAlign: "center" }}
                mt='20px'
              >
                <Button
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "20px",
                      md: "24px",
                      lg: "20px",
                    },
                    padding: { xs: '12px 16px', md: '24px 32px', }
                  }}
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>


    </>
  );
}
