import React, { useEffect, useState } from 'react';
import { VehicleInfoFormUI } from '../ui/VehicleInfoFormUI.jsx';
import { getAddressSelector } from '../../../../../redux/address/addressSelectors.js';
import { getStates, getCities, getCountries } from '../../../../../redux/address/addressActions';
import { useSelector, useDispatch } from 'react-redux';

export const VehicleInfoFormContainer = ({ setData, setCurrentStep, setCurrentOnSubmit }) => {
    const [fileInfo, setFileInfo] = useState([]);
    const [inpValue, setInpValue] = useState(null);
    const [openAtt, setOpenAtt] = useState(false);
    const address = useSelector(getAddressSelector);
    const vehicleMakeOptions = [{ id: 'V1', value: 'V1' }];
    const dispatch = useDispatch();

    const handleClick = () => {
        setOpenAtt(true)
    }
    const handleDelete = (index,e) => {
        setFileInfo((oldData) => {
            e.target
            const idx = oldData.indexOf((el) => el.id === index);
            const beforeIdx = oldData.slice(0, idx)
            const afterIdx = oldData.slice(idx + 1)
            const newData = [...beforeIdx, ...afterIdx];
            console.log('Item index is', index);
            console.log('New Data is', newData);
            return (newData);
        })
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
    }, [address]);

    const onSubmit = (formData) => {
        setData(data => ({ ...data, vehicle: { ...formData } }));
        setCurrentStep(currentStep => currentStep + 1);
    }

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, []);

    return <VehicleInfoFormUI
        handleDelete={handleDelete}
        handleClick={handleClick}
        openAtt={openAtt}
        setOpenAtt={setOpenAtt}
        vehicleMakeOptions={vehicleMakeOptions}
        address={address}
        customStateChange={customStateChange}
        customCountryChange={customCountryChange}
        setInpValue={setInpValue}
        inpValue={inpValue}
        fileInfo={fileInfo}
        setFileInfo={setFileInfo}

    />;
}