import React from "react";
import "../CSS/Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Wiidgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4> {heading} </h4>
        <p> {subtitle} </p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("This is Build using React.js", "Reactjs the Js Library")}
      {newsArticle("Tesla hits new Highs", "Cars and auto --800 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto --5000 readers")}
      {newsArticle("Is Redux too good", "Code --200 readers")}
      {newsArticle(
        "TNepal the Brave Country",
        "Country and soldiers --80000 readers"
      )}
    </div>
  );
}

export default Wiidgets;
