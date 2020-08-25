import React from 'react';
import { DrivingLicenseFormUI } from '../ui/DrivingLicenseFormUI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { updateDrivingLicense } from '../../../../../redux/driver/driverActions';

export const DrivingLicenseContainer = ({setCurrentStep, setCurrentOnSubmit}) => {
    const licenseTypeOptions = [{id: 'LTE', value: 'LTE'}];
    const [image, setImage] = useState({})
    const countries = useSelector(getCountriesSelector);
    const dispatch = useDispatch();

    const onSubmit = useCallback(formData => {
        dispatch(updateDrivingLicense(formData, image, setImage, countries, setCurrentStep));
    }, [image, setImage, countries, setCurrentStep, dispatch]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);

    return <DrivingLicenseFormUI 
            countries={countries}
            licenseTypeOptions={licenseTypeOptions}
            image={image}
            setImage={setImage}
        />;
}