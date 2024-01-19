/*
 * Title: Contact Page
 *Description: Contact with us
 *Author : MD. ZAHIDUL ISLAM
 *Description:  19/12/2023
 */

import { Box } from "@mui/material";
import Header from "../Components/Header";
import DataGridComponent from "../Components/SubComponents/DataGridComponent";
import { mockDataContacts } from "../Data/mockData";

const Contact = () => {
  const column = [
    { field: "id", headerName: "ID", flex: 0.3 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
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
      flex: 0.4,
    },
    { field: "phone", headerName: "Phone", flex: 0.7 },
    {
      field: "address",
      headerName: "Address",
      flex: 1.5,
      cellClassName: "name-column--cell",
    },
  ];
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Header title="Contact" text="This is Contact page." />
      <DataGridComponent row={mockDataContacts} column={column} />
    </Box>
  );
};
export default Contact;
