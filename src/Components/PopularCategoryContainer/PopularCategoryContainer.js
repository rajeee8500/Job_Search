import React from "react";
import "./PopularCategoryContainer.css";
import image7 from "../../Assests/image7.png";
import image8 from "../../Assests/image8.png";
import image9 from "../../Assests/image9.png";
import image10 from "../../Assests/image10.png";
import image11 from "../../Assests/image11.png";
import image12 from "../../Assests/image12.png";
import image13 from "../../Assests/image13.png";
const PopularCategoryContainer = () => {
  return (
    <div className="category">
      <div className="heading">
        <div className="popular-category">Popular category</div>
        <div className="button4">
          <div className="primary3">View All</div>
        </div>
      </div>
      <div className="frame-div">
        <div className="category-parent">
          <div className="category1">
            <div className="icon2">
              <img className="pen-nib-duotone-1-icon" alt="" src={image7} />
            </div>
            <div className="info3">
              <div className="graphics-design">{`Graphics & Design`}</div>
              <div className="open-position">357 Open position</div>
            </div>
          </div>
          <div className="category1">
            <div className="icon2">
              <img className="code-duotone-1-icon" alt="" src={image8} />
            </div>
            <div className="info3">
              <div className="graphics-design">{`Code & Programing`}</div>
              <div className="open-position">312 Open position</div>
            </div>
          </div>
          <div className="category1">
            <div className="icon2">
              <img className="pen-nib-duotone-1-icon" alt="" src={image9} />
            </div>
            <div className="info3">
              <div className="graphics-design">Digital Marketing</div>
              <div className="open-position">297 Open position</div>
            </div>
          </div>
          <div className="category1">
            <div className="icon2">
              <img className="code-duotone-1-icon" alt="" src={image10} />
            </div>
            <div className="info3">
              <div className="graphics-design">{`Video & Animation`}</div>
              <div className="open-position">247 Open position</div>
            </div>
          </div>
        </div>
        <div className="category-parent">
          <div className="category1">
            <div className="icon2">
              <img className="code-duotone-1-icon" alt="" src={image13} />
            </div>
            <div className="info3">
              <div className="graphics-design">{`Music & Audio`}</div>
              <div className="open-position">204 Open position</div>
            </div>
          </div>
          <div className="category1">
            <div className="icon2">
              <img className="pen-nib-duotone-1-icon" alt="" src={image11} />
            </div>
            <div className="info3">
              <div className="graphics-design">{`Account & Finance`}</div>
              <div className="open-position">167 Open position</div>
            </div>
          </div>
          <div className="category7">
            <div className="icon2">
              <img className="code-duotone-1-icon" alt="" src={image12} />
            </div>
            <div className="info3">
              <div className="graphics-design">{`Health & Care`}</div>
              <div className="open-position">125 Open position</div>
            </div>
          </div>
          <div className="category8">
            <div className="icon9">
              <img className="code-duotone-1-icon" alt="" src={image12} />
            </div>
            <div className="info3">
              <div className="graphics-design">{`Data & Science`}</div>
              <div className="open-position">57 Open position</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategoryContainer;
