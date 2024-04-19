import React from "react";
import TestimonialCard1 from "../TestimonialCard1/TestimonialCard1";
import Tracker from "../Tracker/Tracker";
import "./TestimonialCard.css";

const TestimonialCard = () => {
  return (
    <div className="testimonial">
      <div className="clients-testimonial">Clients Testimonial</div>
      <div className="testimonial1">
        <div className="testimonial2">
          <TestimonialCard1
            maurisEgetLoremOdioMauris="“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”"
            image="/image@2x.png"
            johnWick="Robert Fox"
            creativeDirector="UI/UX Designer"
          />
          <TestimonialCard1
            maurisEgetLoremOdioMauris="“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”"
            image="/image@2x.png"
            johnWick="Bessie Cooper"
            creativeDirector="Creative Director"
          />
          <TestimonialCard1
            maurisEgetLoremOdioMauris="“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”"
            image="/image@2x.png"
            johnWick="Jane Cooper"
            creativeDirector="Photographer"
          />
        </div>
      </div>
      <Tracker div div1 />
    </div>
  );
};

export default TestimonialCard;
