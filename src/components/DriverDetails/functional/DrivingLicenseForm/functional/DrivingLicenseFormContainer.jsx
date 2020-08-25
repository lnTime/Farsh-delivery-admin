import React, {useState} from "react";
import DrivingLicenseFormUI from "../ui/DrivingLicenseFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch, useSelector } from "react-redux";
import { getDrivingLicenseSelector } from "../../../../../redux/driver/driverSelectors";
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { updateDrivingLicenseByID } from '../../../../../redux/driver/driverActions';

export const DrivingLicenseFormContainer = ({id}) => {
  const [isEdit, handleClick] = useEditMode();
  const dispatch = useDispatch();
  const drivingLicense = useSelector(getDrivingLicenseSelector);
  const countries = useSelector(getCountriesSelector)
  const [imageHasError, setImageHasError] = useState({front: false, back: false});
  const onSubmit = (formData) => {
    dispatch(updateDrivingLicenseByID(formData, id, countries, setImageHasError));
  };

  return (
    <DrivingLicenseFormUI
      onSubmit={onSubmit}
      isEdit={isEdit}
      handleClick={handleClick}
      drivingLicense={drivingLicense}
      countries={countries}
      imageHasError={imageHasError}
    />
  );
};
