import React from "react";
import { DriverUI } from "../ui/DriversUI";
import { useState, useEffect } from "react";
import { driverData } from "./driverData";

export const DriversContainer = () => {
  const [drivers, setDriverData] = useState(null);
  useEffect(() => {
    setDriverData(
      driverData.map((data) => {
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
      })
    );
  });
  return <DriverUI drivers={drivers} />;
};
