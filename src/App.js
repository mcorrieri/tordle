import "./App.css";
// import Center from "./Components/Center";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

function App() {
  return (
    <div className="App">
      <div className="Nav-bar">
        <div className="menu-left">
          <DensityMediumIcon />
          <HelpOutlineIcon />
        </div>
        <div className="title">TURDLE</div>
        <div className="menu-right">
          <BarChartIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default App;
