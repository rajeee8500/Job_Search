import React from "react";
import "./Tracker.css";

const Tracker = ({ div, div1 }) => {
  return (
    <div className="tracker">
      <div className="div" />
      <div className="div1" />
      {!div && <div className="div1" />}
      <div className="div3" />
      {!div1 && <div className="div1" />}
      <div className="div" />
      <div className="div1" />
    </div>
  );
};

export default Tracker;
