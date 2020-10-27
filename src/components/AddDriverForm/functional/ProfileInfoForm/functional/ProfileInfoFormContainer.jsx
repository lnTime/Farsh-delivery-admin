import React, { useState, useEffect } from "react";
import { ProfileInfoFormUI } from "../ui/ProfileInfoFormUI";
import { batch, useDispatch, useSelector } from "react-redux";
import { getCountries, getStates, getCities } from "../../../../../redux/address/addressActions";
import { getAddressSelector } from '../../../../../redux/address/addressSelectors';
import { useCallback } from "react";
import { createDriver } from "../../../../../redux/driver/driverActions";
import { useMemo } from "react";

export const ProfileInfoFormContainer = ({handleSubmit, error, setCurrentOnSubmit, setCurrentStep}) => {
    const address = useSelector(getAddressSelector);
    const [image, setImage] = useState(null);
    const prefferedCountry = useMemo(() => 'sa', []);
    const dispatch = useDispatch();

    const handleImageChange = useCallback((e) => {
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImage({file, src: reader.result, hasError: false});
        };
    }, []);


    const onSubmit = useCallback((formData) => {
        dispatch(createDriver(formData, image, setImage, address.countries, setCurrentStep))
    }, [image, setImage, setCurrentStep, address.countries, dispatch]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);


    useEffect(() => {
        batch(() => {
            dispatch(getCountries())
            dispatch(getStates());
        })
    }, [dispatch]);

    const customCountryChange = useCallback((value) => {
        dispatch(getStates(value));
    }, [dispatch]);

    const customStateChange = useCallback((value) => {
        dispatch(getCities(value));
    }, [dispatch]);

    return <ProfileInfoFormUI
        customCountryChange={customCountryChange}
        customStateChange={customStateChange}
        countries={address.countries}
        states={address.states}
        cities={address.cities}
        prefferedCountry={prefferedCountry}
        handleSubmit={handleSubmit}
        error={error}
        handleImageChange={handleImageChange}
        src={image && image.src}
        hasError={image && image.hasError}
    />;
};
