import React from "react";
import { Container } from "@mui/material";
import Services from "../../Components/services/Services";

function page() {
  return (
    <Container maxWidth="xl" disableGutters sx={{ overflowX: "hidden" }}>
      <Services />
    </Container>
  );
}

export default page;
