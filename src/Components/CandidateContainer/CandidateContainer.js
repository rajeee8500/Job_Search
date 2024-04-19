import React from "react";
import { useMemo } from "react";
import "./CandidateContainer.css";

const CandidateContainer = ({
  ctaText,
  descriptionText,
  propBackgroundImage,
  propColor,
  propColor1,
}) => {
  const candidateEmployersStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const becomeACandidateStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="candidate-employers" style={candidateEmployersStyle}>
      <div className="heading3">
        <div className="become-a-candidate" style={becomeACandidateStyle}>
          {ctaText}
        </div>
        <div className="lorem-ipsum-dolor" style={loremIpsumDolorStyle}>
          {descriptionText}
        </div>
      </div>
      <div className="button7">
        <div className="register-now">Register now</div>
      </div>
    </div>
  );
};

export default CandidateContainer;
