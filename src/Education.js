import { Box, Typography } from "@mui/material";
import React from "react";

export default function Education() {
  return (
    <Box>
      <Typography sx={{ typography: { xs: "h5", sm: "h4", lg: "h2" } }}>
        Education
      </Typography>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            paddingRight="1%"
            paddingBottom="0"
            sx={{ typography: { xs: "body1", sm: "h6", lg: "h4" } }}
          >
            Brigham Young University
          </Typography>
          <Typography
            sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
          >
            {" "}
            - Class of 2024
          </Typography>
        </Box>
        <Box>
          <ul>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                B.S. Computer Science: Software Engineering
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
            Weber State University
          </Typography>
          <Typography
            sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
          >
            {" "}
            - Class of 2021
          </Typography>
        </Box>
        <Box>
          <ul>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Associate of Science - AAS
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
