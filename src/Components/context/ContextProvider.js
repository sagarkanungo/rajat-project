// import React, { useEffect, useState } from "react";
// import { createContext } from "react";
// export const MyContext = createContext();

// function ContextProvider({ children }) {
//   const [data, setData] = useState([]);
//   const fetchData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const jsonData = await response.json();
//     setData(jsonData);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <MyContext.Provider
//       value={{
//         data: data,
//       }}
//     >
//       {children}
//     </MyContext.Provider>
//   );
// }

// export default ContextProvider;

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
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [isUserLogin, setIsUserLogin] = useState(false)

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
