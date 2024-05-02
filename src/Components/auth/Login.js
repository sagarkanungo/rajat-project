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

function Login() {
  const auth = getAuth(app);
  const { setIsUserLogin, loading, setLoading ,setUserId} = useContext(ContextData);
  const router = useRouter();

  // State for login credentials
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     if (
  //       credentials.email === "rajatadmin@gmail.com" &&
  //       credentials.password === "rajat@123"
  //     ) {
  //       console.log("Admin signed in");
  //       setIsUserLogin(true);
  //       localStorage.setItem("isUserLoggedIn", "true");
  //       toast.success("Admin logged in successfully!");
  //       // Redirect admin to dashboard after a delay of 1 second
  //       setTimeout(() => {
  //         router.push("/dashboard");
  //       }, 1000);
  //     } else {
  //       const userCredential = await signInWithEmailAndPassword(
  //         auth,
  //         credentials.email,
  //         credentials.password
  //       );
  //       // User signed in successfully
  //       console.log("User signed in:", userCredential.user);
  //       setIsUserLogin(true);
  //       localStorage.setItem("isUserLoggedIn", "true");
  //       toast.success("Logged in successfully!");
  //       // Redirect to services page after a delay of 1 second
  //       setTimeout(() => {
  //         router.push("/services");
  //       }, 1000);
  //     }
  //   } catch (error) {
  //     toast.error("Invalid email or password");
  //     // Handle login error (e.g., display error message to the user)
  //   } finally {
  //     setLoading(false); // Set loading back to false after login process completes
  //   }
  // };


  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       credentials.email,
  //       credentials.password
  //     );
  //     const userId = userCredential.user.uid;
  //     console.log(userId,'------------------->')
  //     setUserId(userId);
  //     if (credentials.email === "rajatadmin@gmail.com") {
  //       console.log("Admin signed in:", userCredential.user);
  //       setIsUserLogin(true);
  //       localStorage.setItem("isUserLoggedIn", "true");
  //       toast.success("Admin logged in successfully!");

  //       setTimeout(() => {
  //         router.push("/dashboard");
  //       }, 1000);
  //     } else {
  //       console.log("User signed in:", userCredential.user);
  //       setIsUserLogin(true);
  //       localStorage.setItem("isUserLoggedIn", "true");
  //       toast.success("Logged in successfully!");

  //       setTimeout(() => {
  //         router.push("/services");
  //       }, 1000);
  //     }
  //   } catch (error) {
  //     toast.error("Invalid email or password");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Logging in with credentials:", credentials);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const userId = userCredential.user.uid;
      setUserId(userId);
  
      // Check if the logged-in user is an admin
      if (credentials.email === "rajatadmin@gmail.com") {
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
  
        if (userSnapshot.exists()) {
          console.log("User signed in:", userCredential.user);
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
  };
  
  
  

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
