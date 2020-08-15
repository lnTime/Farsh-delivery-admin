import React from "react";
import VehicleFormUI from "../ui/VehicleFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import axios from "axios";
import { useSelector } from "react-redux";
import { getVehicleSelector } from "../../../../../redux/driver/driverSelectors";

export const VehicleFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const vehicle = useSelector(getVehicleSelector);
  const onSubmit = (formData) => {
    const data = {
      mvpiNumber: formData.mvpi,
      vehicleMake: formData.make,
      vehicleModel: formData.model,
      vehiclePlateNumber: formData.plateNumber,
      vehicleRegistrationNumber: formData.registrationNumber,
    };
    axios.put(
      `https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/vehicle/{2}`,
      { data }
    );
  };

  return (
    <VehicleFormUI
      onSubmit={onSubmit}
      vehicle={vehicle}
      isEdit={isEdit}
      handleClick={handleClick}
    />
  );
};
