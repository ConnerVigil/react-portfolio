import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Portfolio from "Portfolio";
import Footer from "Footer";
import AboutMe from "AboutMe";
import Contact from "Contact";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} centered>
            <Tab label="Portfolio" value="1" />
            <Tab label="About Me" value="2" />
            <Tab label="Contact" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Portfolio />
        </TabPanel>
        <TabPanel value="2">
          <AboutMe />
        </TabPanel>
        <TabPanel value="3">
          <Contact />
        </TabPanel>
      </TabContext>
      <Footer />
    </Box>
  );
}
