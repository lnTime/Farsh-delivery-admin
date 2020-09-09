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
    
    const handleClick = () => {
        setOpenAtt(true)
    }
    const handleDelete = (id) => {
        setFileInfo((data) => {
            const idx = data.findIndex((item) => item.id === id);
            const upDateData = [
                ...data.slice(0, idx),
                ...data.slice(idx + 1)
            ]
            return (upDateData);
        })
    }
    const customCountryChange = (value) => {
        dispatch(getStates(value));
    }
    const customStateChange = (value) => {
        dispatch(getCities(value));
    }

    const onSubmit = useCallback((formData) => {
        dispatch(createVehicleInfo(formData, documents));
        setCurrentStep(currentStep => currentStep + 1);
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
        getVehicleMakes(setVehicleMakes);
    }, []);

    return <VehicleInfoFormUI
        handleDelete={handleDelete}
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
