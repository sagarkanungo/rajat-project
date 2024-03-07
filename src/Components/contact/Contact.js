"use client";
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Grid, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper";
import Link from "next/link";

function Contact() {
  function handelClick() {
    alert("Message Send Succesfully");
  }
  return (
    <SectionWrapper justify="center" backgroundColour="aliceblue">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img
            src="contact.jpg"
            alt="img"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "18px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ textAlign: "center",  }}>
          <Typography variant="h4">Contact Us</Typography>
        </Box>
              <Box sx={{paddingTop:'20px',textAlign:'center'}}>
              <TextField
                sx={{ width: "100%", maxWidth: "400px", mb: 2 }}
                label="Name"
              />
              <TextField
                sx={{ width: "100%", maxWidth: "400px", mb: 2 }}
                label="Email"
              />
              <TextField
                sx={{ width: "100%", maxWidth: "400px", mb: 2 }}
                label="Subject"
              />
              <TextField
                sx={{ width: "100%", maxWidth: "400px", mb: 2 }}
                label="Message"
                multiline
                rows={3}
              />
              <Button
                fullWidth
                type="submit"
                sx={{ width: "100%", maxWidth: "400px",color:'gray' }}
                onClick={handelClick}
              >
                Send Message
              </Button>
              </Box>
            </Box>
          </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Contact;
