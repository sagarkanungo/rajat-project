"use client";
import { Box, Typography, Divider, Drawer } from "@mui/material";
import serviceDetail from "./ServiceDetail";
import SkeletonPulseLoader from "../services/SkeletonPulseLoader";
import PackageSelectFor from "../services/PackageSelectFor";
import { useContext, useEffect } from "react";
import { ContextData } from "../context/ContextProvider";

function Services() {
  const { loading, isUserLogin, openDrawer, setOpenDrawer } =
    useContext(ContextData);
    

 

  function handleDrawerOpen() {
    if (!isUserLogin) {
      alert("Please login first!");
    } else {
      setOpenDrawer(true);
    }
  }
  function handleDrawerClose() {
    console.log("Before closing drawer:", openDrawer);
    setOpenDrawer(false);
    console.log("After closing drawer:", openDrawer);
  }

  return (
    <Box sx={{ marginTop: { xs: 8, md: 8 }, marginLeft: { xs: 2, md: 4 } }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 200,
          textDecoration: "underLine",
          color: "black",
        }}
      >
        Our Services
      </Typography>
      {loading ? (
        <SkeletonPulseLoader />
      ) : (
        <>
          {serviceDetail.map((item, index) => (
            <Box
              key={index}
              sx={{
                padding: { xs: "20px 12px 0", md: "60px 24px 0" },
                textAlign: "center",
              }}
            >
              <Typography variant="h4" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {item.details}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
                onClick={handleDrawerOpen}
              >
                {item.packages &&
                  item.packages.map((pkg, i) => (
                    <Box
                      key={i}
                      sx={{
                        position: "relative",
                        border: "1px solid #ccc",
                        padding: 2,
                        borderRadius: 8,
                        textAlign: "center",
                        width: { xs: "100%", sm: "45%", md: "20%" },
                        cursor: "pointer",
                        backgroundColor: "azure",
                        transition: "transform 0.2s",
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {pkg.name}
                      </Typography>
                      <Typography variant="h5">{pkg.duration}</Typography>
                      <Typography variant="body2" gutterBottom>
                        {pkg.price} /-
                      </Typography>
                      <ul style={{ textAlign: "left", paddingLeft: 0 }}>
                        {pkg.features &&
                          Array.isArray(pkg.features) &&
                          pkg.features.map((feature, j) => (
                            <li style={{ color: "black" }} key={j}>
                              {feature}
                            </li>
                          ))}
                      </ul>
                    </Box>
                  ))}
              </Box>
              <Divider
                sx={{
                  width: { xs: "100%", sm: "80%" },
                  margin: "24px auto", // Centering the divider and applying equal margin
                  background: "#E8E9E8",
                }}
              />
            </Box>
          ))}
          <Drawer
            anchor="top"
            open={openDrawer}
            onClose={handleDrawerClose}
            variant="temporary"
          >
            <PackageSelectFor handleDrawerClose={handleDrawerClose} />
          </Drawer>
        </>
      )}
    </Box>
  );
}


export default Services;
