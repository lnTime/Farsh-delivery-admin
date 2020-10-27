import React, { useEffect, useState } from 'react';
import { VehicleInfoFormUI } from '../ui/VehicleInfoFormUI.jsx';
import { getAddressSelector } from '../../../../../redux/address/addressSelectors.js';
import { getStates, getCities, getCountries } from '../../../../../redux/address/addressActions';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { createVehicleInfo, getVehicleMakes } from '../../../../../redux/driver/driverActions';

export const VehicleInfoFormContainer = ({ setCurrentStep, setCurrentOnSubmit }) => {
    const [fileInfo, setFileInfo] = useState([]);
    const [inpValue, setInpValue] = useState('');
    const [openAtt, setOpenAtt] = useState(false);
    const [documents, setDocuments] = useState([]);
    const [vehicleMakes, setVehicleMakes] = useState(null);

    const address = useSelector(getAddressSelector);
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        setOpenAtt(true)
    }, []);
    const customCountryChange = useCallback((value) => {
        dispatch(getStates(value));
    }, [dispatch]);
    const customStateChange = useCallback((value) => {
        dispatch(getCities(value));
    }, [dispatch]);

    const onSubmit = useCallback((formData) => {
        dispatch(createVehicleInfo(formData, documents, setCurrentStep));
    }, [setCurrentStep, documents, dispatch]);


    useEffect(() => {
        if (!address.countries.length) {
            dispatch(getCountries())
        }
    }, [address, dispatch]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);

    useEffect(() => {
        dispatch(getVehicleMakes(setVehicleMakes));
    }, [dispatch]);

    return <VehicleInfoFormUI
        handleClick={handleClick}
        openAtt={openAtt}
        setOpenAtt={setOpenAtt}
        vehicleMakeOptions={vehicleMakes}
        address={address}
        customStateChange={customStateChange}
        customCountryChange={customCountryChange}
        setInpValue={setInpValue}
        inpValue={inpValue}
        fileInfo={fileInfo}
        setFileInfo={setFileInfo}
        setDocuments={setDocuments}
    />;
}
