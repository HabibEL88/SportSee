import React from "react";
import MaterialIcons from "./MaterialIcons";

const Card = ({ Key, value }) => {
  const logo = require(`../assets/${Key}.webp`);
  let text;
  let bgColor;
  let unit = "g";
  switch (Key) {
    case "calorieCount":
      text = "Calories";
      bgColor = "#FF00001A";
      unit = "kCal";
      break;
    case "proteinCount":
      text = "Proteines";
      bgColor = "#4AB8FF1A";
      break;
    case "carbohydrateCount":
      text = "Glucides";
      bgColor = "#F9CE231A";
      break;
    case "lipidCount":
      text = "Lipides";
      bgColor = "#FD51811A";
      break;
    default:
      break;
  }
  return (
    <div className="card">
      <MaterialIcons bgcolor={bgColor} icon={logo} />
      <div className="content">
        <p className="info">{`${value}${unit}`}</p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
