import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState, useEffect } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationsArray, setNotificationsArray] = useState([
    {
      heading: "Alert1",
      subHeading: "Alert2",
      img: NotificationsNoneOutlinedIcon,
    },
    {
      heading: "Alert2",
      subHeading: "Lorema iapsuafsn afnjafnajfsa",
      img: NotificationsNoneOutlinedIcon,
    },
    {
      heading: "Alert3",
      subHeading: "Alert2 Lorema iapsuafsn afnjafnajfsa",
      img: NotificationsNoneOutlinedIcon,
    },
    {
      heading: "Alert4",
      subHeading: "Alert2asfsa Lorema iapsuafsn afnjafnajfsa",
      img: NotificationsNoneOutlinedIcon,
    },
    {
      heading: "Alert5",
      subHeading: "Lorema iapsuafsn afnjafnajfsa",
      img: NotificationsNoneOutlinedIcon,
    },
    {
      heading: "Alert6",
      subHeading: "Alert2as",
      img: NotificationsNoneOutlinedIcon,
    },
  ]);
  const removeNotification = (index) => {
    let notificationsCopy = notificationsArray;
    notificationsCopy.splice(index, 1);
    setNotificationsArray(notificationsCopy);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          {/* <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div> */}
          <div className="item">
            <NotificationsNoneOutlinedIcon
              className="icon"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            <div className="counter">1</div>
            {showNotifications && (
              <div className="notifications">
                <div className="a-wfull">
                  <CloseOutlinedIcon
                    className="icon cross-icon"
                    onClick={() => setShowNotifications(false)}
                  />
                </div>
                {notificationsArray &&
                  notificationsArray.map((el, i) => {
                    return (
                      <>
                        <div className="notificaion a-flex a-aic" key={i}>
                          <el.img className="icon" />
                          <div className="a-flex a-fdc">
                            <div>{el.heading}</div>
                            <div>{el.subHeading}</div>
                          </div>
                          <CloseOutlinedIcon
                            className="icon cross-icon"
                            onClick={(i) => removeNotification(i)}
                          />
                        </div>
                      </>
                    );
                  })}
              </div>
            )}
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
