import React, {useEffect} from "react";
import DrivingLicenseFormUI from "../ui/DrivingLicenseFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch, useSelector } from "react-redux";
import { getDrivingLicenseSelector } from "../../../../../redux/driver/driverSelectors";
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { updateDrivingLicenseByID } from '../../../../../redux/driver/driverActions';
import {getDrivingLicenseIssuingAuthority, getDrivingLicenseTypes} from "../../../../../redux/static/staticActions";
import {
  getDrivingLicenseIssuingAuthoritySelector,
  getDrivingLicenseTypesSelector
} from "../../../../../redux/static/staticSelectors";

export const DrivingLicenseFormContainer = ({id}) => {
  const [isEdit, handleEditModeChange] = useEditMode();

  const dispatch = useDispatch();

  const drivingLicense = useSelector(getDrivingLicenseSelector);
  const countries = useSelector(getCountriesSelector)
  const drivingLicenseTypes = useSelector(getDrivingLicenseTypesSelector);
  const drivingLicenseIssuingAuthority = useSelector(getDrivingLicenseIssuingAuthoritySelector);

  const onSubmit = (formData) => {
    dispatch(updateDrivingLicenseByID(formData, id, countries, handleEditModeChange));
  };

  useEffect(() => {
    if (!drivingLicenseTypes.length) {
      dispatch(getDrivingLicenseTypes());
    }
  }, [drivingLicenseTypes, dispatch]);

  useEffect(() => {
    if(!drivingLicenseIssuingAuthority.length) {
      dispatch(getDrivingLicenseIssuingAuthority());
    }
  }, [drivingLicenseIssuingAuthority, dispatch]);

  return (
    <DrivingLicenseFormUI
      onSubmit={onSubmit}
      isEdit={isEdit}
      handleClick={handleEditModeChange}
      drivingLicense={drivingLicense || {}}
      countries={countries}
      initialValues={{...drivingLicense}}
      drivingLicenseTypes={drivingLicenseTypes}
      drivingLicenseIssuingAuthority={drivingLicenseIssuingAuthority}
    />
  );
};
