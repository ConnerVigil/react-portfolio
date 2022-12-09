import { Box, Typography } from "@mui/material";
import React from "react";

export default function Certificates() {
  return (
    <Box>
      <Typography sx={{ typography: { xs: "h5", sm: "h4", lg: "h2" } }}>
        Certificates/Other
      </Typography>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            paddingRight="1%"
            paddingBottom="0"
            sx={{ typography: { xs: "body1", sm: "h6", lg: "h4" } }}
          >
            Full-Time Religious Service Mission
          </Typography>
          <Typography
            sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
          >
            {" "}
            - Santo Domingo, Dominican Republic
          </Typography>
        </Box>
        <Box>
          <ul>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Lived in a foreign country for 2 years while becoming fluent in
                Spanish
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Held a leadership position over 6-10 other missionaries for 12+
                months
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
              >
                Planned and conducted weekly meetings (50+) to assess group and
                individual goals
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
            Learn C++ Course Certificate
          </Typography>
          <Typography
            sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
          >
            {" "}
            - Codecademy.com
          </Typography>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography
            paddingRight="1%"
            paddingBottom="0"
            sx={{ typography: { xs: "body1", sm: "h6", lg: "h4" } }}
          >
            Learn HTML Course Certificate
          </Typography>
          <Typography
            sx={{ typography: { xs: "body2", sm: "body2", lg: "body1" } }}
          >
            {" "}
            - Codecademy.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
