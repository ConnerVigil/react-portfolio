import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import snorkel from "images/Snorkel.jpg";
import banner from "images/banner.jpg";

export default function AboutMe() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography paddingBottom={"5%"} variant="h1">
        Conner Vigil
      </Typography>
      <Box sx={{ width: "85%" }}>
        <Grid container spacing={6}>
          <Grid item xs={7}>
            <Box
              boxShadow={9}
              component="img"
              sx={{
                width: "100%",
              }}
              src={snorkel}
            />
          </Grid>
          <Grid item xs={5}>
            <Stack direction="row" justifyContent="center" paddingTop="30%">
              <Typography variant="h6">
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
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: "black", color: "white" }}>test</Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ backgroundColor: "black", color: "white" }}>test</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
