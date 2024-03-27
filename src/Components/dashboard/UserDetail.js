"use client";
import { CheckBox } from "@mui/icons-material";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { app } from "../../Firebase";

function Favourite() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.values(data); // Convert object to array
        setUserData(dataArray);
      } else {
        // Handle case when data is empty
        setUserData([]);
        console.log("No data available");
      }
    });
  }, []);
  console.log("userData:", userData);
  function handelDelete(id) {
    const db = getDatabase(app);
    const userRef = ref(db, "users/" + id);
    remove(userRef);
  }

  return (
    <>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
        padding={2}
      >
        <Grid item xs={12}>
          <Typography sx={{ textAlign: "center" }} variant="h5">
            User Detail
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Table border="2px">
            <TableHead sx={{ backgroundColor: "#25372A" }}>
              <TableRow>
                <TableCell sx={{ color: "white",textAlign:'center' }}>Full Name</TableCell>
                <TableCell sx={{ color: "white",textAlign:'center' }}>Email</TableCell>
                <TableCell sx={{ color: "white",textAlign:'center' }}>DOB</TableCell>
                <TableCell sx={{ color: "white",textAlign:'center' }}>Country</TableCell>
                <TableCell sx={{ color: "white",textAlign:'center' }}>City</TableCell>
                <TableCell sx={{ color: "white",textAlign:'center' }}>State </TableCell>
                <TableCell sx={{ color: "white",textAlign:'center' }}>Mobile</TableCell>
                <TableCell sx={{ color: "white",textAlign:'center' }}>Package</TableCell>
              
                <TableCell sx={{ color: "white",textAlign:'center' }}>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell sx={{textAlign:'center'}}>{item.name}</TableCell>
                  <TableCell sx={{textAlign:'center'}}>{item.email}</TableCell>
                  <TableCell sx={{textAlign:'center'}}>{item.dob}</TableCell>
                  <TableCell sx={{textAlign:'center'}}>{item.country}</TableCell>
                  <TableCell sx={{textAlign:'center'}}>{item.city}</TableCell>
                  <TableCell sx={{textAlign:'center'}}>{item.state}</TableCell>
                  <TableCell sx={{textAlign:'center'}}>{item.phoneNumber}</TableCell>
                  <TableCell sx={{textAlign:'center'}}>
                    {/* Render package details if available */}
                    {item.userPackageDetail && (
                      <ul>
                        {Object.entries(item.userPackageDetail).map(
                          ([service, packageDetail]) => (
                            <li key={service}>
                              <strong>{service}:</strong>{" "}
                              {packageDetail.selectedPackage}
                             
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </TableCell>
                 
                  <Button
                    sx={{ color:'red' , textAlign:'center',border:0,'& .MuiSvgIcon-root': { // Use the class to target the icon
                      fontSize: 28, // Adjust the font size as per your requirement
                    },}}
                    variant="text"
                    onClick={() => handelDelete(item.id)}
                  >
                   <DeleteIcon />
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
}

export default Favourite;
