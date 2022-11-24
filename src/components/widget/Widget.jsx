import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { ListAltOutlined, SearchOffOutlined, SearchOutlined } from "@mui/icons-material";

const Widget = (props) => {
  // let data;

  //temporary
  /* const amount = 100;
  const diff = 20;
 */
  /* switch (type) {
    case "user":
      data = {
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
      };
      break;
    case "order":
      data = {
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
      };
      break;
    case "earning":
      data = {
        title: "SEARCH ACQUIFER",
        isMoney: false,
        link: "Search Acquifer",
        icon: (
          <SearchOutlined
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
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
      };
      break;
    default:
      break;
  } */
  const {data} = props
  console.log(data,"dataa")
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
        </span>
        {data.link && <span className="link">{data.link}</span>}

        {data.isCount && <span className="count">{data.count}</span>}
      </div>
      {!data.isCount && <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          
        </div>
        {data.icon}
      </div>}

    </div>
  );
};

export default Widget;
