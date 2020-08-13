import React from "react";
import VehicleFormUI from "../ui/VehicleFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import axios from "axios";

export const VehicleFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
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
  const plateNumber = "YUK-7812",
    model = 1988,
    make = "GM",
    registeredCountry = "Saudi Arabia",
    state = "Riyadh",
    city = "Makkah",
    registrationNumber = 87123,
    mvpi = 836232;

  return (
    <VehicleFormUI
      onSubmit={onSubmit}
      plateNumber={plateNumber}
      model={model}
      make={make}
      registeredCountry={registeredCountry}
      state={state}
      city={city}
      registrationNumber={registrationNumber}
      mvpi={mvpi}
      isEdit={isEdit}
      handleClick={handleClick}
    />
  );
};
