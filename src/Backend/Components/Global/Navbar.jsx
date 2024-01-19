import DarkModeOutlineIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlineIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlineIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlineIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent="space-between"
      p={"10px 16px !important"}
    >
      {/* For Search Bar */}
      <Box
        display={"flex"}
        flexDirection={"row"}
        borderRadius="3px"
        backgroundColor={colors.primary[400]}
        margin={"15px 0"}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </Box>
      {/* For Right Icons */}

      <Box display={"flex"} flexDirection={"row"} p={2}>
        <IconButton sx={{ p: 1 }} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlineIcon />
          ) : (
            <DarkModeOutlineIcon />
          )}
        </IconButton>
        <IconButton sx={{ p: 1 }}>
          <NotificationsOutlineIcon />
        </IconButton>
        <IconButton sx={{ p: 1 }}>
          <SettingsOutlineIcon />
        </IconButton>
        <IconButton sx={{ p: 1 }}>
          <PersonOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Navbar;
