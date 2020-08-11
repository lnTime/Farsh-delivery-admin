import React from "react";
import DrivingLicenseFormUI from "../ui/DrivingLicenseFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import axios from "axios";

export const DrivingLicenseFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const onSubmit = (formData) => {
    const data = {
      licenseExpiryDate: formData.expiryDate,
      licenseIssueDate: formData.issueDate,
      licenseIssuingAuthority: formData.issuingAuthority,
      licenseIssuingCountry: {
        countryName: formData.issuingCountry,
        isoCode: 'sa'
      },
      licenseNo: formData.licenseNumber,
      licenseType: formData.licenseType
    }


    axios.put(
      `https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/driving-license/{2}`,
      { data }
    );
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
