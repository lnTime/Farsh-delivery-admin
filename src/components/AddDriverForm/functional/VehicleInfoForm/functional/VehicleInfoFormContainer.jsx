import React, { useEffect, useState } from 'react';
import { VehicleInfoFormUI } from '../ui/VehicleInfoFormUI.jsx';
import { getAddressSelector } from '../../../../../redux/address/addressSelectors.js';
import { getStates, getCities, getCountries } from '../../../../../redux/address/addressActions';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

export const VehicleInfoFormContainer = ({ setData, setCurrentStep, setCurrentOnSubmit }) => {
    const address = useSelector(getAddressSelector);
    const vehicleMakeOptions = [{ id: 'V1', value: 'V1' }];
    const dispatch = useDispatch();
    const [openAtt, setOpenAtt] = useState(false);
    const handleClick = () => {
        setOpenAtt(true)
    }

    const customCountryChange = (value) => {
        dispatch(getStates(value));
    }

    const customStateChange = (value) => {
        dispatch(getCities(value));
    }

    useEffect(() => {
        if (!address.countries.length) {
            dispatch(getCountries())
        }
    }, [address, dispatch]);

    const onSubmit = useCallback((formData) => {
        setData(data => {
            data.append('vehiclePlateNumber', formData.vehiclePlateNumber);
            data.append('vehicleModel', formData.vehicleModel);
            data.append('vehicleMake', formData.vehicleMake);
            // TODO
            // data.append('vehicleRegisteredCountry.countryName', formData.registeredCountry);
            data.append('vehicleRegistrationNumber', formData.vehicleRegistrationNumber);
            data.append('mvpiNumber', formData.mvpiNumber);
            return data;
        });
        setCurrentStep(currentStep => currentStep + 1);
    }, [setData, setCurrentStep]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);

    return <VehicleInfoFormUI
        handleClick={handleClick}
        openAtt = {openAtt}
        setOpenAtt = {setOpenAtt}
        vehicleMakeOptions={vehicleMakeOptions}
        address={address}
        customStateChange={customStateChange}
        customCountryChange={customCountryChange}
    />;
}
