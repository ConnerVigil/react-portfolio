import { Box, Link } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding="2%">
      <Link
        target="_blank"
        href="https://github.com/ConnerVigil/react-portfolio"
      >
        Find the code for this website on Github
      </Link>
    </Box>
  );
}
