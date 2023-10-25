import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { Typography } from "@mui/material";

export default function DummyChart() {
  return (
    <Box>
      <Typography>DummyChart</Typography>
      {/* for your viewing pleasure */}
      <Stack direction="row" sx={{ width: "80%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <SparkLineChart
            plotType="bar"
            data={[1, 4, 2, 5, 7, 2, 4, 6]}
            height={250}
          />
        </Box>
      </Stack>
    </Box>
  );
}
