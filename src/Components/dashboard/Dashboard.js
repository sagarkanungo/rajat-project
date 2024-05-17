"use client";
import React, { useContext } from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import { Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import UserDetail from "../dashboard/UserDetail";
import { useRouter } from "next/navigation";
import { ContextData } from "../context/ContextProvider";

function Dashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const {isUserLogin} = useContext(ContextData);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    // Retrieve logged-in user's name from local storage
    const loggedInUserName = localStorage.getItem("loggedInUserName");
    if (loggedInUserName) {
      setUserName(loggedInUserName);
    }
  }, []);
 
  
  return (
    <>
      <DashboardHeader handleSearch={handleSearch} searchQuery={searchQuery} />
      <Box
        padding={{ xs: "16px", md: "80px" }}
        sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontFamily: "Taviraj",
                fontSize: { xs: "24px", md: "31px" },
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "120%",
                letterSpacing: { xs: "-0.24px", md: "-0.31px" },
                color: "#1C211D",
                textAlign: "center",
                mt:{xs:'60px',md:'20px'}
              }}
            >
              Dashboard
            </Typography>
            <Typography sx={{  letterSpacing: { xs: "-0.36px", md: "-0.48px" },
            color: 'black',
            textAlign: "center", }}>
              Welcome ✌️, Rajat!
            </Typography>
          </Box>
        </Box>
      </Box>
      <UserDetail searchQuery={searchQuery} />
    </>
  );
}

export default Dashboard;
