import React from "react";
import RealNameInformationFormUI from "../ui/RealNameInformationFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useSelector } from "react-redux";
// import { putRealName } from "../../../../../redux/driver/driverActions";
import { getRealNameInformationSelector } from "../../../../../redux/driver/driverSelectors";

export const RealNameInformationFormContainer = () => {
  const [isEdit, handleClick] = useEditMode();
  // const dispatch = useDispatch();
  const realNameInformation = useSelector(getRealNameInformationSelector);
  const onSubmit = (formData) => {
    // dispatch(putRealName(formData));
  };
  
  return (
    <RealNameInformationFormUI
      isEdit={isEdit}
      handleClick={handleClick}
      realNameInformation={realNameInformation}
      onSubmit={onSubmit}
    />
  );
};
