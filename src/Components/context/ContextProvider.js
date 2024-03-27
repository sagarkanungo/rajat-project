
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
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [isUserLogin, setIsUserLogin] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false);
  const [userId, setUserId] = useState(null); 

  useEffect(() => {
    // Check if the user was previously logged in
    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
    setIsUserLogin(isUserLoggedIn);
  }, []);

  const ContextDataValue = {
    loading, // Pass loading state to context
    setLoading ,
    isUserLogin,
    setIsUserLogin,
    openDrawer,
    setOpenDrawer,
    userId,
    setUserId
  };
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  

  return (
    <ThemeProvider theme={theme}>
      <ContextData.Provider value={ContextDataValue}>
        <CssBaseline />

        <Suspense>{children}</Suspense>
      </ContextData.Provider>
    </ThemeProvider>
  );
}
