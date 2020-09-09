import React from "react";
import VendorFormUI from "../ui/VendorFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch, useSelector } from "react-redux";
import { updateVendor } from "../../../../../redux/driver/driverActions";
import { getVendorSelector } from "../../../../../redux/driver/driverSelectors";

export const VendorFormContainer = ({id}) => {
  const [isEdit, setIsEditMode] = useEditMode();
  const vendor = useSelector(getVendorSelector);
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    dispatch(updateVendor(formData, id, setIsEditMode));
  };

  return (
    <VendorFormUI
      isEdit={isEdit}
      handleClick={setIsEditMode}
      onSubmit={onSubmit}
      initialValues={vendor && { vendorId: vendor.vendorId }}
      vendorId={vendor && vendor.vendorId}
    />
  );
};
