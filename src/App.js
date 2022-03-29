import "./App.css";
import React, { useState } from "react";
// import Center from "./Components/Center";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Grid from "./Components/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <div className="Nav-bar">
        <div className="menu-left">
          <Button onClick={handleOpen}>
            <DensityMediumIcon />
          </Button>
          <HelpOutlineIcon />
        </div>
        <div className="title">TURDLE</div>
        <div className="menu-right">
          <BarChartIcon />
          <SettingsIcon />
        </div>
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
}

export default App;
