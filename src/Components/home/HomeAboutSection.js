/* eslint-disable max-lines */
import {
  Grid,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useRouter } from "next/navigation";
function HomeImage() {
  const router = useRouter();
  return (
    <Box
      sx={{
        // margin: { xs: "64px 16px", md: "20px 136px 0 " },
        width: "auto",
        height: "auto",
        paddingTop: "50px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: "24px 0px 0px 35px" }}>
            <Typography variant="h6">About us</Typography>
            <Typography>Simplifying Tax and GST Management for You!</Typography>
            <Typography>
              Welcome to our platform, where we're dedicated to making tax and
              GST management a breeze for individuals and businesses alike. Our
              mission is to empower you with the tools and knowledge necessary
              to navigate the complexities of taxes effortlessly.
            </Typography>
            <Divider
              sx={{
                width: "100%",
                background: "#E8E9E8",
                m: "24px 0px",
                gap: "24px",
              }}
            />
            <Typography>
              At <span style={{ fontWeight: 700 }}>TaxSmart</span>, we
              understand the challenges you face when it comes to understanding
              and complying with tax regulations. That's why we've developed a
              user-friendly web application designed to simplify the process,
              saving you time and minimizing stress.
            </Typography>
            <Box padding="2rem 0rem 0rem">
              <Button
                variant="text"
                size="medium"
                onClick={() => router.push("services")}
                sx={{ color: "slategray" }}
              >
                More Detail
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Box sx={{ padding: " 0 30px 25px", backgroundColor: "" }}>
            <img
              src="Home.jpg"
              style={{ width: "100%", height: "80vh", borderRadius: "35px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default HomeImage;
