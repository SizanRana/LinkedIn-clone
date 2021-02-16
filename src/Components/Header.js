import React from "react";
import "../CSS/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://lh3.googleusercontent.com/proxy/OLKBrEmLlAaQzDNkMpIRhcKzh5piIX6hZdrAZKw0JjbRoUx1w86uQj-wnwnhmKTqXHlMgC6ddoZXkmr5wcSFuZUlZ_DWmXy91AspaBwaLEIgknIRPcP-51mXcjec7tSTOjI"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption avatar="true" title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;

// 59:45
