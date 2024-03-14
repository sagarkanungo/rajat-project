"use client";
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Grid, Box,  } from "@mui/material";
import { useRouter } from "next/navigation";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Link from "next/link";

function Login({setIsLoggedIn}) {
  const router = useRouter();

  // State for login credentials
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // Update credentials on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );

    if (user) {
      localStorage.setItem("loggedin", true);
      localStorage.setItem("loggedInUserName", user.name);
      router.push("/dashboard");
    } else {
      alert("Invalid email or password");
    }
    setIsLoggedIn(true);
  };

  return (
    <SectionWrapper justify="center" >
      <Grid container spacing={3} justifyContent="center">
        
        <Grid item xs={12} sm={6}>
          <Box padding="12px" justifyContent="space-between" textAlign='center'>
            <Typography
              sx={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: 700 }}
              variant="h4"
            >
              Welcome To TaxSmart
            </Typography>
            <Typography
              sx={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: 700 }}
              variant="caption"
            >
              Explore your Packages!
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                placeholder="Email"
                fullWidth
                variant="outlined"
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "18px",
                    backgroundColor: "white",
                  },
                }}
              />
              <TextField
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="Password"
                fullWidth
                type="password"
                variant="outlined"
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "18px",
                    backgroundColor: "white",
                  },
                }}
              />
              <Button
                fullWidth
                type="submit"
                sx={{color:'gray'}}
              >
                Login
              </Button>
            </form>
            <Box sx={{ textAlign: "center", padding: "20px" }}>
              Dont have an Account?
              <Link
                sx={{ color: "black", paddingLeft: "4px", fontWeight: 700,  }}
                href="/signup"
              >
                {" "}
                Ragister hear{" "}
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Login;
