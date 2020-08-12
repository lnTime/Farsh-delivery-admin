import React from "react";
import RealNameInformationFormUI from "../ui/RealNameInformationFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch } from "react-redux";
import { putRealName } from "../../../../../redux/drivers/driverActions";

export const RealNameInformationFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    dispatch(putRealName(formData));
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
