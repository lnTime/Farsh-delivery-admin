import React from 'react';
import { DrivingLicenseFormUI } from '../ui/DrivingLicenseFormUI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { updateDrivingLicense, getDrivingLicenseTypes, getDrivingLicenseIssuingAuthority } from '../../../../../redux/driver/driverActions';
import {getCities} from "../../../../../redux/address/addressActions";


export const DrivingLicenseContainer = ({setCurrentStep, setCurrentOnSubmit}) => {
    const [image, setImage] = useState({})
    const [drivingLicenseTypes, setDrivingLicenseTypes] = useState(null);
    const [issuingAuthority, setIssuingAuthority] = useState(null);
    const countries = useSelector(getCountriesSelector);

    const dispatch = useDispatch();

    const onSubmit = useCallback(formData => {
        dispatch(updateDrivingLicense(formData, image, setImage, countries, setCurrentStep));
    }, [image, setImage, countries, setCurrentStep, dispatch]);
    const customStateChange = useCallback((value) => {
        dispatch(getCities(value));
    }, [dispatch]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);
    useEffect(() => {
        getDrivingLicenseTypes(setDrivingLicenseTypes);
    }, []);
    useEffect(() => {
        getDrivingLicenseIssuingAuthority(setIssuingAuthority);
    }, []);

    return <DrivingLicenseFormUI
            countries={countries}
            licenseTypeOptions={drivingLicenseTypes}
            image={image}
            setImage={setImage}
            customStateChange={customStateChange}
            issuingAuthority={issuingAuthority}
        />;
}
