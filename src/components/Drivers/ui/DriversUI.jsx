import React from "react";
import "./Drivers.scss";

export const DriverUI = ({ drivers }) => {
  return (
    <div className="Drivers">
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
