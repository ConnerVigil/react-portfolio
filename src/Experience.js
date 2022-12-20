import { Box, Typography } from "@mui/material";
import React from "react";

export default function Experience() {
  return (
    <Box>
      <Typography sx={{ typography: { xs: "h5", sm: "h4", lg: "h2" } }}>
        Experience
      </Typography>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            paddingRight="1%"
            paddingBottom="0"
            sx={{ typography: { xs: "body1", sm: "h6", lg: "h4" } }}
          >
            Full Stack Software Engineer
          </Typography>
          <Typography
            sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
          >
            {" "}
            - BYU College of Life Sciences
          </Typography>
          <Box
            boxShadow={9}
            sx={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "2%",
              padding: "0.5%",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
            >
              August 2022 - Present | UT
            </Typography>
          </Box>
        </Box>
        <Box>
          <ul>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Developing and maintaining websites used by 5000+ students and
                faculty
              </Typography>
            </li>

            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Building fast and clean frontends with React.js, Typescript, and
                MUI
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Engineering reliable and efficient backend APIs with C#, .NET
                Core, and MySQL
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
            Software Engineer Intern
          </Typography>
          <Typography
            sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
          >
            {" "}
            - foreUP Software
          </Typography>
          <Box
            boxShadow={9}
            sx={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "2%",
              padding: "0.5%",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
            >
              April - August 2022 | UT
            </Typography>
          </Box>
        </Box>
        <Box>
          <ul>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Created a feature that helps internal employees find user
                specific information x5 times quicker
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Tested bug reports in the software and filtered them to the
                development team
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Troubleshooted and resolved bugs while working with JavaScript
                and PHP
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Attended weekly stand-up meetings and sprint planning
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
