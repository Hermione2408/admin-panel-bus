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
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
const Home = () => {
  let user_type = ['collector', 'supervisor', 'admin', 'user']
  let currentUser = 'guest'
  let widgetData;
  switch (currentUser) {
    case 'collector':
      widgetData = [
        {
          title: "SEARCH ACQUIFER",
          isMoney: false,
          link: "Search Acquifer",
          icon: (
            <SearchOutlined
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        },
        {
          title: "WORLD ACQUIFERS",
          isMoney: false,
          link: "View all Acquifers",
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
          title: "COUNTRY ACQUIFERS",
          isMoney: false,
          link: "See details",
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
          title: "USERS",
          isMoney: false,
          link: "See all users",
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
    case 'supervisor':
      widgetData = [
        {
          title: "SEARCH ACQUIFER",
          isMoney: false,
          link: "Search Acquifer",
          icon: (
            <SearchOutlined
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        },
        {
          title: "WORLD ACQUIFERS",
          isMoney: false,
          link: "View all Acquifers",
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
          title: "COUNTRY ACQUIFERS",
          isMoney: false,
          link: "See details",
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
          title: "USERS",
          isMoney: false,
          link: "See all users",
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
          title: "SEARCH ACQUIFER",
          isMoney: false,
          link: "Search Acquifer",
          icon: (
            <SearchOutlined
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        },
        {
          title: "WORLD ACQUIFERS",
          isMoney: false,
          link: "View all Acquifers",
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
          title: "COUNTRY ACQUIFERS",
          isMoney: false,
          link: "See details",
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
          title: "USERS",
          isMoney: false,
          link: "See all users",
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
          title: "SEARCH ACQUIFER",
          isMoney: false,
          link: "Search Acquifer",
          icon: (
            <SearchOutlined
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        },
        {
          title: "WORLD ACQUIFERS",
          isMoney: false,
          link: "View all Acquifers",
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
          title: "COUNTRY ACQUIFERS",
          isMoney: false,
          link: "See details",
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
          title: "USERS",
          isMoney: false,
          link: "See all users",
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
    default:
      widgetData = [
        {
          title: "SEARCH ACQUIFER",
          isMoney: false,
          link: "Search Acquifer",
          icon: (
            <SearchOutlined
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        },
        {
          title: "WORLD ACQUIFERS",
          isMoney: false,
          link: "View all Acquifers",
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
          title: "COUNTRY ACQUIFERS",
          isMoney: false,
          link: "See details",
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
          title: "USERS",
          isMoney: false,
          link: "See all users",
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
