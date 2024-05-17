// "use client";
// import { CheckBox } from "@mui/icons-material";
// import {
//   Table,
//   TableHead,
//   TableBody,
//   TableCell,
//   TableRow,
//   Typography,
//   Grid,
//   Button,
//   Paper,
//   TableContainer,
//   TablePagination,
//   Box,
//   TextField,

// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { getDatabase, onValue, ref, remove } from "firebase/database";
// import { app } from "../../Firebase";
// function UserDetail({  searchQuery }) {
//   const [userData, setUserData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [rowsPerPage] = useState(10);

//   useEffect(() => {
//     const db = getDatabase(app);
//     const userRef = ref(db, "users");
//     onValue(userRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const dataArray = Object.values(data); // Convert object to array
//         setUserData(dataArray);
//         setFilteredData(dataArray);
//       } else {
//         // Handle case when data is empty
//         setUserData([]);
//         setFilteredData([]);
//         console.log("No data available");
//       }
//     });
//   }, []);

//   console.log("userData:", userData);
//   function handelDelete(id) {
//     const db = getDatabase(app);
//     const userRef = ref(db, "users/" + id);
//     remove(userRef);
//   }
//   useEffect(() => {
//     // Existing code...
//     const filtered = userData.filter(
//       (user) =>
//         (user.name &&
//           user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (user.email &&
//           user.email.toLowerCase().includes(searchQuery.toLowerCase()))
//     );
//     setFilteredData(filtered);
//     setPage(1); // Reset page when search query changes
//   }, [searchQuery, userData]);
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const indexOfLastRow = page * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
//   return (
//     <>
//       <Grid container spacing={1} alignItems="center" justifyContent="center">
//         <Grid item xs={12}>
//           <Typography align="center" variant="h5">
//             Users Detail
//           </Typography>
//         </Grid>

