/*
 * Title: Admin Sidebar
 *Description: It's show admin sidebar
 *Author : MD. ZAHIDUL ISLAM
 *Description:  19/12/2023
 */

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css.style.css";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CalendarOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ContactOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutline";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import TimeLineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { tokens } from "../../../theme";

// For sidebar each item returned
const Item = ({ icon, text, to, selected, setSelected, isCollapse }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {/* For sidebar is collapse */}
      <Link
        key={text}
        to={to}
        style={{
          borderBottom: "0px !important",
          textDecoration: "none",
          fontSize: "11px !important",
          color: colors.gary[400],
        }}
      >
        <MenuItem
          active={selected === text}
          style={{ color: colors.gary[400] }}
          onClick={() => setSelected(text)}
          icon={icon}
        >
          {!isCollapse ? (
            <Typography variant="h6">{text}</Typography>
          ) : undefined}
        </MenuItem>
      </Link>
    </>
  );
};

const Sidebarr = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapse, setIsCollapse] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const linkPadding = isCollapse ? undefined : "0px 10px 0px 35px !important";
  const leftMargin = isCollapse ? "8px !important" : "30px !important";

  return (
    <Box
      height={"100% !important"}
      // Prosidebar custom style here
      sx={{
        "& .ps-sidebar-root": {
          borderRightWidth: "0px !important",
          height: "100% !important",
        },
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
          height: "100vh !important",
        },
        "& .ps-menu-root": {
          backgroundColer: "transparent !important",
        },
        "& .ps-menu-button": {
          padding: linkPadding,
          height: "40px !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
          backgroundColor: `${colors.gary[200]} !important`,
        },
        "& .css-1tfybug-MuiButtonBase-root-MuiIconButton-root": {
          color: "inherit !important",
        },
        "& .ps-active": {
          color: "#6870fa !important",
        },
        "& ::-webkit-scrollbar": {
          width: "0.2em !important",
        },
        "& ::-webkit-scrollbar-track": {
          backgroundColor: colors.gary[700],
        },
        "& ::-webkit-scrollbar-thumb": {
          backgroundColor: colors.gary[100],
          outline: `1px solid ${colors.gary[900]}`,
        },
        "& ::-webkit-scrollbar-thumb:hover": {
          backgroundColor: colors.greenAccent[300],
          outline: `1px solid ${colors.gary[700]}`,
        },
      }}
    >
      {/* Prosidebar */}
      <Sidebar collapsed={isCollapse}>
        <Menu iconShape="square">
          <MenuItem
            icon={isCollapse ? <MenuOutlinedIcon /> : undefined}
            onClick={() => setIsCollapse(!isCollapse)}
            style={{
              margin: "10px 0 20px 0",
              color: colors.gary[100],
            }}
          >
            {!isCollapse && (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                ml="15px"
              >
                <Typography variant="h3">ADMINS</Typography>
                <IconButton
                  color={colors.gary[500]}
                  // onClick={() => setIsCollapse(!isCollapse)}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* For User */}
          {!isCollapse ? (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              margin={"10px 0"}
              flexDirection={"column"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  alt="User"
                  width={"100px"}
                  height={"100px"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                  src={"../../../../assets/images.png"}
                />
              </Box>
              <Box margin={"15px 0"}>
                <Typography variant="h3" color={colors.gary[100]}>
                  UserName
                </Typography>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  UserContent
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={2}
            >
              <img
                alt="User"
                width={"30px"}
                height={"30px"}
                style={{ cursor: "pointer", borderRadius: "50%" }}
                src={"../../../../assets/images.png"}
              />
            </Box>
          )}
          {/* For Link */}
          <Box display={"flex"} flexDirection={"column"} textAlign={"left"}>
            <Item
              text={"Dashboard"}
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Typography
              variant="span"
              sx={{
                color: colors.gary[400],
                marginLeft: leftMargin,
                textTransform: "uppercase",
                fontSize: "11px",
              }}
            >
              Data
            </Typography>
            <Item
              text={"Manage Team"}
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Item
              text={"Contact Information"}
              to={"/contacts"}
              icon={<ContactOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Item
              text={"Invoice Balance"}
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Typography
              variant="span"
              sx={{
                color: colors.gary[400],
                marginLeft: leftMargin,
                textTransform: "uppercase",
                fontSize: "11px",
              }}
            >
              Pages
            </Typography>
            <Item
              text={"Profile Form"}
              to="/profile"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Item
              text={"Calendar"}
              to="/calendar"
              icon={<CalendarOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Item
              text={"FAQ Page"}
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Typography
              variant="span"
              sx={{
                color: colors.gary[400],
                marginLeft: leftMargin,
                textTransform: "uppercase",
                fontSize: "11px",
              }}
            >
              Charts
            </Typography>
            <Item
              text={"Bar Charts"}
              to="/barchart"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Item
              text={"Pie Chart"}
              to="/piechart"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Item
              text={"Line Chart"}
              to="/linechart"
              icon={<TimeLineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Item
              text={"Geography"}
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapse={isCollapse}
            />
            <Outlet />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};
export default Sidebarr;
