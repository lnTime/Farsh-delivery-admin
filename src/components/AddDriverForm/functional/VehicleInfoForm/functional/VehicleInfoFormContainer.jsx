import React, { useEffect, useState } from 'react';
import { VehicleInfoFormUI } from '../ui/VehicleInfoFormUI.jsx';
import { getAddressSelector } from '../../../../../redux/address/addressSelectors.js';
import { getStates, getCities, getCountries } from '../../../../../redux/address/addressActions';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { createVehicleInfo } from '../../../../../redux/driver/driverActions';
import {getVehicleMakes} from "../../../../../redux/static/staticActions";
import {getVehicleMakesSelector} from "../../../../../redux/static/staticSelectors";

export const VehicleInfoFormContainer = ({ setCurrentStep, setCurrentOnSubmit }) => {
    const [fileInfo, setFileInfo] = useState([]);
    const [inpValue, setInpValue] = useState('');
    const [openAtt, setOpenAtt] = useState(false);
    const [documents, setDocuments] = useState([]);
    const vehicleMakes = useSelector(getVehicleMakesSelector);

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
        dispatch(getVehicleMakes());
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
