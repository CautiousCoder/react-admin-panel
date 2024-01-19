/*
 * Title: BarChart
 *Description: Show Charts
 *Author : MD. ZAHIDUL ISLAM
 *Description:  19/12/2023
 */

import { Box } from "@mui/material";
import Header from "../Components/Header";

const BarChart = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Header title="BarChart" text="This is BarChart page." />
      <Box>BarChart</Box>
    </Box>
  );
};
export default BarChart;
