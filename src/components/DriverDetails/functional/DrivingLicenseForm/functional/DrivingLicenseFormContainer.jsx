import React from "react";
import DrivingLicenseFormUI from "../ui/DrivingLicenseFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch, useSelector } from "react-redux";
import { putDriverLicense } from "../../../../../redux/driver/driverActions";
import { getDrivingLicenseSelector } from "../../../../../redux/driver/driverSelectors";

export const DrivingLicenseFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const dispatch = useDispatch();
  const drivingLicense = useSelector(getDrivingLicenseSelector);
  const onSubmit = (formData) => {
    dispatch(putDriverLicense(formData));
  };

  console.log(drivingLicense)

  return (
    <DrivingLicenseFormUI
      onSubmit={onSubmit}
      isEdit={isEdit}
      handleClick={handleClick}
      drivingLicense={drivingLicense}
    />
  );
};
