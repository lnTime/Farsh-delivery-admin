import React from "react";
import VendorFormUI from "../ui/VendorFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch } from "react-redux";
import { putVendor } from "../../../../../redux/drivers/driverActions";

export const VendorFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    dispatch(putVendor(formData));
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
