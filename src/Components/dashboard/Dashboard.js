'use client'
import React from 'react'
import DashboardHeader from '../dashboard/DashboardHeader'
import { Typography,Box } from '@mui/material'
import { useState, useEffect } from "react";
import UserDetail from '../dashboard/UserDetail'

function Dashboard() {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        // Retrieve logged-in user's name from local storage
        const loggedInUserName = localStorage.getItem("loggedInUserName");
        if (loggedInUserName) {
          setUserName(loggedInUserName);
        } 
      }, []);
  return (
    <>
    <DashboardHeader/>
    <Box padding={{ xs: "16px", md: "80px" }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontFamily: "Taviraj",
                fontSize: "31px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "120%",
                letterSpacing: "-0.31px",
                color: "#1C211D",
              }}
            >
              Dashboard
            </Typography>
            <Typography sx={{ letterSpacing: "-0.48px",color:'black' }}>
              Welcome  ✌️, Rajat!
            </Typography>
          </Box>
       
        </Box>
        </Box>
<UserDetail/>
    </>
  )
}

export default Dashboard