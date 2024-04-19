import React from "react";
import Logo from "../../Components/Logo/Logo";
import "./JobpilotForm.css";
import img21 from "../../Assests/img21.png";
import img22 from "../../Assests/img22.png";
import img23 from "../../Assests/img23.png";
import img24 from "../../Assests/img24.png";
const JobpilotForm = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="jendo">
          <Logo briefcase1="/briefcase-11.svg" jobpilotColor="#fff" />
          <div className="phone-number-parent">
            <div className="phone-number">
              <div className="call-now">Call now:</div>
              <div className="div9"> (+91) 987654321</div>
            </div>
            <div className="elgin-st-celina">
              7-342,road no 36, Banjara hills,Hyderabad, Telangana
            </div>
          </div>
        </div>
        <div className="com">
          <div className="quick-link">Quick Link</div>
          <div className="link">
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">About</div>
            </div>
            <div className="footer-link">
              <div className="contact">Contact</div>
            </div>
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Pricing</div>
            </div>
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Blog</div>
            </div>
          </div>
        </div>
        <div className="candidate">
          <div className="quick-link">Candidate</div>
          <div className="link">
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Browse Jobs</div>
            </div>
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Browse Employers</div>
            </div>
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Candidate Dashboard</div>
            </div>
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Saved Jobs</div>
            </div>
          </div>
        </div>
        <div className="employers">
          <div className="quick-link">Employers</div>
          <div className="link">
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Post a Job</div>
            </div>
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Browse Candidates</div>
            </div>
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Employers Dashboard</div>
            </div>
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Applications</div>
            </div>
          </div>
        </div>
        <div className="support">
          <div className="quick-link">Support</div>
          <div className="link">
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Faqs</div>
            </div>
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Privacy Policy</div>
            </div>
            <div className="footer-link">
              <img
                className="fiarrow-right-icon5"
                alt=""
                src="/fiarrowright1.svg"
              />
              <div className="employers-dashboard">Terms & Conditions</div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="jobpilot-job">
          @ 2021 Jobpilot - Job Portal. All rights Rserved
        </div>
        <div className="social-media">
          <img className="vector-icon" alt="" src={img21} />
          <img className="youtube-1-icon" alt="" src={img22} />
          <img className="youtube-1-icon" alt="" src={img23} />
          <img className="youtube-1-icon" alt="" src={img24} />
        </div>
      </div>
    </div>
  );
};

export default JobpilotForm;
