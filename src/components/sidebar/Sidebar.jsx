import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { MapOutlined, SignalCellularNoSimOutlined, SourceOutlined, TrackChangesOutlined, WifiCalling3Rounded } from "@mui/icons-material";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">AquaTech</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Principal Aquifer</span>
          </li>
          </Link>
          <p className="title">MANAGE</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>View Entries</span>
            </li>
          </Link>
          <Link to="/aquifers" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Acquifers</span>
            </li>
          </Link>
          <li>
            <SourceOutlined className="icon" />
            <span>About</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Statistics</span>
          </li>
          <li>
            <TrackChangesOutlined className="icon" />
            <span>Simulation</span>
          </li>
          <Link to="/globalmaps" style={{ textDecoration: "none" }}>
          <li>
            <MapOutlined className="icon" />
            <span>Global Maps</span>
          </li>
          </Link>
          

          <p className="title">OPERATIONS</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Acquifer Reports</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
