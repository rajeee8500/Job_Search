import React from "react";
import Feature from "../Feature/Feature";
import "./JobFilterSection.css";
import image2 from "../../Assests/image2.png";
import image3 from "../../Assests/image3.png";
import image4 from "../../Assests/image4.png";

const JobFilterSection = () => {
  return (
    <div className="info-parent">
      <div className="info1">
        <div className="find-a-job-that-suits-your-int-parent">
          <div className="find-a-job">{`Find a job that suits your interest & skills.`}</div>
          <div className="aliquam-vitae-turpis">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </div>
        </div>
        <div className="search1">
          <div className="search2">
            <div className="input-field-parent">
              <div className="input-field">
                <div className="job-tittle-keyword1">
                  Job tittle, Keyword...
                </div>
                <img src={image2} className="fimap-pin-icon" alt="" />
              </div>
              <div className="frame-item" />
              <div className="input-field1">
                <div className="job-tittle-keyword1">Your Location</div>
                <img src={image3} className="fimap-pin-icon" alt="" />
              </div>
            </div>
            <div className="button3">
              <div className="primary2">Find Job</div>
            </div>
          </div>
          <div className="suggestion">
            <div className="suggestion1">Suggestion:</div>
            <div className="designer"> Designer,</div>
            <div className="designer"> Programing,</div>
            <div className="digital-marketing"> Digital Marketing,</div>
            <div className="designer"> Video,</div>
            <div className="designer"> Animation.</div>
          </div>
        </div>
      </div>
      <img src={image4} className="illustration-icon" alt="" />
      <div className="fun-fact">
        <Feature
          briefcaseDuotone1="/briefcaseduotone-1.svg"
          prop="1,75,324"
          liveJob="Live Job"
        />
        <Feature
          briefcaseDuotone1="/buildingsduotone-1.svg"
          prop="97,354"
          liveJob="Companies"
          propBoxShadow="0px 12px 48px rgba(0, 44, 109, 0.1)"
          propBackgroundColor="#0a65cc"
        />
        <Feature
          briefcaseDuotone1="/usersduotone-1.svg"
          prop="38,47,154"
          liveJob="Candidates"
          propBoxShadow="unset"
          propBackgroundColor="#e7f0fa"
        />
        <Feature
          briefcaseDuotone1="/briefcaseduotone-1.svg"
          prop="7,532"
          liveJob="New Jobs"
          propBoxShadow="unset"
          propBackgroundColor="#e7f0fa"
        />
      </div>
    </div>
  );
};

export default JobFilterSection;
