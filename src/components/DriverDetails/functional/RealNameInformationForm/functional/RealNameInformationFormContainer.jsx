import React from "react";
import  RealNameInformationFormUI  from "../ui/RealNameInformationFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";

export const RealNameInformationFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const passport = "Passport",
    idNumber = "1321313123",
    issueDate = "04/29/1972",
    expiryDate = "04/29/1976",
    issuingCountry = "Riyadh",
    issuingAuthority = "Makkah";

  return (
    <RealNameInformationFormUI
      isEdit={isEdit}
      handleClick = {handleClick}
      passport={passport}
      idNumber={idNumber}
      issueDate={issueDate}
      expiryDate={expiryDate}
      issuingCountry={issuingCountry}
      issuingAuthority={issuingAuthority}
    />
  );
};
