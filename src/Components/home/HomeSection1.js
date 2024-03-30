"use client";

import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { ContextData } from "../context/ContextProvider";

export default function HomeSection1() {
  const { isSticky } = useContext(ContextData);
  const router = useRouter();

  return (
    <>
      <Box sx={{ paddingTop: "50px" }}>
        <Box
          sx={{
            position: "relative",
            transition: "transform 0.3s ease", // Smooth transition for the transform property
            transform: isSticky ? "translateY(-50px)" : "translateY(0)",
          }}
        >
          <img
            src="HomeiMAGE.jpg"
            style={{ width: "100%", height: "auto", filter: "brightness(50%)" }}
            loading="lazy"
          />
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
              transition: "left 0.5s ease", // Smooth transition for left property
              left: isSticky ? "calc(50% - 200px)" : "50%", // Adjust the value b
            }}
          >
            <Box sx={{ paddingTop: "80px" }}>
              <Typography variant="h3" sx={{ color: "#FFF", fontSize: "6vw" }}>
                Welcome to TaxSmart
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#FFF", fontSize: "3vw" }}
              >
                Streamline Your Taxes and GST with Our Web Application
              </Typography>
            </Box>
            <Grid container justifyContent="center" spacing={2}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  maxWidth: { xs: "50%", sm: "40%", lg: "20%" },
                  textAlign: "center",
                }}
              >
                <Button
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "20px",
                      md: "24px",
                      lg: "20px",
                    },
                    padding: { xs: "12px 16px", md: "24px 32px" },
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
