import React, { useRef } from "react";
import { SearchDriverSectionUI } from "../ui/SearchDriverSectionaUI";
import { useState, useEffect } from "react";
import { driverInfoData } from "./driverInfoData";
import { LocationContainer } from "../../common/icons/Location/functional/LocationContainer";
import { MessageIconContainer } from "../../common/icons/MessageIcon/functional/MessageIconContainer";


export const SearchDriverContainer = () => {
  const [driverInfo, setDriverInfo] = useState(null);
  const [driverSearch, setDriverSearch] = useState(false);
  const [searchPhone, setSearchPhone] = useState(false);
  const [isSelected, setIsSelected] = useState(false)
  const node = useRef();
  const inputRef = useRef();

  const handleSearchClose = e => {
    if (e.target != inputRef.current) {
      setDriverSearch(false);
    }
    // outside click
  };



  useEffect(() => {
    document.addEventListener('click', handleSearchClose);

    return () => {
      document.removeEventListener('click', handleSearchClose);
    }
  }, []);

  const [term, setTerm] = useState(' ');
  const handleChange = (e) => {
    setTerm(e.target.value)
  };
  const searchByNumber = () => {
    setSearchPhone(true);
  }
  const handleSelect = () => {
    setIsSelected(true)
  }


  useEffect(() => {
    setDriverInfo(
      driverInfoData.map((data) => {
        return (
          <div key={data.id} className="InfoBlock">
            <div className="InfoWrapper">
              <input onClick={handleSelect} className="Radio" type="radio" name="gender"></input>
              <div className="DriverPhoto">{data.img}</div>
              <div className='InfoWrapper_modifierd'>
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
  }, [driverInfoData]);
  return (
    <SearchDriverSectionUI
      searchByNumber={searchByNumber}
      node={node}
      setDriverSearch={setDriverSearch}
      driverSearch={driverSearch}
      driverInfo={driverInfo}
      handleChange={handleChange}
      term={term}
      inputRef={inputRef}
      isSelected={true}
      searchPhone={searchPhone}
    />
  );
};
