import { Link, Typography, Box, Avatar, Paper } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Experience from "Experience";
import Education from "Education";
import Skills from "Skills";
import Projects from "Projects";
import Certificates from "Certificates";
import portraitPic from "images/Portrait.jpg";
import Particles from "react-tsparticles";

export default function Portfolio() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Particles />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ typography: { xs: "h3", sm: "h3", lg: "h1" } }}>
          Conner Vigil
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src={portraitPic}
            sx={{ width: 300, height: 300 }}
            component={Paper}
            elevation={20}
          />
          <Typography variant="body1" paddingTop="4%">
            Conner is a CS student and aspiring software engineer based in Utah
          </Typography>
        </Box>
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
