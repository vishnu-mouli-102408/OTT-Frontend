// TabsItem.jsx;

import * as React from "react";
import "./Tabs.css";
import Tab from "@mui/material/Tab";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckIcon from "@mui/icons-material/Check";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import UserDetails from "./UserDetails";
import CancelIcon from "@mui/icons-material/Cancel";
import MovieCount from "./MovieCount";
export default function TabsItem() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="tabs example"
            onChange={handleChange}
            // textColor="secondary"
            indicatorColor="primary"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#ffffff",
              },
            }}
            centered
          >
            <Tab
              label="Accepted Movies"
              value="1"
              icon={<CheckIcon fontSize="large" />}
              iconPosition="start"
            ></Tab>
            <Tab
              label="Pending Movies"
              value="2"
              icon={<AutorenewIcon fontSize="large" />}
              iconPosition="start"
            ></Tab>
            <Tab
              label="Rejected Movies"
              value="3"
              icon={<CancelIcon fontSize="large" />}
              iconPosition="start"
            ></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">
          <MovieCount />
        </TabPanel>
        <TabPanel value="2">
          <MovieCount />
        </TabPanel>
        <TabPanel value="3">
          <MovieCount />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
