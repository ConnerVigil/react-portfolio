import { Link, Typography } from "@mui/material";
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
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/conner-vigil-5920531b6/"
          >
            <LinkedInIcon
              sx={{ color: "#0072b1", fontSize: 30, padding: "10px" }}
            />
          </Link>
          <Link target="_blank" href="https://github.com/ConnerVigil">
            <GitHubIcon sx={{ color: "#333", fontSize: 30, padding: "10px" }} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/connervigil82/">
            <InstagramIcon
              className="instaIcon"
              sx={{
                fontSize: 30,
                padding: "10px",
                color: "orange",
              }}
            />
          </Link>
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
