/*
 * Title: PieChart
 *Description: Show PieChart
 *Author : MD. ZAHIDUL ISLAM
 *Description:  19/12/2023
 */

import { Box } from "@mui/material";
import Header from "../Components/Header";

const PieChart = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Header title="PieChart" text="This is PieChart page." />
      <Box>PieChart</Box>
    </Box>
  );
};
export default PieChart;
