import React from "react";
import "./Property1Part.css";

const Property1Part = ({ partTime }) => {
  return (
    <div className="property-1part">
      <div className="part-time">{partTime}</div>
    </div>
  );
};

export default Property1Part;
