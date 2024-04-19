import React from "react";
import { useMemo } from "react";
import "./Logo.css";
import briefcase from "../../Assests/briefcase.png";

const Logo = ({ briefcase1, jobpilotColor }) => {
  const jobpilotStyle = useMemo(() => {
    return {
      color: jobpilotColor,
    };
  }, [jobpilotColor]);

  return (
    <div className="logo">
      <img className="briefcase-1-icon" alt="" src={briefcase} />
      <div className="jobpilot" style={jobpilotStyle}>
        Jobpilot
      </div>
    </div>
  );
};

export default Logo;
