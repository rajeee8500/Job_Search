import React from "react";
import EmployerFalse01TrueFalseF from "../EmployerFalse01TrueFalseF/EmployerFalse01TrueFalseF";
import "./FeaturedCompaniesContainer.css";

const FeaturedCompaniesContainer = () => {
  return (
    <div className="featured-companies">
      <div className="top-companies">Top companies</div>
      <div className="frame-parent2">
        <div className="employerfalse01truefalsef-parent">
          <EmployerFalse01TrueFalseF />
          <EmployerFalse01TrueFalseF />
          <EmployerFalse01TrueFalseF />
        </div>
        <div className="employerfalse01truefalsef-parent">
          <EmployerFalse01TrueFalseF />
          <EmployerFalse01TrueFalseF />
          <EmployerFalse01TrueFalseF />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompaniesContainer;
