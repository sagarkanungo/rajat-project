"use client";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { app } from "../../Firebase";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ContextData } from "../context/ContextProvider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import SignupSchema from '../../schemas/SignupSchema'
function Signup() {
  const { setUserId, isMounted } = useContext(ContextData);
  const router = useRouter();
  const auth = getAuth(app);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      dob: "",
      country: "",
      city: "",
      state: "",
      phoneNumber: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      console.log(values,'--------->values')
      const db = getDatabase(app);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const newUser = {
          id: userCredential.user.uid,
          ...values,
        };
        await set(ref(db, `users/${newUser.id}`), newUser);
        setUserId(newUser.id);
        formik.resetForm();
        router.push("/login");
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
    },
  });

  return (
    <>
      <SectionWrapper justify="center">
        <Box
          padding="12px"
          justifyContent="space-between"
          textAlign="center"
          
        >
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
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={6}>
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  margin="normal"
                  
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                margin="normal"
                
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="password"
                  variant="outlined"
                  margin="normal"
                  
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "18px",
                      backgroundColor: "white",
                    },
                   
                  }}
                  fullWidth
                  name="dob"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="date"
                  variant="outlined"
                  margin="normal"
                  
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  margin="normal"
                  
                  error={formik.touched.country && Boolean(formik.errors.country)}
                  helperText={formik.touched.country && formik.errors.country}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                margin="normal"
                
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                margin="normal"
                
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="outlined"
                  margin="normal"
                  
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button fullWidth type="submit" sx={{ color: "gray" }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box sx={{ color: "black", textAlign: "center", padding: "20px" }}>
            Already have an Account?
            <Link sx={{ paddingLeft: "4px", fontWeight: 700 }} href="/login">
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
