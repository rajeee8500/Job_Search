import React from "react";
import { useMemo } from "react";
import Property1Part from "../Property1Part/Property1Part";
import EmployersGoogleSizeMedium from "../EmployersGoogleSizeMedium/EmployersGoogleSizeMedium";
import "./Job.css";
import image15 from "../../Assests/image15.png";
import img16 from "../../Assests/img16.png";

const Job = ({
  techicalSupportSpecialist,
  partTime,
  propBackground,
  propBackgroundColor,
  propOverflow,
}) => {
  const jobStyle = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: propBackgroundColor,
      overflow: propOverflow,
    };
  }, [propBackground, propBackgroundColor, propOverflow]);

  return (
    <div className="job" style={jobStyle}>
      <div className="heading1">
        <div className="techical-support-specialist">
          {techicalSupportSpecialist}
        </div>
        <div className="type-parent">
          <Property1Part partTime="Part-time" />
          <div className="salary-20000-">Salary: $20,000 - $25,000</div>
        </div>
      </div>
      <div className="company">
        <EmployersGoogleSizeMedium employersGoogleSizeMediumPadding="12px 24px" />
        <div className="info11">
          <div className="google-inc">Google Inc.</div>
          <div className="loaction">
            <img className="mappin-icon1" alt="" src={img16} />
            <div className="dhaka-bangladesh">Dhaka, Bangladesh</div>
          </div>
        </div>
        <img className="bookmarksimple-icon1" alt="" src={image15} />
      </div>
    </div>
  );
};

export default Job;
