import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Experience from "Experience";
import Education from "Education";
import Skills from "Skills";
import Projects from "Projects";
import Certificates from "Certificates";

export default function Portfolio() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h1">Conner Vigil</Typography>
        <Box display="flex" flexDirection="row" gap="3">
          <LinkedInIcon
            sx={{ color: "#0072b1", fontSize: 30, padding: "10px" }}
          />
          <GitHubIcon sx={{ color: "#333", fontSize: 30, padding: "10px" }} />
          <InstagramIcon
            className="instaIcon"
            sx={{
              fontSize: 30,
              padding: "10px",
              color: "orange",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ width: "85%" }} display="flex" flexDirection="column">
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
      </Box>
    </Box>
  );
}
