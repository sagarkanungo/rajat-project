"use client";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing users data from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Create a new user object
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    // Add the new user to the existing array of users
    const updatedUsers = [...existingUsers, newUser];

    // Save the updated array of users to local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Redirect to the login page
    router.push("/login");
  };

  return (
    <>
      <SectionWrapper justify="center">
        <Box padding="12px" justifyContent="space-between" textAlign="center">
          <Typography
            sx={{
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: 700,
            }}
            variant="h4"
          >
            Welcome To TaxSmart
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: 700,
            }}
            variant="caption"
          >
            Explore your Pakages!
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={6} sm={6}>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "18px",
                      backgroundColor: "white",
                    },
                  }}
                  placeholder="Name"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "18px",
                      backgroundColor: "white",
                    },
                  }}
                  placeholder="Email"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "18px",
                      backgroundColor: "white",
                    },
                  }}
                  placeholder="Password"
                  fullWidth
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  type="password"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "18px",
                      backgroundColor: "white",
                    },
                  }}
                  placeholder="Password"
                  fullWidth
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  type="password"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button fullWidth type="submit" sx={{ color: "gray" }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box sx={{ textAlign: "center", padding: "20px" }}>
            Already have an Account?
            <Link
              sx={{ color: "black", paddingLeft: "4px", fontWeight: 700 }}
              href="/login"
            >
              {" "}
              Login hear{" "}
            </Link>
          </Box>
        </Box>
      </SectionWrapper>
    </>
  );
}

export default Signup;
