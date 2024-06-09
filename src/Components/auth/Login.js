"use client";
import React, { useState, useEffect, useContext } from "react";
import { Typography, TextField, Button, Grid, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Link from "next/link";
import { ContextData } from "../context/ContextProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get, getDatabase, ref } from "firebase/database";
import { useFormik } from "formik";
import LoginSchema from '../../schemas/LoginSchema'

function Login() {
  const auth = getAuth(app);
  const { setIsUserLogin, loading, setLoading ,setUserId,setUserData,} = useContext(ContextData);
  const router = useRouter();

  // State for login credentials
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        console.log("Logging in with credentials:", values);
        const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
        const userId = userCredential.user.uid;
        setUserId(userId);
        console.log(userId);
        // Check if the logged-in user is an admin
        if (values.email === "rajatadmin@gmail.com") {
          console.log("Admin signed in:", userCredential.user);
          setIsUserLogin(true);
          localStorage.setItem("isUserLoggedIn", "true");
          toast.success("Admin logged in successfully!");
          setTimeout(() => {
            router.push("/dashboard");
          }, 1000);
        } else {
          // Fetch user data from Firebase
          const db = getDatabase(app);
          const userRef = ref(db, `users/${userId}`);
          const userSnapshot = await get(userRef);
          const userData = userSnapshot.val();
          setUserData(userData);
          if (userSnapshot.exists()) {
            console.log("User signed in:", userCredential.user);
            console.log("User name:", userData.name);
            setIsUserLogin(true);
            localStorage.setItem("isUserLoggedIn", "true");
            toast.success("Logged in successfully!");
            setTimeout(() => {
              router.push("/services");
            }, 1000);
          } else {
            console.error("User data not found");
            toast.error("User data not found");
          }
        }
      } catch (error) {
        console.error("Error logging in:", error);
        toast.error("Invalid email or password");
      } finally {
        setLoading(false);
      }
    },
  });

  
  

  return (
    <SectionWrapper justify="center">
      {router.pathname === "/login" && <ToastContainer autoClose={3000} />}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Box padding="12px" justifyContent="space-between" textAlign="center">

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
            <form onSubmit={formik.handleSubmit}>
              <TextField
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              {loading ? (
                <Box
                  sx={{ display: "flex", justifyContent: "center", mt: "4px" }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Button fullWidth type="submit" sx={{ color: "gray" }}>
                  Login
                </Button>
              )}
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
