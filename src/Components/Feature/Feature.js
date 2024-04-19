import React from "react";
import { useMemo } from "react";
import "./Feature.css";
import briefcase from "../../Assests/briefcase.png";

const Feature = ({
  briefcaseDuotone1,
  prop,
  liveJob,
  propBoxShadow,
  propBackgroundColor,
}) => {
  const featureStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const iconStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="feature" style={featureStyle}>
      <div className="icon" style={iconStyle}>
        <img className="briefcase-duotone-1-icon" alt="" src={briefcase} />
      </div>
      <div className="info">
        <div className="div8">{prop}</div>
        <div className="live-job">{liveJob}</div>
      </div>
    </div>
  );
};

export default Feature;
