import React from "react";
import { driverData } from "../functional/driverData";
import "./drivers.scss";

export const DriverUI = ({ drivers }) => {
  return (
    <div className="Drivers">
      <table className="Table">
        <tr className="Table-Tr">
          <th className="Table-Th lessWidth">#</th>
          <th className="Table-Th">Name</th>
          <th className="Table-Th">Mobile</th>
          <th className="Table-Th">Country</th>
          <th className="Table-Th">License</th>
          <th className="Table-Th">ID</th>
          <th className="Table-Th">Vehicle number</th>
        </tr>
        {drivers}
      </table>
    </div>
  );
};
