import React from "react";
import "../ui/selectDriver.scss";
import { driverInfoData } from "../../SearchDriverSection/functional/driverInfoData";
import { PhoneContainer } from "../../common/icons/Phone/functional/PhoneContainer";
import { NameContainer } from "../../common/icons/Name/functional/NameContainer";
import { TruckNumberContainer } from "../../common/icons/TruckNumber/functional/TruckNumberContainer"
export const SelectDriverUI = ({searchByNumber, filteredData,node }) => {
  return (
    <div className="SelectDriver" ref = {node}> 
      <span className="SelectDriver__Span">SEARCH BY</span>
      <div className="ParagWrapper">
        <div className = "IconPwrapper">
          <PhoneContainer />
          <p onClick={searchByNumber} className="Parag">Phone Number</p>
        </div>
        <div className = 'IconPwrapper'>
          <NameContainer/>
        <p className="Parag">Name</p>
        </div>
        <div className = 'IconPwrapper'>
          <TruckNumberContainer/>
        <p className="Parag">TruckNumber</p>
        </div>
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
