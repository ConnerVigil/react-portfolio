import { Box, Typography } from "@mui/material";
import React from "react";

export default function Certificates() {
  return (
    <Box>
      <Typography variant="h2">Certificates/Other</Typography>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" paddingBottom="0" variant="h4">
            Full-Time Religious Service Mission
          </Typography>
          <p> - Santo Domingo, Dominican Republic</p>
        </Box>
        <Box>
          <ul>
            <li>
              Lived in a foreign country for 2 years while becoming fluent in
              Spanish
            </li>
            <li>
              Held a leadership position over 6-10 other missionaries for 12+
              months
            </li>
            <li>
              Planned and conducted weekly meetings (50+) to assess group and
              individual goals
            </li>
          </ul>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" paddingBottom="0" variant="h4">
            Learn C++ Course Certificate
          </Typography>
          <p> - Codecademy.com</p>
        </Box>
      </Box>
      <Box paddingLeft="5%">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography paddingRight="1%" paddingBottom="0" variant="h4">
            Learn HTML Course Certificate
          </Typography>
          <p> - Codecademy.com</p>
        </Box>
      </Box>
    </Box>
  );
}
