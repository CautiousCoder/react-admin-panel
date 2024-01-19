import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";

const DataGridComponent = ({ row, column }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      width={11 / 12}
      height={"75vh"}
      m="5px 26px 0px 30px"
      sx={{
        "& .css-1gens70-MuiDataGrid-root": {
          border: "none !important",
        },
        "& .css-1iyq7zh-MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[600],
        },
        "& .css-wop1k0-MuiDataGrid-footerContainer": {
          backgroundColor: colors.blueAccent[600],
          borderRadius: "5px",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "0px !important",
        },
        "& .MuiButton-text": {
          color: `${colors.gary[100]} !important`,
        },
        scrollbarWidth: "0.4rem !important",
        scrollbarColor: colors.redAccent[100],
      }}
    >
      {/* Datagrid expect row for all data and column for structure */}
      <DataGrid rows={row} columns={column} slots={{ toolbar: GridToolbar }} />
    </Box>
  );
};
export default DataGridComponent;
