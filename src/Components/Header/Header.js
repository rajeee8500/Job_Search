import React from "react";
import "./Header.css";
import briefcase from "../../Assests/briefcase.png";
import image1 from "../../Assests/image1.png";
import image2 from "../../Assests/image2.png";

const Header = () => {
  return (
    <div className="navigation">
      {/* <div className="frame-parent">
        <div className="nav-link-parent">
          <div className="nav-link">
            <div className="home">Home</div>
          </div>
          <div className="nav-link1">
            <div className="english">Find Job</div>
          </div>
          <div className="nav-link1">
            <div className="english">Employers</div>
          </div>
          <div className="nav-link1">
            <div className="english">Candidates</div>
          </div>
          <div className="nav-link1">
            <div className="english">Pricing Plans</div>
          </div>
          <div className="nav-link1">
            <div className="english">Customer Supports</div>
          </div>
        </div>
        <div className="frame-group">
          <div className="phonecall-parent">
            <img className="phonecall-icon1" alt="" src="/phonecall.svg" />
            <div className="home">+1-202-555-0178</div>
          </div>
          <div className="nav-link6">
            <img className="image-1-icon" alt="" src="/image-1@2x.png" />
            <div className="english-parent">
              <div className="english">English</div>
              <img
                className="fichevron-down-icon"
                alt=""
                src="/fichevrondown.svg"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="navigation1">
        <div className="logo-parent">
          <div className="phonecall-parent">
            <img
              src={briefcase}
              className="briefcase-1-icon1"
              alt="briefcase"
            />
            <div className="jobpilot1">Jobpilot</div>
          </div>
          <div className="search">
            <div className="frame-container">
              <div className="image-1-parent">
                <img src={image1} className="image-1-icon1" alt="" />
                <div className="home">India</div>
              </div>
              <div className="frame-child" />
              <div className="fisearch-parent">
                <img src={image2} className="fisearch-icon" alt="" />
                <div className="job-tittle-keyword">
                  Job tittle, keyword, company
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <div className="button1">
            <div className="primary">Sign in</div>
          </div>
          <div className="button2">
            <div className="primary">Post a Jobs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
