import React from "react";
import Job from "../Job/Job";
import "./FeaturedJobContainer.css";

const FeaturedJobContainer = () => {
  return (
    <div className="featured-job">
      <div className="heading2">
        <div className="featured-job1">Featured job</div>
        <div className="button5">
          <div className="primary4">View All</div>
          <img className="fiarrow-right-icon1" alt="" src="/fiarrowright.svg" />
        </div>
      </div>
      <div className="frame-parent1">
        <div className="job-parent">
          <Job
            techicalSupportSpecialist="Techical Support Specialist"
            partTime="Part-time"
          />
          <Job
            techicalSupportSpecialist="Senior UX Designer"
            partTime="Full-Time"
            propBackground="linear-gradient(90deg, #fff6e6, #fff), #fff"
            propBackgroundColor="unset"
            propOverflow="unset"
          />
          <Job
            techicalSupportSpecialist="Marketing Officer"
            partTime="Internship"
            propBackground="unset"
            propBackgroundColor="#fff"
            propOverflow="unset"
          />
        </div>
        <div className="job-parent">
          <Job
            techicalSupportSpecialist="Junior Graphic Designer"
            partTime="Internship"
            propBackground="unset"
            propBackgroundColor="#fff"
            propOverflow="hidden"
          />
          <Job
            techicalSupportSpecialist="Interaction Designer"
            partTime="Part-time"
            propBackground="unset"
            propBackgroundColor="#fff"
            propOverflow="unset"
          />
          <Job
            techicalSupportSpecialist="Project Manager"
            partTime="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
            propOverflow="unset"
          />
        </div>
        <div className="job-parent">
          <Job
            techicalSupportSpecialist="Software Engineer"
            partTime="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
            propOverflow="unset"
          />
          <Job
            techicalSupportSpecialist="Visual Designer"
            partTime="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
            propOverflow="unset"
          />
          <Job
            techicalSupportSpecialist="Project Manager"
            partTime="Full-Time"
            propBackground="linear-gradient(90deg, #fff6e6, #fff), #fff"
            propBackgroundColor="unset"
            propOverflow="unset"
          />
        </div>
        <div className="job-parent">
          <Job
            techicalSupportSpecialist="Front End Developer"
            partTime="Part-time"
            propBackground="unset"
            propBackgroundColor="#fff"
            propOverflow="unset"
          />
          <Job
            techicalSupportSpecialist="Senior UX Designer"
            partTime="Full-Time"
            propBackground="unset"
            propBackgroundColor="#fff"
            propOverflow="unset"
          />
          <Job
            techicalSupportSpecialist="Marketing Manager"
            partTime="Internship"
            propBackground="unset"
            propBackgroundColor="#fff"
            propOverflow="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobContainer;
