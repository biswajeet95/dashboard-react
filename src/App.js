import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import Dashboard from "./pages/Dashboard";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import ChartPage from "./pages/ChartPage";
import Department from "./pages/Department";
import History from "./pages/History";
import Patients from "./pages/Patients";
import Settings from "./pages/Settings";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />

          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/chartPage" element={<ChartPage />} />
              <Route path="/department" element={<Department />} />
              <Route path="/history" element={<History />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
