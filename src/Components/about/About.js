"use client";
import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Footer from "../footer/Footer";
import { useContext, useEffect } from "react";
import { ContextData } from "../context/ContextProvider";

const AboutSection = () => {
  const { isSticky,isMounted } = useContext(ContextData);
  
  return (
    <>
      <Box sx={{ paddingTop: "50px" }}>
        <Box
          sx={{
            position: "relative",
          
          }}
        >
          <img
            src="about.jpg"
            alt="about"
            loading="lazy"
            style={{ width: "100%", height: "auto", filter: "brightness(50%)" }}
          ></img>
          <Box
            sx={{
              textAlign: "center",
              textDecoration: "underLine",
             
            }}
          >
            <Typography variant="h4" padding="8px">
              About Us
            </Typography>
          </Box>
          <Box sx={{ padding: "12px 40px",
       
       
        }}>
            <Box sx={{ justifyContent: "flex-start", padding: "24px" }}>
              <Typography variant="h4">Our History</Typography>
              <Typography variant="caption">
                At Taxsmart Company, our journey began in a small garage, where
                our founders, Jane and John Smith, shared a passion for creating
                innovative solutions to everyday problems. Fueled by their
                entrepreneurial spirit, they set out to revolutionize the way
                people interact with technology.
              </Typography>
            </Box>
            <Box sx={{ justifyContent: "flex-start", padding: "24px" }}>
              <Typography variant="h4">Our Mission</Typography>
              <Typography variant="caption">
                Our mission is to develop and deliver intuitive, user-centric
                solutions that address the evolving needs of our customers. We
                are committed to fostering innovation, upholding the highest
                standards of integrity, and making a positive impact on society
                through our products and services.
              </Typography>
            </Box>
            <Box sx={{ justifyContent: "flex-start", padding: "24px" }}>
              <Typography variant="h4">Our Vission</Typography>
              <Typography variant="caption">
                Our vision at Taxsmart Company is to empower individuals and
                businesses worldwide through cutting-edge technology that
                enhances productivity, connectivity, and overall quality of
                life. We envision a future where technology seamlessly
                integrates into every aspect of daily life, making tasks
                simpler, communication smoother, and opportunities limitless.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AboutSection;
