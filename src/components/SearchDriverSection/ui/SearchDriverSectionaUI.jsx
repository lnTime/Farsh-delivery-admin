import React from "react";
import "./searchDriver.scss";

export const SearchDriverSectionUI = ({ driverInfo }) => {
  return (
    <div className="SearchDriverSection">
      <div className="WrapInput">
        <input
          placeholder="Search Driver"
          className="SearchDriverSection-Input"
        />
        <div className="SearchIcon"></div>
      </div>
      <span className="Span">Drivers near Pickup location</span>
      {driverInfo}
    </div>
  );
};
