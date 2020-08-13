import React from "react";
import "../ui/selectDriver.scss";
import { driverInfoData } from "../../SearchDriverSection/functional/driverInfoData";
import { PhoneContainer } from "../../common/icons/Phone/functional/PhoneContainer";
export const SelectDriverUI = ({ filteredData }) => {

  return (
    <div className="SelectDriver">
      <span className="SelectDriver__Span">SEARCH BY</span>
      <div className="ParagWrapper">
        <div>
          <PhoneContainer />
          <p className="Parag">Phone Number</p>
        </div>
        <p className="Parag">Name</p>
        <p className="Parag">TruckNumber</p>
      </div>
      <span className="SelectDriver__Span">RECENT</span>
      {filteredData.map((data) => {
        return (
          <div key={data.id} className="InfoWrapper">
            <div className="DriverPhoto">{data.img}</div>
            <p className="Mobile">{data.mobile}</p>
            <span className="NameCarNumber">{data.name}</span>
          </div>
        );
      })}
    </div>
  );
};
