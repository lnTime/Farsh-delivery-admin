import React, { useMemo, useState } from "react";
import RealNameInformationFormUI from "../ui/RealNameInformationFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useSelector, useDispatch } from "react-redux";
// import { putRealName } from "../../../../../redux/driver/driverActions";
import { getRealNameInformationSelector } from "../../../../../redux/driver/driverSelectors";
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { updateRealNameInformationByID } from "../../../../../redux/driver/driverActions";

export const RealNameInformationFormContainer = ({id}) => {
  const [isEdit, handleClick] = useEditMode();
  const dispatch = useDispatch();
  const countries = useSelector(getCountriesSelector);
  const realNameInformation = useSelector(getRealNameInformationSelector);
  const idTypeOptions = useMemo(() => [{ value: 'PASSPORT', id: 'PASSPORT' }, { value: 'NATIONAL_ID', id: 'NATIONAL_ID' }], []);
  const [imageHasError, setImageHasError] = useState({back: false, front: false});
  const onSubmit = (formData) => {
    dispatch(updateRealNameInformationByID(formData, id, countries, imageHasError, setImageHasError));
  };
  
  return (
    <RealNameInformationFormUI
      isEdit={isEdit}
      handleClick={handleClick}
      realNameInformation={realNameInformation}
      onSubmit={onSubmit}
      countries={countries}
      idTypeOptions={idTypeOptions}
      imageHasError={imageHasError}
      setImageHasError={setImageHasError}
    />
  );
};
