import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Footer from "../footer/Footer";

const AboutSection = () => {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <img src="about.jpg" style={{ width: "100%", height: "500px", filter: "brightness(50%)",paddingTop:'60px' }} ></img>
        <Box sx={{ textAlign: "center", textDecoration: "underLine" }}>
          <Typography variant="h3">About Us</Typography>
        </Box>
        <Box sx={{ padding: "12px 40px" }}>
          <Box sx={{ justifyContent: "flex-start", padding: "24px" }}>
            <Typography variant="h5">Our History</Typography>
            <Typography variant="caption">
              At XYZ Company, our journey began in a small garage, where our
              founders, Jane and John Smith, shared a passion for creating
              innovative solutions to everyday problems. Fueled by their
              entrepreneurial spirit, they set out to revolutionize the way
              people interact with technology.
            </Typography>
          </Box>
          <Box sx={{ justifyContent: "flex-start", padding: "24px" }}>
            <Typography variant="h5">Our Mission</Typography>
            <Typography variant="caption">
              Our mission is to develop and deliver intuitive, user-centric
              solutions that address the evolving needs of our customers. We are
              committed to fostering innovation, upholding the highest standards
              of integrity, and making a positive impact on society through our
              products and services.
            </Typography>
          </Box>
          <Box sx={{ justifyContent: "flex-start", padding: "24px" }}>
            <Typography variant="h5">Our Vission</Typography>
            <Typography variant="caption">
              Our vision at XYZ Company is to empower individuals and businesses
              worldwide through cutting-edge technology that enhances
              productivity, connectivity, and overall quality of life. We
              envision a future where technology seamlessly integrates into
              every aspect of daily life, making tasks simpler, communication
              smoother, and opportunities limitless.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AboutSection;