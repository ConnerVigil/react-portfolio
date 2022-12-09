import { Box, Typography } from "@mui/material";
import React from "react";

export default function Projects() {
  return (
    <Box>
      <Typography sx={{ typography: { xs: "h5", sm: "h4", lg: "h2" } }}>
        Projects/Hackathons
      </Typography>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            paddingRight="1%"
            paddingBottom="0"
            sx={{ typography: { xs: "body1", sm: "h6", lg: "h4" } }}
          >
            Sandbox 2022 Hackathon
          </Typography>
          <Typography
            sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
          >
            {" "}
            - BYU Rollins Center
          </Typography>
        </Box>
        <Box>
          <ul>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Built a universal flight platform “OnTheFly” mobile app with
                navigation capabilities using React Native
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            paddingRight="1%"
            sx={{ typography: { xs: "body1", sm: "h6", lg: "h4" } }}
          >
            Family Map Server & Client
          </Typography>
        </Box>
        <Box>
          <ul>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Created an http request server to implement a web API, as part
                of an Advanced Programming course
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Developed a Java android application to accompany the server to
                call it’s API and display family history data for the user
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            paddingRight="1%"
            paddingBottom="0"
            sx={{ typography: { xs: "body1", sm: "h6", lg: "h4" } }}
          >
            BYU Developers Club
          </Typography>
        </Box>
        <Box>
          <ul>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Attended weekly club meetings to work on club projects
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Connected and networked with 20+ members and software engineers
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Participated in developing the BYU Free Food app, a React Native
                app to help hungry students find free food on campus
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            paddingRight="1%"
            paddingBottom="0"
            sx={{ typography: { xs: "body1", sm: "h6", lg: "h4" } }}
          >
            Datalog Interpreter
          </Typography>
        </Box>
        <Box>
          <ul>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                An interpreter program for the Datalog language, built as part
                of a Discrete Mathematics University course
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Built in 4,000+ lines of code written in C++
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Consists of a Scanner, Parser, Relational Database, and
                Interpreter
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
