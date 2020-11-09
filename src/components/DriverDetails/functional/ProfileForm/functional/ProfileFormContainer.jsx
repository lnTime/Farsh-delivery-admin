import React, {useState, useEffect, useMemo, useCallback} from "react";
import ProfileFormUI from "../ui/ProfileFormUI";
import {useEditMode} from "../../../../common/custom-hooks/useEditMode";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../../../../redux/driver/driverActions";
import {getProfileSelector} from "../../../../../redux/driver/driverSelectors";
import {getStates, getCities, getCountries, getStateById} from '../../../../../redux/address/addressActions';
import {getAddressSelector} from "../../../../../redux/address/addressSelectors";
import {BigAvatarContainer} from '../../../../common/icons/BigAvatar/functional/BigAvatarContainer'

export const ProfileFormContainer = ({id}) => {
  const [isEdit, setIsEditMode] = useEditMode();
  const dispatch = useDispatch();
  const profile = useSelector(getProfileSelector);
  const address = useSelector(getAddressSelector);
  const [image, setImage] = useState(null);
  const onSubmit = (formData) => {
    dispatch(updateProfile(formData, id, image, address.countries, setImage, setIsEditMode));
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

  useEffect(() => {
    if (profile.address?.state) {
      dispatch(getCities(profile.address.state));
    }
  }, [dispatch, profile.address.state]);


  const divStyle = useMemo(() => ({
    width: 120,
    height: 92,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }), []);

  const ImageComponent = useMemo(() => {
    if (profile.profileAvatar) {
      if (profile.profileAvatar.startsWith('<svg')) {
        return () => <div style={divStyle}
                          dangerouslySetInnerHTML={{__html: profile.profileAvatar}}/>
      }

      return () => <img src={profile.profileAvatar} alt="Avatar" width="120" height="92"/>;
    }

    return image && image.file ? () => <img alt="Avatar" width="120" height="92" src={image.src}/> :
      () => <BigAvatarContainer className="Upload-SVG"/>
  }, [image, profile.profileAvatar, divStyle]);

  const handleImageChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage({file, src: reader.result, hasError: false});
    };
  }

  const initialValues = useMemo(() => ({
    name: `${profile.firstName} ${profile.lastName}`,
    address: profile?.address?.address, country: profile.address?.country.isoCode,
    city: profile.address?.city, state: getStateById(+profile.address?.state)
  }), [profile]);
  if (!profile) {
    return null;
  }

  return (
    <ProfileFormUI
      profile={profile}
      isEdit={isEdit}
      handleClick={setIsEditMode}
      onSubmit={onSubmit}
      customCountryChange={customCountryChange}
      customStateChange={customStateChange}
      address={address}
      setImage={setImage}
      ImageComponent={ImageComponent}
      handleImageChange={handleImageChange}
      hasError={image && image.hasError}
      initialValues={initialValues}
    />
  );
};
