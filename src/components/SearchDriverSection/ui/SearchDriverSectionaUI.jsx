import React from "react";
import "./searchDriver.scss";
import { SearchContainer } from "../../common/icons/Search/functional/SearchContainer";
import { SelectDriverContainer } from "../../SelectDriver/functional/SelectDriverContainer";

export const SearchDriverSectionUI = ({ driverSearch, driverInfo,handleFocus,handleChange,term }) => {

  return (
    <div className="SearchDriverSection">
      <div className="WrapInput">
        <input 
          value = {term} 
          onChange = {handleChange}
          onFocus = {handleFocus}
          placeholder="Search Driver"
          className="SearchDriverSection-Input"
        />
        <div className="SearchIcon">
          <SearchContainer />
        </div>
      </div>
     
      
      {driverSearch ? null : <span className="Span">Drivers near Pickup location</span>}
      {driverSearch ? <SelectDriverContainer term = {term}/> : driverInfo}

    </div>
  );
};
