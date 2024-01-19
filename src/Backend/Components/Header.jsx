/*
 * Title: Header Component
 *Description:  Header of the page
 *Author : MD. ZAHIDUL ISLAM
 *Description:  22/12/2023
 */

import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { tokens } from "../../theme";

const Header = ({ title, text }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ marginLeft: "30px", gap: "5px" }}
    >
      <Typography
        variant="h3"
        color={colors.gary[100]}
        textTransform={"uppercase"}
      >
        {title}
      </Typography>
      <Typography variant="h6" color={colors.greenAccent[400]}>
        {text}
      </Typography>
    </Box>
  );
};
export default Header;
