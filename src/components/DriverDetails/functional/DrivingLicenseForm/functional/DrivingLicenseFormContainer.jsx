import React from "react";
import DrivingLicenseFormUI  from "../ui/DrivingLicenseFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";

export const DrivingLicenseFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const licenseType = "James",
    licenseNumber = "Anderson",
    issueDate = "04/29/1972",
    expiryDate = "04/29/1976",
    issuingCountry = "Riyadh",
    issuingAuthority = "Makkah";

  return (
    <DrivingLicenseFormUI
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
