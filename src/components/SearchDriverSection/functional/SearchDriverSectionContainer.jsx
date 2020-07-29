import React from "react";
import { SearchDriverSectionUI } from "../ui/SearchDriverSectionaUI";
import { useState, useEffect } from "react";
import { driverInfoData } from "./driverInfoData";
import { LocationContainer } from "../../common/icons/Location/functional/LocationContainer";
import { MessageIconContainer } from "../../common/icons/MessageIcon/functional/MessageIconContainer";

export const SearchDriverContainer = () => {
  const [driverInfo, setDriverInfo] = useState(null);
  useEffect(() => {
    setDriverInfo(
      driverInfoData.map((data) => {
        return (
          <div key={data.id} className="InfoBlock">
            <div className="InfoWrapper">
              <input className="Radio" type="radio" name="gender"></input>
              <div className="DriverPhoto"></div>
              <div>
                <p className="Mobile">{data.mobile}</p>
                <span className="NameCarNumber">{data.name}</span>
              </div>
            </div>
            <div className="Icons-Block">
              <LocationContainer />
              <MessageIconContainer />
            </div>
          </div>
        );
      })
    );
  }, []);
  return <SearchDriverSectionUI driverInfo={driverInfo} />;
};
