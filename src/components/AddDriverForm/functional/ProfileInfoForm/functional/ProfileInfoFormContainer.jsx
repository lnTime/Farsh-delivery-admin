import React, { useState, useEffect } from "react";
import { ProfileInfoFormUI } from "../ui/ProfileInfoFormUI";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getStates, getCities } from "../../../../../redux/address/addressActions";
import { getAddressSelector } from '../../../../../redux/address/addressSelectors';
import { useCallback } from "react";
import { createDriver } from "../../../../../redux/driver/driverActions";

export const ProfileInfoFormContainer = ({handleSubmit, error, setCurrentOnSubmit, setData, setCurrentStep}) => {
    const address = useSelector(getAddressSelector);
    const [image, setImage] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState({ mobileNumber: "", isValid: true, });

    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImage({file, src: reader.result, hasError: false});
        };
    }

    
    const onSubmit = useCallback((formData) => {
        dispatch(createDriver(formData, setPhoneNumber, phoneNumber, image, setImage, address.countries, setCurrentStep))
    }, [setPhoneNumber, phoneNumber, image, setImage, setCurrentStep, address.countries, dispatch]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);


    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

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

    return <ProfileInfoFormUI
        customCountryChange={customCountryChange}
        onPhoneNumberBlur={onPhoneNumberBlur}
        phoneNumber={phoneNumber}
        customStateChange={customStateChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
        countries={address.countries}
        states={address.states}
        cities={address.cities}
        handleSubmit={handleSubmit}
        error={error}
        handleImageChange={handleImageChange}
        src={image && image.src}
        hasError={image && image.hasError}
    />;
};
