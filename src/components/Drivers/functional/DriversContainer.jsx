import React from "react";
import { DriverUI } from "../ui/DriversUI";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../../redux/drivers/driversActions";
import { getDriversSelector } from '../../../redux/drivers/driversSelector';
import { useHistory } from "react-router-dom";


export const DriversContainer = () => {
  const [drivers, setDriverData] = useState(null);
  const dispatch = useDispatch();
  const driversData = useSelector(getDriversSelector);
  const history = useHistory();

  const handleDriverPageOpen = id => {
    history.push(`/drivers/${id}`);
  }

  useEffect(() => {    
    setDriverData(
      driversData.map((data, index) => {
        return (
          <div className="Table-Tr" key={data.id} onClick = {() => handleDriverPageOpen(data.id)}>
            <div className="Table-Td">{index}</div>
            <div className="Table-Td">{data.profile.firstName} {data.profile.lastName}</div>
            <div className="Table-Td">{data.profile.mobileNumber}</div>
            <div className="Table-Td">Armenia</div>
            <div className="Table-Td">{data.drivingLicense.licenseType}</div>
            <div className="Table-Td">{data.id}</div>
            <div className="Table-Td">{data.vehicle.vehiclePlateNumber}</div>
          </div>
        );
      })
    );
  }, [driversData]);

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  return <DriverUI drivers={drivers} />;
};
