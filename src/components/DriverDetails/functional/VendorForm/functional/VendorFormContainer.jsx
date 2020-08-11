import React from "react";
import VendorFormUI from "../ui/VendorFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import axios from 'axios';

export const VendorFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  
  const onSubmit = (formData) => {
    axios.put(`https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/vendor/2/`,{ vendorId: formData})
  };
  const vendor = "Neque augue";
  return (
    <VendorFormUI
      isEdit={isEdit}
      handleClick={handleClick}
      vendor={vendor}
      onSubmit={onSubmit}
    />
  );
};
