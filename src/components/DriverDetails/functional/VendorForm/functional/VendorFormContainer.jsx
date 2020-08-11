import React from "react";
import VendorFormUI from "../ui/VendorFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";

export const VendorFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const handleSubmit = () => {
    // fetch(
    //   "https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/vendor/2/",
    //   {
    //     method: "PUT",
    //     headers: {
    //         'Content-type: application/json; charset=UTF-8'
    //     },
    //     body:JSON.stringify({
    //       vendorId: "Narek",
    //     }),
    //   }
    // );
  };
  const vendor = "Neque augue";
  return (
    <VendorFormUI
      handleSubmit={handleSubmit}
      isEdit={isEdit}
      handleClick={handleClick}
      vendor={vendor}
    />
  );
};
