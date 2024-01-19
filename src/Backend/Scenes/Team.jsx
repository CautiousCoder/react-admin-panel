/*
 * Title: Team Page
 *Description: show team member
 *Author : MD. ZAHIDUL ISLAM
 *Description:  19/12/2023
 */

import { useTheme } from "@emotion/react";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../Components/Header";
import DataGridComponent from "../Components/SubComponents/DataGridComponent";
import { mockDataTeam } from "../Data/mockData";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const column = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.5,
    },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "access",
      headerName: "Access",
      headerAlign: "center",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width={"60%"}
          p={"5px"}
          m={"0 auto"}
          display={"flex"}
          justifyContent={"center"}
          backgroundColor={
            access === "admin"
              ? colors.greenAccent[600]
              : colors.greenAccent[700]
          }
        >
          {access === "admin" && <AdminPanelSettingsOutlined />}
          {access === "manager" && <SecurityOutlined />}
          {access === "user" && <LockOpenOutlined />}
          <Typography color={colors.gary[100]} sx={{ ml: "5px" }}>
            {access}
          </Typography>
        </Box>
      ),
    },
  ];
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Header title="Team Manage" text="This is Team page." />
      <DataGridComponent row={mockDataTeam} column={column} />
    </Box>
  );
};
export default Team;
