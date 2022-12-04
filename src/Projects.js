import { Box, Typography } from "@mui/material";
import React from "react";

export default function Projects() {
  return (
    <Box>
      <Typography variant="h2">Projects/Hackathons</Typography>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" paddingBottom="0" variant="h4">
            Sandbox 2022 Hackathon
          </Typography>
          <p> - BYU Rollins Center</p>
        </Box>
        <Box>
          <ul>
            <li>
              Built a universal flight platform “OnTheFly” mobile app with
              navigation capabilities using React Native
            </li>
          </ul>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" variant="h4">
            Family Map Server & Client
          </Typography>
        </Box>
        <Box>
          <ul>
            <li>
              Created an http request server to implement a web API, as part of
              an Advanced Programming course
            </li>
            <li>
              Developed a Java android application to accompany the server to
              call it’s API and display family history data for the user
            </li>
          </ul>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" paddingBottom="0" variant="h4">
            BYU Developers Club
          </Typography>
        </Box>
        <Box>
          <ul>
            <li>Attended weekly club meetings to work on club projects</li>
            <li>
              Connected and networked with 20+ members and software engineers
            </li>
            <li>
              Participated in developing the BYU Free Food app, a React Native
              app to help hungry students find free food on campus
            </li>
          </ul>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" paddingBottom="0" variant="h4">
            Datalog Interpreter
          </Typography>
        </Box>
        <Box>
          <ul>
            <li>
              An interpreter program for the Datalog language, built as part of
              a Discrete Mathematics University course
            </li>
            <li>Built in 4,000+ lines of code written in C++</li>
            <li>
              Consists of a Scanner, Parser, Relational Database, and
              Interpreter
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
