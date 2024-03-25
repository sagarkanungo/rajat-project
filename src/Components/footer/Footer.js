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
  Link,
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
        padding: { xs: "40px 20px", sm: "40px 0", md: "40px 20px 20px 20px" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography color="white" variant="h6">
            About Us
          </Typography>
          <Typography color="white" variant="caption">
          At Taxsmart Company, our journey began in a small garage, where our
                founders, Jane and John Smith, shared a passion for creating
                innovative solutions to everyday problems. Fueled by their
                entrepreneurial spirit, they set out to revolutionize the way
                people interact with technology.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography color="white" variant="h6">
            Services
          </Typography>
          <List>
            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemText primary="Regular Tax Filing" />
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemText
                sx={{ color: "white" }}
                primary="Accounting and Bookkeeping Services"
              />
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemText sx={{ color: "white" }} primary="Employ Management/PayRoll Solution" />
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemText sx={{ color: "white" }} primary="Income Tax Filing" />
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
          <List>
            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemIcon sx={{ minWidth: "40px", color: "white" }}>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "white" }}
                primary={
                  <Link
                    href="mailto:rajat111@gmail.com"
                    sx={{ textDecoration: "none", color: "white" }}
                  >
                    rajat111@gmail.com
                  </Link>
                }
              />
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemIcon sx={{ minWidth: "40px", color: "white" }}>
                <LocalPhoneOutlinedIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary="+91-6264531002" />
            </ListItem>
            <ListItem sx={{ paddingLeft: 0 }}>
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
