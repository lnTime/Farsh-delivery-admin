import React from "react";
import { driverData } from "../functional/driverData";
import "../ui/drivers.scss";

export const DriverUI = () => {
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

        {driverData.map((data) => {
          return (
            <tr className="Table-Tr">
              <td className="Table-Td">{data.id}</td>
              <td className="Table-Td">{data.name}</td>
              <td className="Table-Td">{data.mobile}</td>
              <td className="Table-Td">{data.country}</td>
              <td className="Table-Td">{data.license}</td>
              <td className="Table-Td">{data.userId}</td>
              <td className="Table-Td">{data.VehicleNumber}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
