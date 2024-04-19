import React from "react";
import { useMemo } from "react";
import "./EmployersGoogleSizeMedium.css";
import image14 from "../../Assests/image14.png";

const EmployersGoogleSizeMedium = ({ employersGoogleSizeMediumPadding }) => {
  const employersGoogleSizeMediumStyle = useMemo(() => {
    return {
      padding: employersGoogleSizeMediumPadding,
    };
  }, [employersGoogleSizeMediumPadding]);

  return (
    <div
      className="employersgoogle-sizemedium"
      style={employersGoogleSizeMediumStyle}
    >
      <img className="employers-logo-icon" alt="" src={image14} />
    </div>
  );
};

export default EmployersGoogleSizeMedium;
