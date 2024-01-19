/* eslint-disable react-refresh/only-export-components */
/*
 * Title: FAQ Page
 *Description: Show FAQ
 *Author : MD. ZAHIDUL ISLAM
 *Description:  19/12/2023
 */

import { Box } from "@mui/material";
import Header from "../Components/Header";

const FAQ = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Header title="FAQ" text="This is FAQ page." />
      <Box>FAQ</Box>
    </Box>
  );
};
export default FAQ;
