import React from "react";
import dataTabs from "../data/tabs.json";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem } from "@mui/material";

export default function CurrentTab() {
  const tabs = dataTabs.sort((a, b) => a.order - b.order);

  return (
    <Drawer
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <List component="nav">
        {tabs?.map((tab) => {
          return (
            <ListItem key={tab.id}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                }}
                to={`/${tab.id}`}
              >
                {tab.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
