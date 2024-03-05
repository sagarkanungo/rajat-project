"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";

import Button from "@mui/material/Button";
import Link from "next/link";

const drawerWidth = 240;
const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  // { title: 'Signup', path: '/signup', },
  { title: "Contact", path: "/contact" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleLogin = () => {
    // Perform login actions here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout actions here
    setIsLoggedIn(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ my: 2, color: "#1A271D", fontWeight: 700 }}
      >
        TaxSmart
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            sx={{
              justifyContent: "center",
              "&:hover": {
                backgroundColor: 'lightskyblue',
                transform: "scale(1.1)", // Zoom effect
                transition: "transform 0.2s ease-in-out", // Transition for zoom effect
                textDecoration: "underline",
              },
            }}
            key={item.title}
          >
            <Link
              href={item.path}
              prefetch={false}
              style={{ textDecoration: "none" }}
            >
              <Typography sx={{ color: "#1A271D" }}>{item.title}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar sx={{borderRadius: "15px" }} >
        <Toolbar
          sx={{
            backgroundColor: 'slategray',
            borderRadius: "15px" 
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <FlightIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "center", sm: "block" } }}
          >
            TaxSmart
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((page) => (
              <MenuItem
                key={page.title}
                sx={{
                  "&:hover": {
                      backgroundColor: 'lightskyblue',
                    transform: "scale(1.1)", // Zoom effect
                    transition: "transform 0.2s ease-in-out", // Transition for zoom effect
                    textDecoration: "underline",
                  },
                }}
              >
                <Link
                  href={page.path}
                  prefetch={false}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography textAlign="center" color="#FFF">
                    {page.title}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "azure",
            },
          }}
        >
          {drawer}
        </Drawer>
      </>
    </>
  );
}

export default Header;
