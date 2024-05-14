"use client";
import React, { useContext, useState } from "react";
import {
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import serviceDetail from "../services/ServiceDetail";
import { getDatabase, ref, update, get, set } from "firebase/database";
import { app } from "../../Firebase";
import { ContextData } from "../context/ContextProvider";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Dilog from "../Dialog/Dilog";
import emailjs from "emailjs-com";

function PackageSelectFor({ handleDrawerClose }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const year = date.getFullYear().toString().slice(2);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };
  const { userId, setSelectedDateTime, selectedDateTime } =
    useContext(ContextData);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    selectedService: "",
    selectedPackage: "",
    adharNumber: "",
    panNumber: "",
    fullAdress: "",
  });

  function handlChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "selectedPackage" && value) {
      const currentDateTime = new Date().toISOString();
      setSelectedDateTime(currentDateTime);
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const db = getDatabase(app);

  //   try {
  //     const newUserData = {
  //       selectedService: formData.selectedService,
  //       selectedPackage: formData.selectedPackage,
  //       dateTime: formatDate(selectedDateTime),
  //     };
  //     console.log(selectedDateTime, "--------selectedatetime");
  //     // Get user's existing data if any
  //     const userPackageRef = ref(db, `users/${userId}`);
  //     const userPackageSnapshot = await get(userPackageRef);
  //     let existingUserData = {};
  //     if (userPackageSnapshot.exists()) {
  //       existingUserData = userPackageSnapshot.val();
  //     }

  //     // Merge existing user data with the new booking
  //     const updatedUserData = {
  //       ...existingUserData,
  //       userPackageDetail: {
  //         ...(existingUserData.userPackageDetail || {}),
  //         [formData.selectedService]: newUserData,
  //       },
  //     };
  //     console.log(updatedUserData, "---update");
  //     // Update user data with the merged data
  //     await update(ref(db, `users/${userId}`), updatedUserData);
  //     console.log("User booking data saved successfully.");
     

  //     // Reset form fields
  //     setFormData({
  //       selectedService: "",
  //       selectedPackage: "",
  //       adharNumber: "",
  //       panNumber: "",
  //       fullAdress: "",
  //     });
  //     setSelectedDateTime("");
  //     setOpen(true);

  //     // Close the drawer or perform any other action
  //   } catch (error) {
  //     console.error("Error saving user booking data:", error.message);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);
  
    try {
      const newPackageData = {
        selectedService: formData.selectedService,
        selectedPackage: formData.selectedPackage,
        dateTime: formatDate(selectedDateTime),
      };
  
      const userPackageRef = ref(db, `users/${userId}`);
      const userPackageSnapshot = await get(userPackageRef);
      let existingUserData = {};
  
      if (userPackageSnapshot.exists()) {
        existingUserData = userPackageSnapshot.val();
      }
  
      // Initialize the userPackageDetail array if it doesn't exist
      const updatedUserData = {
        ...existingUserData,
        userPackageDetail: [
          newPackageData,
          ...(existingUserData.userPackageDetail || []),
        ],
      };
  
      await update(ref(db, `users/${userId}`), updatedUserData);
      console.log("User booking data saved successfully.");
  
      setFormData({
        selectedService: "",
        selectedPackage: "",
        adharNumber: "",
        panNumber: "",
        fullAdress: "",
      });
      setSelectedDateTime("");
      setOpen(true);
  
    } catch (error) {
      console.error("Error saving user booking data:", error.message);
    }
  };
  

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "80%",
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "18px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          boxShadow: 24,
          zIndex: 9999, // Ensure it's on top of other content
        }}
      >
        <Typography variant="h6" gutterBottom>
          Select Package
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Select Service</Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Select
                value={formData.selectedService}
                onChange={handlChange}
                name="selectedService"
              >
                <MenuItem value="">Select a service</MenuItem>
                {serviceDetail.map((service, index) => (
                  <MenuItem key={index} value={service.title}>
                    {service.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Select Package</Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Select
                value={formData.selectedPackage}
                onChange={handlChange}
                name="selectedPackage"
              >
                <MenuItem value="">Select a package</MenuItem>
                {formData.selectedService &&
                  serviceDetail
                    .find(
                      (service) => service.title === formData.selectedService
                    )
                    .packages.map((pkg, index) => (
                      <MenuItem
                        key={index}
                        value={`${pkg.duration || pkg.name} - ${pkg.price}`}
                      >
                        {`${pkg.duration || pkg.name} - ${pkg.price}`}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
            gap: "20px",
          }}
        >
          <Button
            variant="text"
            sx={{ background: "none", padding: 0, border: "none" }}
            onClick={handleDrawerClose}
          >
            Back
          </Button>
          <Button
            variant="text"
            sx={{ background: "none", padding: 0, border: "none" }}
            onClick={handleSubmit}
          >
            Send Detail
          </Button>
        </Box>
      </Box>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Package is successfully Sent to Administration, we Will Call
            you for Furthur Detail And Check
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" background="none" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog> */}
      <Dilog
        open={open}
        onClose={handleClose}
        content=" Your Package is successfully Sent to Administration, we Will Call
      you for Furthur Detail And Check"
        title="Use Google's location service?"
      />
    </>
  );
}

export default PackageSelectFor;
