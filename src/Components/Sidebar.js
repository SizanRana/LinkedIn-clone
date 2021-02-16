import { Avatar } from "@material-ui/core";
import React from "react";
import "../CSS/Sidebar.css";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixd=MXwxMjA3fDBBMHxleHBsb3JlLWZlZWR8MXx8fGVufDBBfHw%3D&w=1000&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar" />
        <h2> {user.displayName} </h2>
        <h4> {user.email} </h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewwed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,522</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("softwareengineering")}
        {recentItems("design")}
        {recentItems("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
