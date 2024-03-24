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
                <TableCell sx={{ color: "white" }}>Full Name</TableCell>
                <TableCell sx={{ color: "white" }}>Email</TableCell>
                <TableCell sx={{ color: "white" }}>DOB</TableCell>
                <TableCell sx={{ color: "white" }}>Country</TableCell>
                <TableCell sx={{ color: "white" }}>City</TableCell>
                <TableCell sx={{ color: "white" }}>State </TableCell>
                <TableCell sx={{ color: "white" }}>Mobile</TableCell>
                <TableCell sx={{ color: "white" }}>Remove</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.dob}</TableCell>
                  <TableCell>{item.country}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.state}</TableCell>
                  <TableCell>{item.phoneNumber}</TableCell>
                  <Button sx={{background:'none',border:'none'}} variant="text" onClick={() => handelDelete(item.id)}>
                    Delete
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
