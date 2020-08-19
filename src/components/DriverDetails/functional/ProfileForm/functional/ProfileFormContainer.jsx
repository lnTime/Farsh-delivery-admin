import React, { useState, useEffect } from "react";
import ProfileFormUI from "../ui/ProfileFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../../../redux/driver/driverActions";
import { getProfileSelector } from "../../../../../redux/driver/driverSelectors";
import { getStates, getCities, getCountries } from '../../../../../redux/address/addressActions';
import { getAddressSelector } from "../../../../../redux/address/addressSelectors";

export const ProfileFormContainer = ({ id }) => {
  const [isEdit, handleClick] = useEditMode();
  const dispatch = useDispatch();
  const profile = useSelector(getProfileSelector);
  const address = useSelector(getAddressSelector);
  const [phoneNumber, setPhoneNumber] = useState({ mobileNumber: profile.mobileNumber, isValid: true, });
  const onSubmit = (formData) => {
    if (!phoneNumber.mobileNumber || !phoneNumber.isValid) {
      setPhoneNumber({ ...phoneNumber, isValid: false });
      return false;
    }
    formData.mobileNumber = phoneNumber.mobileNumber;
    dispatch(updateProfile(formData, id));
  };

  const onPhoneNumberBlur = (isValid) => {
    setPhoneNumber({ ...phoneNumber, isValid });
  };

  const handlePhoneNumberChange = (isValid, newPhoneNumber) => {
    if (Number.isInteger(+newPhoneNumber[newPhoneNumber.length - 1]) || newPhoneNumber === '') {
      setPhoneNumber({ isValid: true, mobileNumber: newPhoneNumber });
    } else {
      setPhoneNumber({ ...phoneNumber, isValid });
    }
  };

  const customCountryChange = (value) => {
    dispatch(getStates(value));
  }

  const customStateChange = (value) => {
    dispatch(getCities(value));
  }

  useEffect(() => {
    if (!address.countries.length) {
      dispatch(getCountries());
    }
  }, [address.countries, dispatch]);


  return (
    <ProfileFormUI
      profile={profile}
      isEdit={isEdit}
      handleClick={handleClick}
      onSubmit={onSubmit}
      phoneNumber={phoneNumber}
      onPhoneNumberBlur={onPhoneNumberBlur}
      handlePhoneNumberChange={handlePhoneNumberChange}
      customCountryChange={customCountryChange}
      customStateChange={customStateChange}
      address={address}
    />
  );
};
