'use client'
import React, { useContext, useState } from "react";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  TextField
} from "@mui/material";
import serviceDetail from '../services/ServiceDetail';
import { getDatabase, ref, update } from "firebase/database";
import { app } from '../../Firebase';
import { ContextData } from "../context/ContextProvider";

function PackageSelectFor({handleDrawerClose}) {
  const{userId} =useContext(ContextData)
  const [formData, setFormData] = useState({
    selectedService: '',
    selectedPackage: '',
    adharNumber: '',
    panNumber:'',
    fullAdress:'',

  })

  function handlChange(e){
    const { name, value}=e.target;
    setFormData({...formData,[name]:value})
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

      // Update user data with the new booking under 'userBookings' for the current user
      await update(ref(db, `users/${userId}/userPackageDetail`), {
        [formData.selectedService]: newUserBooking
      });
      console.log("User booking data saved successfully.");

      // Reset form fields
      setFormData({
        selectedService: '',
        selectedPackage: '',
        adharNumber: '',
        panNumber:'',
        fullAdress:'',
      });

      // Close the drawer or perform any other action
    } catch (error) {
      console.error("Error saving user booking data:", error.message);
    }
  };
 



  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        height: "100%",
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
                <MenuItem key={index} value={service.title}>{service.title}</MenuItem>
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
                  .find(service => service.title === formData.selectedService)
                  .packages.map((pkg, index) => (
                    <MenuItem key={index} value={`${pkg.duration || pkg.name} - ${pkg.price}`}>
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
          sx={{ background: "none", padding: 0 }}
          onClick={handleDrawerClose}
        >
          Back
        </Button>
        <Button
          variant="text"
          sx={{ background: "none", padding: 0 }}
          onClick={handleSubmit}
        >
          Send Detail
        </Button>
      </Box>
    </Box>
  );
}

export default PackageSelectFor;
