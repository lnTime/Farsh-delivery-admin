import React from "react";
import DrivingLicenseFormUI from "../ui/DrivingLicenseFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch, useSelector } from "react-redux";
import { getDrivingLicenseSelector } from "../../../../../redux/driver/driverSelectors";
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { updateDrivingLicenseByID } from '../../../../../redux/driver/driverActions';

export const DrivingLicenseFormContainer = ({id}) => {
  const [isEdit, handleEditModeChange] = useEditMode();
  const dispatch = useDispatch();
  const drivingLicense = useSelector(getDrivingLicenseSelector);
  const countries = useSelector(getCountriesSelector)
  const onSubmit = (formData) => {
    dispatch(updateDrivingLicenseByID(formData, id, countries, handleEditModeChange));
  };

  return (
    <DrivingLicenseFormUI
      onSubmit={onSubmit}
      isEdit={isEdit}
      handleClick={handleEditModeChange}
      drivingLicense={drivingLicense || {}}
      countries={countries}
      initialValues={{...drivingLicense}}
    />
  );
};
