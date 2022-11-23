import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { ListAltOutlined, SearchOffOutlined, SearchOutlined } from "@mui/icons-material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useContext} from "react";
import { UserContext } from "../../context/userContext";

const Home = () => {
  const { userDetails } = useContext(UserContext);
  let currentUser = userDetails && userDetails.userType ?  userDetails.userType.toLowerCase() : 'guest'
  let widgetData;
  switch (currentUser) {
    case 'collector':
      widgetData = [
        {
          title: "No. of pending aquifer to plot",
          isMoney: false,
          isCount:true,
          count: 34,
          icon: (
            <SearchOutlined
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        },
        {
          title: "No. of principal aquifers",
          isMoney: false,
          isCount:true,
          count: 11,
          icon: (
            <ListAltOutlined
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        },
        {
          title: "Alerts",
          isMoney: false,
          isCount:true,
          count: 98,
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        }
      ];
      break;
    case 'supervisor':
      widgetData = [
        {
          title: "No. of data collectors",
          isMoney: false,
          isCount:true,
          count: 23,
          icon: (
            <SearchOutlined
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        },
        {
          title: "No. of principal aquifers",
          isMoney: false,
          isCount:true,
          count: 21,
          icon: (
            <ListAltOutlined
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        },
        {
          title: "No. of pending tasks",
          isMoney: false,
          isCount:true,
          count: 17,
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        },
        {
          title: "Alerts",
          isMoney: false,
          isCount:true,
          count: 76,
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        },
      ];
      break;
    case 'admin':
      widgetData = [
        {
          title: "No. of supervisors",
          isMoney: false,
          isCount:true,
          count: 13,
          icon: (
            <SearchOutlined
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        },
        {
          title: "No. of principal aquifers",
          isMoney: false,
          isCount:true,
          count: 11,
          icon: (
            <ListAltOutlined
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        },
        {
          title: "No. of pending tasks",
          isMoney: false,
          isCount:true,
          count: 17,
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        },
        {
          title: "Alerts",
          isMoney: false,
          isCount:true,
          count: 76,
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        },
      ];
      break;
    case 'user':
      widgetData = [
        {
          title: "No. of Aquifers",
          isMoney: false,
          isCount:true,
          count:34,
          icon: (
            <SearchOutlined
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        },
        {
          title: "Alerts",
          isMoney: false,
          isCount:true,
          count:26,
          icon: (
            <ListAltOutlined
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        },
        
      ];
      break;
    default:
      widgetData = [
        {
          title: "No. of Aquifer",
          isMoney: false,
          isCount:true,
          count:19,
          icon: (
            <SearchOutlined
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        },
      ];
      break;
  }
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {widgetData.map((el)=>{
            return <Widget data={el} />
          })}
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Statistics:-)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Trackings:-</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
