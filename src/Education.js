import { Box, Typography } from "@mui/material";
import React from "react";

export default function Education() {
  return (
    <Box>
      <Typography variant="h2">Education</Typography>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" paddingBottom="0" variant="h4">
            Brigham Young University
          </Typography>
          <p> - Class of 2024</p>
        </Box>
        <Box>
          <ul>
            <li>B.S. Computer Science: Software Engineering</li>
          </ul>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" variant="h4">
            Weber State University
          </Typography>
          <p> - Class of 2021</p>
        </Box>
        <Box>
          <ul>
            <li>Associate of Science - AAS</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
