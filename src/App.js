/*
 * Title: Main App
 *Description: It is render all the component of this project.
 *Author : MD. ZAHIDUL ISLAM
 *Description:  17/12/2023
 */

import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Backend/Components/Global/Navbar";
import Sidebarr from "./Backend/Components/Global/Sidebarr";
import BarChart from "./Backend/Scenes/BarChart";
import Calendar from "./Backend/Scenes/Calendar";
import Contact from "./Backend/Scenes/Contact";
import Dashboard from "./Backend/Scenes/Dashboard";
import FAQ from "./Backend/Scenes/FAQ";
import Form from "./Backend/Scenes/Form";
import Geography from "./Backend/Scenes/Geography";
import Invoices from "./Backend/Scenes/Invoices";
import Line from "./Backend/Scenes/Line";
import PieChart from "./Backend/Scenes/PieChart";
import Team from "./Backend/Scenes/Team";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="App">
            <Box display={"flex"}>
              <Box height={"100% !important"}>
                <Sidebarr />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/barchart" element={<BarChart />} />
                  <Route path="/piechart" element={<PieChart />} />
                  <Route path="/contacts" element={<Contact />} />
                  <Route path="/profile" element={<Form />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/linechart" element={<Line />} />
                  <Route path="/team" element={<Team />} />
                </Routes>
              </Box>
            </Box>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
