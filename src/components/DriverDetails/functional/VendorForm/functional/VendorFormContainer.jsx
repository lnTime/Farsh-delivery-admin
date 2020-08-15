import React from "react";
import VendorFormUI from "../ui/VendorFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch, useSelector } from "react-redux";
import { putVendor } from "../../../../../redux/driver/driverActions";
import { getVendorSelector } from "../../../../../redux/driver/driverSelectors";

export const VendorFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const vendor = useSelector(getVendorSelector);
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    dispatch(putVendor(formData));
  };

  return (
    <VendorFormUI
      isEdit={isEdit}
      handleClick={handleClick}
      vendor={vendor.vendorId}
      onSubmit={onSubmit}
    />
  );
};
