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
import Login from "../../pages/login/Login"
import PollRoundedIcon from '@mui/icons-material/PollRounded';
import { Link } from "react-router-dom";

const Home = () => {
  const { userDetails,showLogin } = useContext(UserContext);
  console.log(showLogin,"00000000")
  let currentUser = userDetails && userDetails.userType ?  userDetails.userType.toLowerCase() : 'guest'
  let widgetData;
  switch (currentUser) {
    case 'admin':
      widgetData = [
        {
          title: "No. of aquifer where depletion is greater than 50%",
          isMoney: false,
          isCount:true,
          count: 34,
          colorCode:true,
          total:141,
        },
        {
          title: "No. of supervisors",
          isMoney: false,
          isCount:true,
          count: 11,
          
        },
        {
          title: "Generate survey",
          isMoney: false,
          isCount:true,
          count: 98,
          icon: (
            <Link to="/survey">
            <PollRoundedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
            </Link>
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
          count: 6,
          
        },
        {
          title: "No. of aquifers depletion greather than 50%",
          isMoney: false,
          isCount:true,
          count: 21,
          colorCode:true,
          total:141,
          
        },
        {
          title: "Data to be reviewed",
          isMoney: false,
          isCount:true,
          count: 17,
        },
        {
          title: "Alerts",
          isMoney: false,
          isCount:true,
          count: 76,
        },
      ];
      break;
    case 'collector':
      widgetData = [
        {
          title: "No. of assigned aquifers",
          isMoney: false,
          isCount:true,
          count: 13,
          
        },
        {
          title: "No. of aquifer depletion greater than 50%",
          isMoney: false,
          isCount:true,
          colorCode:true,
          total:141,
          count: 11,
          
        },
        {
          title: "Data filled",
          isMoney: false,
          isCount:true,
          count: 17,
          
        },
        {
          title: "Alerts",
          isMoney: false,
          isCount:true,
          count: 76,
          
        },
      ];
      break;
    case 'user':
      widgetData = [
        {
          title: "No. of Aquifers depltetion greater than 50% under 20km",
          isMoney: false,
          isCount:true,
          colorCode:true,
          total:141,
          count:34,
        },
        {
          title: "Open surveys",
          isMoney: false,
          isCount:true,
          count:24,
        },
        {
          title: "Quality level of water",
          isMoney: false,
          isCount:true,
          count:64,
        },
        
        {
          title: "Alerts",
          isMoney: false,
          isCount:true,
          count:26,
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
          total:141,
          colorCode:true,
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
    <>
    <div className={`home ${showLogin ?'opacity-less' :''} `}>
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
          <Chart title="Last 6 Months (Capacity Vs Month Graph)" aspect={2 / 1} />
        </div>
        {userDetails.userType === 'Supervisor' &&<div className="listContainer">
          <div className="listTitle">Latest Trackings:-</div>
          <Table />
        </div>}

      </div>
    </div>
    {showLogin && <Login />}

    </>
    
  );
};

export default Home;
