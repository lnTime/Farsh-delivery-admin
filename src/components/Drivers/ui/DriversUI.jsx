import React from "react";
import "./Drivers.scss";
import { HeaderContainer } from '../../Header/functional/HeaderContainer';
import { DriverContainer } from '../../common/icons/Driver/functional/DriverContainer';

export const DriverUI = ({ drivers, goToAddDriver, handleSearchDrivers }) => {
  return (
    <div className="Drivers">
      <HeaderContainer 
        component={<DriverContainer />}
        sectionName="Drivers"
        handleSearchDrivers={handleSearchDrivers}
        additionalComponent={
        <button 
          onClick={goToAddDriver}
          className="Drivers-AddNewButton">Add New</button>}
      />
      <div className="Table">
        <div className="Table-Tr">
          <div className="Table-Th lessWiddiv">#</div>
          <div className="Table-Th">Name</div>
          <div className="Table-Th">Mobile</div>
          <div className="Table-Th">Country</div>
          <div className="Table-Th">License</div>
          <div className="Table-Th">ID</div>
          <div className="Table-Th">Vehicle number</div>
        </div>
        {drivers}
      </div>
    </div>
  );
};
