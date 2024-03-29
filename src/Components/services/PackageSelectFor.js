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
import { getDatabase, ref, update, get ,set} from "firebase/database";
import { app } from "../../Firebase";
import { ContextData } from "../context/ContextProvider";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function PackageSelectFor({ handleDrawerClose }) {
  const { userId } = useContext(ContextData);
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
  }

 const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);

    try {
      const newUserBooking = {
        selectedService: formData.selectedService,
        selectedPackage: formData.selectedPackage,
        adharNumber: formData.adharNumber,
        panNumber: formData.panNumber,
        fullAdress: formData.fullAdress,
      };

      // Get user's existing data if any
      const userPackageRef = ref(db, `users/${userId}/userPackageDetail`);
      const userPackageSnapshot = await get(userPackageRef);
      let existingUserData = {};
      if (userPackageSnapshot.exists()) {
        existingUserData = userPackageSnapshot.val();
      }

      // Merge existing user data with the new booking
      const updatedUserData = {
        ...existingUserData,
        [formData.selectedService]: newUserBooking,
      };

      // Update user data with the merged data
      await update(ref(db, `users/${userId}/userPackageDetail`), updatedUserData);
      console.log("User booking data saved successfully.");

      // Reset form fields
      setFormData({
        selectedService: "",
        selectedPackage: "",
        adharNumber: "",
        panNumber: "",
        fullAdress: "",
      });
      setOpen(true);

      // Close the drawer or perform any other action
    } catch (error) {
      console.error("Error saving user booking data:", error.message);
    }
  }
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          height: "auto",
          overflow: "auto",
          backgroundColor: "white",
          boxShadow: 24,
          p: 5,
          borderRadius: "18px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Select Package
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
      <Dialog
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
      </Dialog>
    </>
  );
}

export default PackageSelectFor;
