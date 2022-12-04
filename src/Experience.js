import { Box, Typography } from "@mui/material";
import React from "react";

export default function Experience() {
  return (
    <Box>
      <Typography variant="h2">Experience</Typography>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" paddingBottom="0" variant="h4">
            Full Stack Software Engineer
          </Typography>
          <p> - BYU College of Life Sciences</p>
        </Box>
        <Box>
          <ul>
            <li>
              Developing and maintaining websites used by 5000+ students and
              faculty
            </li>
            <li>
              Building fast and clean frontends with React.js, Typescript, and
              MUI
            </li>
            <li>
              Engineering reliable and efficient backend APIs with C#, .NET
              Core, and MySQL
            </li>
          </ul>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" variant="h4">
            Software Engineer Intern
          </Typography>
          <p> - foreUP Software</p>
        </Box>
        <Box>
          <ul>
            <li>
              Created a feature that helps internal employees find user specific
              information x5 times quicker
            </li>
            <li>
              Tested bug reports in the software and filtered them to the
              development team
            </li>
            <li>
              Troubleshooted and resolved bugs while working with JavaScript and
              PHP
            </li>
            <li>Attended weekly stand-up meetings and sprint planning</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
