"use client";
import { Box, Card, CardContent } from "@mui/material";
import React from "react";
import { tabContent, tabs } from "../data/tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

const sortedTabs = [...tabs].sort((a, b) => a.sequence - b.sequence);

export default function FrontPage() {
  const [value, setValue] = React.useState(sortedTabs[0].label);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const CurrentTabContent = tabContent[value] ?? (() => <div>Content not found</div>);

  return (
    <main className="w-full max-w-4xl flex-1 px-4 py-6">
      <TabContext value={value}>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            bgcolor: "background.default",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList
            onChange={handleChangeTab}
            aria-label="Portfolio sections"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {sortedTabs.map((tab) => (
              <Tab key={tab.label} label={tab.label} value={tab.label} />
            ))}
          </TabList>
        </Box>
      </TabContext>

      <Card className="mt-6">
        <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
          <CurrentTabContent />
        </CardContent>
      </Card>
    </main>
  );
}
