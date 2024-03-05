"use client";
import React from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "slategray",
      }}
    >
      <Grid container spacing={1} marginLeft={5} paddingTop="40px">
        <Grid item xs={12} sm={6} md={3}>
          <Typography color="white" variant="h6">
            About Us
          </Typography>
          <Typography color="white" variant="caption">
            Get inspired by our curated list of must-visit destinations. Whether
            you're dreaming of sandy beaches, historic landmarks, or
            breathtaking landscapes, start your journey here.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography color="white" variant="h6">
            Services
          </Typography>
          <List component="ul">
            <ListItem component="li" sx={{ paddingLeft: 0 }}>
              <ListItemText sx={{ color: "white" }} primary="Online Booking" />
            </ListItem>
            <ListItem component="li" sx={{ paddingLeft: 0 }}>
              <ListItemText
                sx={{ color: "white" }}
                primary="International Package"
              />
            </ListItem>
            <ListItem component="li" sx={{ paddingLeft: 0 }}>
              <ListItemText sx={{ color: "white" }} primary="Indian package" />
            </ListItem>
            <ListItem component="li" sx={{ paddingLeft: 0 }}>
              <ListItemText sx={{ color: "white" }} primary="Travel Package" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography color="white" variant="h6">
            Social Media
          </Typography>
          <Box sx={{ display: "flex", gap: 2, paddingTop: "10px" }}>
            <FacebookIcon sx={{ color: "white" }} />
            <InstagramIcon sx={{ color: "white" }} />
            <TelegramIcon sx={{ color: "white" }} />
            <TwitterIcon sx={{ color: "white" }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography color="white" variant="h6">
            Contact
          </Typography>
          <List component="ul">
            <ListItem component="li" sx={{ paddingLeft: 0 }}>
              <ListItemIcon sx={{ minWidth: "40px", color: "white" }}>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "white" }}
                primary="trvl111@gmail.com"
              />
            </ListItem>
            <ListItem component="li" sx={{ paddingLeft: 0 }}>
              <ListItemIcon sx={{ minWidth: "40px", color: "white" }}>
                <LocalPhoneOutlinedIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary="+91-6264531002" />
            </ListItem>
            <ListItem component="li" sx={{ paddingLeft: 0 }}>
              <ListItemIcon sx={{ minWidth: "40px", color: "white" }}>
                <HomeWorkOutlinedIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "white" }}
                primary="504,503 robort squre Indore"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
