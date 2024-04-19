import React from "react";
import "./TestimonialCard1.css";
import img18 from "../../Assests/img18.png";
import img19 from "../../Assests/img19.png";
import img20 from "../../Assests/img20.png";
const TestimonialCard1 = ({
  maurisEgetLoremOdioMauris,
  image,
  johnWick,
  creativeDirector,
}) => {
  return (
    <div className="testimonial-card">
      <div className="top">
        <div className="rating">
          <img className="star-1-icon" alt="" src={img18} />
          <img className="star-1-icon" alt="" src={img18} />
          <img className="star-1-icon" alt="" src={img18} />
          <img className="star-1-icon" alt="" src={img18} />
          <img className="star-1-icon" alt="" src={img18} />
        </div>
        <div className="mauris-eget-lorem">{maurisEgetLoremOdioMauris}</div>
      </div>
      <div className="bottom">
        <div className="customer">
          <img className="image-icon" alt="" src={img19} />
          <div className="info13">
            <div className="john-wick">{johnWick}</div>
            <div className="creative-director">{creativeDirector}</div>
          </div>
        </div>
        <img className="quote-icon" alt="" src={img20} />
      </div>
    </div>
  );
};

export default TestimonialCard1;
