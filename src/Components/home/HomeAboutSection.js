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
        paddingTop: { xs: "20px", sm: "50px" },
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: { xs: "24px 0px 0px 10px", sm: "24px 0px 0px 35px" } }}>
            <Typography variant="h4">About us</Typography>
            <Typography>Simplifying Tax and GST Management for You!</Typography>
            <Typography>
              Welcome to our platform, where we&apos;re dedicated to making tax and
              GST management a breeze for individuals and businesses alike. Our
              mission is to empower you with the tools and knowledge necessary
              to navigate the complexities of taxes effortlessly.
            </Typography>
            <Divider
              sx={{
                width: "100%",
                background: "#E8E9E8",
                my: { xs: "24px", sm: "24px 0px" },
              }}
            />
            <Typography>
              At <span style={{ fontWeight: 700 }}>TaxSmart</span>, we
              understand the challenges you face when it comes to understanding
              and complying with tax regulations. That&apos;s why we&apos;ve developed a
              user-friendly web application designed to simplify the process,
              saving you time and minimizing stress.
            </Typography>
            <Box sx={{ padding: "1rem 0" }}>
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
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "0 10px", sm: "0 30px" },
          }}
        >
          <Box sx={{ padding: "0 10px" }}>
            <img
              src="Home.jpg"
              alt="Home"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeImage;
