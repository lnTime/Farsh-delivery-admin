import React, { useState, useEffect, useMemo, useCallback } from "react";
import ProfileFormUI from "../ui/ProfileFormUI";
import { useEditMode } from "../../../../common/custom-hooks/useEditMode";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../../../redux/driver/driverActions";
import { getProfileSelector } from "../../../../../redux/driver/driverSelectors";
import { getStates, getCities, getCountries } from '../../../../../redux/address/addressActions';
import { getAddressSelector } from "../../../../../redux/address/addressSelectors";
import { BigAvatarContainer } from '../../../../common/icons/BigAvatar/functional/BigAvatarContainer'

export const ProfileFormContainer = ({ id }) => {
  const [isEdit, setIsEditMode] = useEditMode();
  const dispatch = useDispatch();
  const profile = useSelector(getProfileSelector);
  const address = useSelector(getAddressSelector);
  const [phoneNumber, setPhoneNumber] = useState({ mobileNumber: profile.mobileNumber, isValid: true, });
  const [image, setImage] = useState(null);
  const onSubmit = (formData) => {
    dispatch(updateProfile(formData, id, image, phoneNumber, address.countries, setImage, phoneNumber.isValid, setIsEditMode));
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

  const customCountryChange = useCallback((value) => {
    dispatch(getStates(value));
  }, [dispatch]);

  const customStateChange = useCallback((value) => {
    dispatch(getCities(value));
  }, [dispatch]);


  useEffect(() => {
    if (profile && address.countries.length) {
      customCountryChange(profile.address?.country.isoCode || 'SA');
    }
  }, [profile, address.countries, customCountryChange]);

  useEffect(() => {
    if (!address.countries.length) {
      dispatch(getCountries());
    }
  }, [address.countries, dispatch]);


  const ImageComponent = useMemo(() => image && image.file ? () => <img alt="Avatar" width="120" height="92" src={image.src} /> :
    () => <BigAvatarContainer className="Upload-SVG" />, [image]);

  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage({file, src: reader.result, hasError: false});
    };
  }

  const initialValues = useMemo(() => ({ name: `${profile.firstName} ${profile.lastName}`,
    address: profile?.address?.address, country: profile.address?.country.isoCode,
    city: profile.address?.city, state: profile.address?.state  }), [profile]);

  if(!profile) {
    return null;
  }

  return (
    <ProfileFormUI
      profile={profile}
      isEdit={isEdit}
      handleClick={setIsEditMode}
      onSubmit={onSubmit}
      phoneNumber={phoneNumber}
      onPhoneNumberBlur={onPhoneNumberBlur}
      handlePhoneNumberChange={handlePhoneNumberChange}
      customCountryChange={customCountryChange}
      customStateChange={customStateChange}
      address={address}
      setImage={setImage}
      ImageComponent={ImageComponent}
      handleImageChange={handleImageChange}
      hasError={image && image.hasError}
      initialValues = {initialValues}
    />
  );
};
