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
import { ContextData } from "../context/ContextProvider";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const drawerWidth = 240;

function Header(props) {
  const auth = getAuth(app);
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isUserLogin, setIsUserLogin } = React.useContext(ContextData);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    // { title: "Contact", path: "/contact" },
    // { title: "Login", path: "/login" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLoginLogout = async () => {
    try {
      await signOut(auth); // Call signOut function
      console.log("Sign-out successful");
      // Clear login state in context
      setIsUserLogin(false);
      // Remove login state from localStorage
      localStorage.removeItem("isUserLoggedIn");
      // Redirect to login page or any other page as needed
      if (isUserLogin) {
        toast.success("Logout successfully!");
      }
      // Redirect admin to dashboard after a delay of 1 second
      // setTimeout(() => {
      //   router.push("/login");
      // }, 1000);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error.message);
      // Handle sign out error
    }
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
                backgroundColor: "lightskyblue",
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
        <ListItemButton
          sx={{ justifyContent: "center" }}
          onClick={handleLoginLogout}
        >
          <Typography sx={{ color: "#1A271D" }}>
            {isUserLogin ? "Logout" : "Login"}{" "}
          </Typography>
        </ListItemButton>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <ToastContainer />
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: "slategray",
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
                    backgroundColor: "lightskyblue",
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
            <MenuItem
              onClick={handleLoginLogout}
              sx={{
                "&:hover": {
                  backgroundColor: "lightskyblue",
                  transform: "scale(1.1)", // Zoom effect
                  transition: "transform 0.2s ease-in-out", // Transition for zoom effect
                  textDecoration: "underline",
                },
              }}
            >
              {isUserLogin ? "Logout" : "Login"}
            </MenuItem>
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
