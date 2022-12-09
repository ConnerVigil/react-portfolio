import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import snorkel from "images/Snorkel.jpg";
import banner from "images/banner.jpg";
import jazz from "images/Jazz.jpg";
import InNOut from "images/InNOut.jpg";
import mexico from "images/mexicopierpic.jpg";

export default function AboutMe() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography
        paddingBottom={"5%"}
        sx={{ typography: { xs: "h3", sm: "h3", lg: "h1" } }}
      >
        Conner Vigil
      </Typography>
      <Box sx={{ width: "85%" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} lg={7}>
            <Box
              boxShadow={9}
              component="img"
              sx={{
                width: "100%",
              }}
              src={snorkel}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={5}>
            <Stack direction="row" justifyContent="center" paddingTop="30%">
              <Typography sx={{ typography: { xs: "h6", sm: "h6", lg: "h5" } }}>
                Conner is a full-time student at Brigham Young University
                studying Computer Science with an emphasis in Software
                Engineering. While attending school full-time, he works
                part-time at BYU as a Web Developer.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Box
              boxShadow={9}
              component="img"
              sx={{
                width: "100%",
              }}
              src={banner}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Stack direction="row" justifyContent="center" paddingTop="30%">
              <Typography variant="h6">
                In his free time, Conner enjoys spending time outside playing
                sports and exploring new places. He has traveled to several
                locations including the Dominican Republic, Mexico, Saint Lucia,
                Turks and Caicos, and Hawaii. During the winter months, Conner
                gets in his outdoor activity by skiing the Utah mountains.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Box
              boxShadow={9}
              component="img"
              sx={{
                width: "100%",
              }}
              src={jazz}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Box
              boxShadow={9}
              component="img"
              sx={{
                width: "100%",
              }}
              src={InNOut}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Stack direction="row" justifyContent="center" paddingTop="30%">
              <Typography variant="h6">
                Conner’s passions include In-N-Out Burger, Star Wars, playing
                with his dogs, skiing, basketball, pickle-ball, and playing
                board games with friends and family. He is also interested in
                topics such as: business, AI, Entrepreneurism, and Mobile
                Development.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} lg={8}>
            <Box
              boxShadow={9}
              component="img"
              sx={{
                width: "100%",
              }}
              src={mexico}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
