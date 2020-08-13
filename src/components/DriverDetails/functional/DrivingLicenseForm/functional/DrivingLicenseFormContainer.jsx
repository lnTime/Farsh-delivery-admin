import React from "react";
import DrivingLicenseFormUI from "../ui/DrivingLicenseFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch } from "react-redux";
import { putDriverLicense } from "../../../../../redux/drivers/driverActions";

export const DrivingLicenseFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    dispatch(putDriverLicense(formData));
  };
  const licenseType = "James",
    licenseNumber = "Anderson",
    issueDate = "04/29/1972",
    expiryDate = "04/29/1976",
    issuingCountry = "Riyadh",
    issuingAuthority = "Makkah";
    
  return (
    <DrivingLicenseFormUI
      onSubmit={onSubmit}
      isEdit={isEdit}
      handleClick={handleClick}
      licenseType={licenseType}
      licenseNumber={licenseNumber}
      issueDate={issueDate}
      expiryDate={expiryDate}
      issuingCountry={issuingCountry}
      issuingAuthority={issuingAuthority}
    />
  );
};
