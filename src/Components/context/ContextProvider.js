
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
  userData:null,
  setUserData:(e) => e,
  selectedDateTime:'',
  setSelectedDateTime:(e) => e,
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [isUserLogin, setIsUserLogin] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false);
  const [userId, setUserId] = useState(null); 
  const [userData, setUserData] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState("");



  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
    setIsUserLogin(isUserLoggedIn);

    // Check if userId is stored in localStorage and set it in the context
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    setTimeout(() => {
      setLoading(false); // Update loading state after delay
    }, 1000);
   
  }, []);

  const updateUserId = (id) => {
    // Set userId in localStorage
    localStorage.setItem("userId", id);
    setUserId(id);
  };
  
  const updateUserData = (data) => {
    localStorage.setItem("userData", JSON.stringify(data)); // Store userData in local storage
    setUserData(data);
  };

 
  const ContextDataValue = {
    loading, // Pass loading state to context
    setLoading ,
    isUserLogin,
    setIsUserLogin,
    openDrawer,
    setOpenDrawer,
    userId,
    setUserId:updateUserId,
    userData,
    setUserData:updateUserData,
    selectedDateTime,
    setSelectedDateTime
  };
 
  

  return (
    <ThemeProvider theme={theme}>
      <ContextData.Provider value={ContextDataValue}>
        <CssBaseline />

        <Suspense>{children}</Suspense>
      </ContextData.Provider>
    </ThemeProvider>
  );
}
