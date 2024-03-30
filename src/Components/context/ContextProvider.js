
import React, { useState, useEffect } from "react";
import theme from "../../theme";
import { Suspense, createContext } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";


export const ContextData = createContext({
  loading: true, // Add loading state to the context
  setLoading: () => {} ,
  isUserLogin: false,
  setIsUserLogin: (e) => e,
  openDrawer:false,
  setOpenDrawer:() => {} ,
  userId:null,
  setUserId:(e) => e,
  isSticky:false,
  setIsSticky:() => {},
  isMounted:false
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [isUserLogin, setIsUserLogin] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false);
  const [userId, setUserId] = useState(null); 
  const [isSticky, setIsSticky] = useState(false);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
    setIsUserLogin(isUserLoggedIn);

    // Check if userId is stored in localStorage and set it in the context
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const updateUserId = (id) => {
    // Set userId in localStorage
    localStorage.setItem("userId", id);
    setUserId(id);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Adjust this value based on your requirement

      if (scrollPosition > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  const ContextDataValue = {
    loading, // Pass loading state to context
    setLoading ,
    isUserLogin,
    setIsUserLogin,
    openDrawer,
    setOpenDrawer,
    userId,
    setUserId:updateUserId,
    isSticky,
    isMounted
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsMounted(true); // Set isMounted to true after loading
    }, 2000);
  }, []);
  

  return (
    <ThemeProvider theme={theme}>
      <ContextData.Provider value={ContextDataValue}>
        <CssBaseline />

        <Suspense>{children}</Suspense>
      </ContextData.Provider>
    </ThemeProvider>
  );
}
