/*
 * Title: Invoices
 *Description: Invoice page
 *Author : MD. ZAHIDUL ISLAM
 *Description:  19/12/2023
 */

import { Box } from "@mui/material";
import Header from "../Components/Header";
import DataGridComponent from "../Components/SubComponents/DataGridComponent";
import { mockDataInvoices } from "../Data/mockData";

const Invoices = () => {
  const column = [
    { field: "id", headerName: "ID", flex: 0.5 },
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
      field: "cost",
      headerName: "Cost",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.5,
    },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Header title="Invoices" text="This is Invoice page." />
      <DataGridComponent row={mockDataInvoices} column={column} />
    </Box>
  );
};
export default Invoices;
