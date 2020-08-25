import React from "react";
import "./SearchDriverSection.scss";
import { SearchContainer } from "../../common/icons/Search/functional/SearchContainer";
import { SelectDriverContainer } from "../../SelectDriver/functional/SelectDriverContainer";
import { SearchPhoneContainer } from '../../SearchPhone/functional/SearchPhoneContainer'
import { LocationContainer } from "../../common/icons/Location/functional/LocationContainer";
import { MessageIconContainer } from "../../common/icons/MessageIcon/functional/MessageIconContainer";

export const SearchDriverSectionUI = ({ searchByNumber, isSelected, inputRef, driverSearch, driverInfo, handleChange, term, node, setDriverSearch, searchPhone }) => {

  return (
    <div className="SearchDriverSection">
      <div className="WrapInput">
        <input
          value={term}
          onChange={handleChange}
          onFocus={(e) => setDriverSearch(true)}
          placeholder="Search Driver"
          className="SearchDriverSection-Input"
          ref={inputRef}
        />
        <div className="SearchIcon">
          <SearchContainer />
        </div>
      </div>
      {driverSearch ? <SelectDriverContainer searchByNumber={searchByNumber} node={node} term={term} /> :

        isSelected ? <>
          <div className='AssigneDriver'>
            <div className='alignCentr' >
              <input className="Radio" type="radio" name="gender"></input>
              <label className='Span Span_withoutMargin'>Sellect All</label>
            </div>
            <div>
              <span className='Span Span_withoutMargin_light'>10 Drivers selected</span>
              <button className='AssigneButton'>Assigne</button>
            </div>
          </div>
          <div className="InfoBlock InfoBlock_marginBottom ">
            <div className="InfoWrapper">
              <input className="Radio" type="radio" name="gender"></input>
              <div className="DriverPhoto"></div>
              <div className='InfoWrapper_modifierd'>
                <p className="Mobile">(486) 032-4045</p>
                <span className="NameCarNumber">Tim Barnes | YUK-7812</span>
              </div>
            </div>
            <div className="Icons-Block">
              <LocationContainer />
              <MessageIconContainer />
            </div>
          </div>
          <span className="Span">Drivers near Pickup location</span>
          {driverInfo}</> : driverInfo}
      {searchPhone ? <SearchPhoneContainer /> : null}
    </div>
  );
};
