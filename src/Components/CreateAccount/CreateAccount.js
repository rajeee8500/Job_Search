import React from "react";
import { useMemo } from "react";
import "./CreateAccount.css";
import image5 from "../../Assests/image5.png";
const CreateAccount = ({
  userPlusDuotone1,
  createAccount,
  aliquamFacilisisEgestasSa,
  propLeft,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const createAccountStyle = useMemo(() => {
    return {
      left: propLeft,
      backgroundColor: propBackgroundColor,
    };
  }, [propLeft, propBackgroundColor]);

  const icon1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className="create-account" style={createAccountStyle}>
      <div className="icon1" style={icon1Style}>
        <img className="user-plus-duotone-1-icon" alt="" src={image5} />
      </div>
      <div className="info2">
        <div className="create-account1">{createAccount}</div>
        <div className="aliquam-facilisis-egestas">
          {aliquamFacilisisEgestasSa}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
