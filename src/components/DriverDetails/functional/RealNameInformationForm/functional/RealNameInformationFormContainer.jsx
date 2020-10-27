import React, {useCallback, useMemo} from "react";
import RealNameInformationFormUI from "../ui/RealNameInformationFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useSelector, useDispatch } from "react-redux";
import { getRealNameInformationSelector } from "../../../../../redux/driver/driverSelectors";
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { updateRealNameInformationByID } from "../../../../../redux/driver/driverActions";
import {getStates} from "../../../../../redux/address/addressActions";

export const RealNameInformationFormContainer = ({id}) => {
  const [isEdit, setIsEditMode] = useEditMode();
  const dispatch = useDispatch();
  const countries = useSelector(getCountriesSelector);
  const realNameInformation = useSelector(getRealNameInformationSelector);
  const idTypeOptions = useMemo(() => [{ value: 'PASSPORT', id: 'PASSPORT' }, { value: 'NATIONAL_ID', id: 'NATIONAL_ID' }], []);
  const onSubmit = (formData) => {
    dispatch(updateRealNameInformationByID(formData, id, countries, setIsEditMode));
  };
  const initialValues = useMemo(() =>
    (realNameInformation && {...realNameInformation, realNameIssueCountry: realNameInformation.realNameIssueCountry.isoCode}),
    [realNameInformation]);
  const customCountryChange = useCallback((value) => {
    dispatch(getStates(value));
  }, [dispatch]);

  return (
    <RealNameInformationFormUI
      isEdit={isEdit}
      handleClick={setIsEditMode}
      realNameInformation={realNameInformation || {}}
      onSubmit={onSubmit}
      countries={countries}
      idTypeOptions={idTypeOptions}
      initialValues={initialValues}
      customCountryChange={customCountryChange}
      frontImage={realNameInformation?.realNameFrontImage}
      backImage={realNameInformation?.realNameBackImage}
    />
  );
};
