"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import { ContextData } from "../context/ContextProvider";
import { useRouter } from "next/navigation";

const drawerWidth = 240;

function Header(props) {
  const router =useRouter()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isUserLogin,setIsUserLogin } = React.useContext(ContextData);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLoginLogout = () => {
    if (isUserLogin) {
      localStorage.removeItem("loggedin");
      setIsUserLogin(false); 
      router.push("/login");
    } else {
      // User is not logged in, redirect to login page
      // You can customize this based on your routing logic
      router.push("/login"); // Redirect to login page
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
       
          <ListItemButton sx={{justifyContent:'center'}}  onClick={handleLoginLogout}>
          <Typography sx={{ color: "#1A271D", }}>Logout  </Typography>
        </ListItemButton>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
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
           
              <MenuItem onClick={handleLoginLogout}>
              Logout
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
