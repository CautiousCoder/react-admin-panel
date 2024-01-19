/*
 * Title: Admin Dashboard
 *Description: This is Admin Dashboard page here we try to show Product information with graph or chat.
 *Author : MD. ZAHIDUL ISLAM
 *Description:  19/12/2023
 */

import { Box } from "@mui/material";
import Header from "../Components/Header";
const Dashboard = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Header title="Dashboard" text="This is Dashboard page." />
      <Box>Dashboard</Box>
    </Box>
  );
};
export default Dashboard;
