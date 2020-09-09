import React, { useCallback } from "react";
import { DriverUI } from "../ui/DriversUI";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, searchDrivers } from "../../../redux/drivers/driversActions";
import { getDriversViewSelector } from '../../../redux/drivers/driversSelector';
import { useHistory } from "react-router-dom";


export const DriversContainer = () => {
  const [drivers, setDriverData] = useState(null);
  const dispatch = useDispatch();
  const driversData = useSelector(getDriversViewSelector);
  const history = useHistory();

  const handleDriverPageOpen = useCallback(id => {
    history.push(`/drivers/${id}`);
  }, [history]);

  useEffect(() => {
    setDriverData(
      driversData.map((data, index) => {
        return (
          <div className="Table-Tr" key={data.id} onClick={() => handleDriverPageOpen(data.id)}>
            <div className="Table-Td">{index}</div>
            <div className="Table-Td">{data.profile?.firstName} {data.profile.lastName}</div>
            <div className="Table-Td">{data.profile?.mobileNumber}</div>
            <div className="Table-Td">Armenia</div>
            <div className="Table-Td">{data.drivingLicense?.licenseType}</div>
            <div className="Table-Td">{data.id}</div>
            <div className="Table-Td">{data.vehicle?.vehiclePlateNumber}</div>
          </div>
        );
      })
    );
  }, [driversData, handleDriverPageOpen]);

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  const goToAddDriver = () => history.push('/add-driver');

  const handleSearchDrivers = (e, keywords) => {
    e.preventDefault();
    dispatch(searchDrivers(keywords));
  }

  return <DriverUI
    drivers={drivers}
    handleSearchDrivers={handleSearchDrivers}
    goToAddDriver={goToAddDriver} />;
};
