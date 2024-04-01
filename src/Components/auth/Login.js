"use client";
import React, { useState, useEffect, useContext } from "react";
import { Typography, TextField, Button, Grid, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Link from "next/link";
import { ContextData } from "../context/ContextProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase";

function Login() {
  const auth = getAuth(app);
  const { setIsUserLogin } = useContext(ContextData);
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (
        credentials.email === "rajatadmin@gmail.com" &&
        credentials.password === "rajat@123"
      ) {
        console.log("Admin signed in");
        setIsUserLogin(true);
        localStorage.setItem("isUserLoggedIn", "true");
        router.push("/dashboard"); // Redirect admin to dashboard
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        );
        // User signed in successfully
        console.log("User signed in:", userCredential.user);
        setIsUserLogin(true);
        localStorage.setItem("isUserLoggedIn", "true");
        // Redirect or perform any necessary actions upon successful login
        router.push("/services"); // Redirect to dashboard after login
      }
    } catch (error) {
      alert("invelid email and password", error.message);

      console.log("Error signing in:", error.message);
      // Handle login error (e.g., display error message to the user)
    }
  };

  return (
    <SectionWrapper justify="center">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Box
            padding="12px"
            justifyContent="space-between"
            textAlign="center"
           
          >
            <Typography
              sx={{ fontFamily: "Lato", fontStyle: "normal", fontWeight: 700, }}
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
              <Button fullWidth type="submit" sx={{ color: "gray" }}>
                Login
              </Button>
            </form>
            <Box sx={{ color: "black", textAlign: "center", padding: "20px" }}>
              Dont have an Account?
              <Link sx={{ paddingLeft: "4px", fontWeight: 700 }} href="/signup">
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
