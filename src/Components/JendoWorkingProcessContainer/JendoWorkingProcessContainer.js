import React from "react";
import CreateAccount from "../CreateAccount/CreateAccount";
import "./JendoWorkingProcessContainer.css";

const JendoWorkingProcessContainer = () => {
  return (
    <div className="jendo-working-process">
      <div className="how-jobpilot-work">How jobpilot work</div>
      <div className="process">
        <CreateAccount
          userPlusDuotone1="/userplusduotone-1.svg"
          createAccount="Create account"
          aliquamFacilisisEgestasSa="Aliquam facilisis egestas sapien, nec tempor leo tristique at."
        />
        <CreateAccount
          userPlusDuotone1="/cloudarrowupduotone-1.svg"
          createAccount="Upload CV/Resume"
          aliquamFacilisisEgestasSa="Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales"
          propLeft="calc(50% - 324px)"
          propBackgroundColor="#fff"
          propBackgroundColor1="#0a65cc"
        />
        <CreateAccount
          userPlusDuotone1="/magnifyingglassplusduotone-1.svg"
          createAccount="Find suitable job"
          aliquamFacilisisEgestasSa="Phasellus quis eleifend ex. Morbi nec fringilla nibh."
          propLeft="calc(50% + 12px)"
          propBackgroundColor="unset"
          propBackgroundColor1="#fff"
        />
        <CreateAccount
          userPlusDuotone1="/circlewavycheckduotone-1.svg"
          createAccount="Apply job"
          aliquamFacilisisEgestasSa="Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus."
          propLeft="calc(50% + 348px)"
          propBackgroundColor="unset"
          propBackgroundColor1="#fff"
        />
        <img className="arrows-icon" alt="" src="/arrows.svg" />
        <img className="arrows-icon1" alt="" src="/arrows1.svg" />
        <img className="arrows-icon2" alt="" src="/arrows.svg" />
      </div>
    </div>
  );
};

export default JendoWorkingProcessContainer;
