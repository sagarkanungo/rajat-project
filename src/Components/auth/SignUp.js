"use client";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import {app} from '../../Firebase'
import { getDatabase,ref,set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ContextData } from "../context/ContextProvider";


function Signup() {
  const{setUserId} = useContext(ContextData)
  const router = useRouter();
  const auth = getAuth(app);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    country: "",
    city: "",
    state: "",
    phoneNumber: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    try {
      // Create user with email and password for authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const newUser = {
        id: userCredential.user.uid, // Unique ID generated by Firebase for the user
        name: formData.name,
        email: formData.email,
        dob: formData.dob,
        country: formData.country,
        city: formData.city,
        state: formData.state,
        phoneNumber: formData.phoneNumber,
      };
  
      // Save user data to Firebase Realtime Database
      await set(ref(db, `users/${newUser.id}`), newUser);
      console.log("User data saved successfully.",userCredential);
      setUserId(newUser.id)
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        password: "",
        dob: "",
        country: '',
        city: '',
        state: '',
        phoneNumber: '',
      });
  
      // Redirect to the login page
      router.push("/login");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
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
                  required
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
                  placeholder="Date of Birth"
                  fullWidth
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  type="date" // Using date type for date input
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
                  placeholder="Country"
                  fullWidth
                  name="country"
                  value={formData.country}
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
                  placeholder="State"
                  fullWidth
                  name="state"
                  value={formData.state}
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
                  placeholder="City"
                  fullWidth
                  name="city"
                  value={formData.city}
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
                  placeholder="Phone Number"
                  fullWidth
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
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
          <Box sx={{color: "black", textAlign: "center", padding: "20px" }}>
            Already have an Account?
            <Link
              sx={{ paddingLeft: "4px", fontWeight: 700, }}
              href="/login"
            >
              {" "}{" "}
              Login hear{" "}
            </Link>
          </Box>
        </Box>
      </SectionWrapper>
    </>
  );
}

export default Signup;