//         <Grid item xs={12}>
//           <Paper>
//             <TableContainer>
//               <Box style={{ overflowX: "auto" }}>
//                 <Table border="2px">
//                   <TableHead sx={{ backgroundColor: "slategray" }}>
//                     <TableRow>
//                       <TableCell sx={{ color: "white", textAlign: "center" }}>
//                         Full Name
//                       </TableCell>
//                       <TableCell sx={{ color: "white", textAlign: "center" }}>
//                         Email
//                       </TableCell>
//                       <TableCell sx={{ color: "white", textAlign: "center" }}>
//                         DOB
//                       </TableCell>
//                       <TableCell sx={{ color: "white", textAlign: "center" }}>
//                         Country
//                       </TableCell>
//                       <TableCell sx={{ color: "white", textAlign: "center" }}>
//                         City
//                       </TableCell>
//                       <TableCell sx={{ color: "white", textAlign: "center" }}>
//                         State{" "}
//                       </TableCell>
//                       <TableCell sx={{ color: "white", textAlign: "center" }}>
//                         Mobile
//                       </TableCell>
//                       <TableCell sx={{ color: "white", textAlign: "center" }}>
//                         Package
//                       </TableCell>
//                       <TableCell sx={{ color: "white", textAlign: "center" }}>
//                         Remove
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {currentRows.map((item) => (
//                       <TableRow key={item.id}>
//                         <TableCell sx={{ textAlign: "center" }}>
//                           {item.name}
//                         </TableCell>
//                         <TableCell sx={{ textAlign: "center" }}>
//                           {item.email}
//                         </TableCell>
//                         <TableCell sx={{ textAlign: "center" }}>
//                           {item.dob}
//                         </TableCell>
//                         <TableCell sx={{ textAlign: "center" }}>
//                           {item.country}
//                         </TableCell>
//                         <TableCell sx={{ textAlign: "center" }}>
//                           {item.city}
//                         </TableCell>
//                         <TableCell sx={{ textAlign: "center" }}>
//                           {item.state}
//                         </TableCell>
//                         <TableCell sx={{ textAlign: "center" }}>
//                           {item.phoneNumber}
//                         </TableCell>
//                         <TableCell sx={{ textAlign: "center" }}>
//                           {/* Render package details if available */}
//                           {item.userPackageDetail && (
//                             <ul>
//                               {Object.entries(item.userPackageDetail).map(
//                                 ([service, packageDetail, adharNumber]) => (
//                                   <li key={service}>
//                                     <strong>{service}:</strong>{" "}
//                                     {packageDetail.selectedPackage}
//                                   </li>
//                                 )
//                               )}
//                             </ul>
//                           )}
//                         </TableCell>

//                         <Button
//                           sx={{
//                             color: "red",
//                             textAlign: "center",
//                             border: 0,
//                             "& .MuiSvgIcon-root": {
//                               // Use the class to target the icon
//                               fontSize: 28, // Adjust the font size as per your requirement
//                             },
//                           }}
//                           variant="text"
//                           onClick={() => handelDelete(item.id)}
//                         >
//                           <DeleteIcon />
//                         </Button>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </Box>
//             </TableContainer>
//           </Paper>
//         </Grid>
//       </Grid>
//       <Grid item xs={12}>
//         <TablePagination
//           rowsPerPageOptions={[10]}
//           component="div"
//           count={userData.length}
//           rowsPerPage={rowsPerPage}
//           page={page - 1}
//           onPageChange={handleChangePage}
//         />
//       </Grid>
//     </>
//   );
// }

// export default UserDetail;
import React, { useContext, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { app } from "../../Firebase";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Grid,
  Button,
  Paper,
  TableContainer,
  TablePagination,
  Box,
  Collapse,
  IconButton,
  KeyboardArrowDownIcon,
  Divider,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ContextData } from "../context/ContextProvider";

function UserDetail({ searchQuery }) {
  // const { userId,setSelectedDateTime,selectedDateTime} = useContext(ContextData);
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [expandedRows, setExpandedRows] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.values(data); // Convert object to array
        setUserData(dataArray);
        setFilteredData(dataArray);
      } else {
        // Handle case when data is empty
        setUserData([]);
        setFilteredData([]);
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

  useEffect(() => {
    const filtered = userData.filter(
      (user) =>
        (user.name &&
          user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.email &&
          user.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredData(filtered);
    setPage(1); // Reset page when search query changes
  }, [searchQuery, userData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowClick = (id) => {
    const isExpanded = expandedRows.includes(id);
    setExpandedRows((prevExpanded) =>
      isExpanded
        ? prevExpanded.filter((rowId) => rowId !== id)
        : [...prevExpanded, id]
    );
  };

  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  
  return (
    <>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h5">
            Users Detail
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <TableContainer>
              <Box style={{ overflowX: "auto" }}>
                <Table border="2px">
                  <TableHead sx={{ backgroundColor: "slategray" }}>
                    <TableRow>
                      <TableCell sx={{ color: "white", textAlign: "center" }}>
                        Select
                      </TableCell>
                      <TableCell sx={{ color: "white", textAlign: "center" }}>
                        Full Name
                      </TableCell>
                      <TableCell sx={{ color: "white", textAlign: "center" }}>
                        Email
                      </TableCell>
                      <TableCell sx={{ color: "white", textAlign: "center" }}>
                        DOB
                      </TableCell>
                      <TableCell sx={{ color: "white", textAlign: "center" }}>
                        Country
                      </TableCell>
                      <TableCell sx={{ color: "white", textAlign: "center" }}>
                        City
                      </TableCell>
                      <TableCell sx={{ color: "white", textAlign: "center" }}>
                        State{" "}
                      </TableCell>
                      <TableCell sx={{ color: "white", textAlign: "center" }}>
                        Mobile
                      </TableCell>
                      {/* <TableCell sx={{ color: "white", textAlign: "center" }}>
                        Package
                      </TableCell> */}
                      <TableCell sx={{ color: "white", textAlign: "center" }}>
                        Remove
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentRows.map((item) => (
                      <React.Fragment key={item.id}>
                        <TableRow onClick={() => handleRowClick(item.id)}>
                          <TableCell sx={{ textAlign: "center" }}>
                            <IconButton>
                              <ArrowDropDownIcon
                              
                                color={
                                  expandedRows.includes(item.id)
                                    ? "primary"
                                    : "action"
                                }
                              />
                            </IconButton>
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            {item.name}
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            {item.email}
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            {item.dob}
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            {item.country}
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            {item.city}
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            {item.state}
                          </TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            {item.phoneNumber}
                          </TableCell>

                          <TableCell sx={{ textAlign: "center" }}>
                            <Button
                              sx={{
                                color: "red",
                                textAlign: "center",
                                border: 0,
                                "& .MuiSvgIcon-root": {
                                  // Use the class to target the icon
                                  fontSize: 28, // Adjust the font size as per your requirement
                                },
                              }}
                              variant="text"
                              onClick={() => handelDelete(item.id)}
                            >
                              <DeleteIcon />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            style={{ paddingBottom: 0, paddingTop: 0 }}
                            colSpan={9}
                          >
                            <Collapse
                              in={expandedRows.includes(item.id)}
                              timeout="auto"
                              unmountOnExit
                            >
                              <Box margin={1}>
                                {item.userPackageDetail && (
                                  <Table>
                                    <TableHead>
                                      <TableRow
                                        style={{
                                          fontSize: "18px",
                                          fontWeight: 700,
                                        }}
                                      >
                                        PackageDetail:-
                                      </TableRow>
                                      <TableRow>
                                        <TableCell
                                          align="center"
                                          style={{
                                            fontSize: "15px",
                                            fontWeight: 700,
                                          }}
                                        >
                                          Service
                                        </TableCell>
                                        <TableCell
                                          align="center"
                                          style={{
                                            fontSize: "15px",
                                            fontWeight: 700,
                                          }}
                                        >
                                          Selected Package
                                        </TableCell>
                                        <TableCell
                                          align="center"
                                          style={{
                                            fontSize: "15px",
                                            fontWeight: 700,
                                          }}
                                        >
                                          Date
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {Object.entries(
                                        item.userPackageDetail
                                      ).map(([service, packageDetail]) => (
                                        <TableRow key={service}>
                                          <TableCell align="center">
                                            {packageDetail.selectedService}
                                          </TableCell>
                                          <TableCell align="center">
                                            {packageDetail.selectedPackage}
                                          </TableCell>
                                          <TableCell align="center">
                                            {packageDetail.dateTime}
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                )}
                              </Box>
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={userData.length}
          rowsPerPage={rowsPerPage}
          page={page - 1}
          onPageChange={handleChangePage}
        />
      </Grid>
    </>
  );
}

export default UserDetail;
