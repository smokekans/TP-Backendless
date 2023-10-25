import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Tabs from "../Tabs";

function SharedLayout() {
  return (
    <>
      <Box component="main">
        <Tabs />
        <Outlet />
      </Box>
    </>
  );
}
export default SharedLayout;
