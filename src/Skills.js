import { Box, Typography } from "@mui/material";
import React from "react";

export default function Skills() {
  return (
    <Box>
      <Typography variant="h2">Software Skills</Typography>
      <Box paddingLeft="3%">
        <ul>
          <li>
            <strong>Proficient in:</strong> C++, Java, React.js, HTML5, CSS,
            Typescript, JavaScript, Python, Json, XML, API
          </li>
          <li>
            <strong>Worked in:</strong> Jira, Git, System Design, Junit, Docker,
            Selenium Webdriver, Mockito, Test-Driven Development, Unit Testing,
            AWS
          </li>
        </ul>
      </Box>
    </Box>
  );
}
