import React from "react";
import RealNameInformationFormUI from "../ui/RealNameInformationFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import axios from "axios";

export const RealNameInformationFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const onSubmit = (formData) => {
    const data = {
      realNameExpiryDate: formData.expiryDate,
      realNameIdNo: formData.idNumber,
      realNameIdType: formData.idCard,
      realNameIssueAuthority: formData.issuingAuthority,
      realNameIssueCountry: {
        countryName: formData.issuingCountry,
        isoCode: "sa",
      },
      realNameIssueDate: formData.issueDate,
    };
    axios.put(
      `https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers/real-name/{2}`,{data}
    );
  };

  const passport = "Passport",
    idNumber = "1321313123",
    issueDate = "04/29/1972",
    expiryDate = "04/29/1976",
    issuingCountry = "Riyadh",
    issuingAuthority = "Makkah";

  return (
    <RealNameInformationFormUI
      isEdit={isEdit}
      handleClick={handleClick}
      passport={passport}
      idNumber={idNumber}
      issueDate={issueDate}
      expiryDate={expiryDate}
      issuingCountry={issuingCountry}
      issuingAuthority={issuingAuthority}
      onSubmit={onSubmit}
    />
  );
};
