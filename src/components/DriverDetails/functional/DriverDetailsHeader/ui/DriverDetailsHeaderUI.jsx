import React from "react";
import "./DriverDetailsHeader.scss";
import { DriverBlackContainer } from "../../../../common/icons/DriverBlack/functional/DriverBlackContainer";
import { NotificationAndProfileContainer } from "../../../../common/icons/NotificationAndProfile/functional/NotificationAndProfileContainer";

export const DriverDetailsHeaderUI = ({name}) => {

  return (
    <header>
      <div className="DriverDetailsLeftSide">
        <div className="DriverDetailsLeftSideInformation">
          <div className="DriverDetailsLeftSideInformation-Div">
            <div>
              <DriverBlackContainer />
              <span className="DriverDetailsLeftSideInformation-DriverName">
                {name}
              </span>
            </div>
            <div>
              <span className="DriverDetailsLeftSideInformation-SectionName">
                Home &#x3e; Drivers
              </span>
            </div>
          </div>
          <div className="DriverDetailsLeftSideActions">
            <button className="DriverDetailsLeftSideActions-Button DriverDetailsLeftSideActions-Button_black">
              Assign task
            </button>
            <button className="DriverDetailsLeftSideActions-Button DriverDetailsLeftSideActions-Button_white">
              Message
            </button>
          </div>
        </div>
      </div>
      <NotificationAndProfileContainer costumClass = 'Right' />
    </header>
  );
};
