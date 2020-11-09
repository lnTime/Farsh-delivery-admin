import React, { useEffect, useCallback } from 'react';
import { DrivingLicenseFormUI } from '../ui/DrivingLicenseFormUI';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { updateDrivingLicense } from '../../../../../redux/driver/driverActions';
import {getCities} from "../../../../../redux/address/addressActions";
import {getDrivingLicenseIssuingAuthority, getDrivingLicenseTypes} from "../../../../../redux/static/staticActions";
import {
    getDrivingLicenseIssuingAuthoritySelector,
    getDrivingLicenseTypesSelector
} from "../../../../../redux/static/staticSelectors";


export const DrivingLicenseContainer = ({setCurrentStep, setCurrentOnSubmit}) => {
    const drivingLicenseTypes = useSelector(getDrivingLicenseTypesSelector);
    const issuingAuthority = useSelector(getDrivingLicenseIssuingAuthoritySelector);
    const countries = useSelector(getCountriesSelector);

    const dispatch = useDispatch();

    const onSubmit = useCallback(formData => {
        dispatch(updateDrivingLicense(formData, countries, setCurrentStep));
    }, [countries, setCurrentStep, dispatch]);
    const customStateChange = useCallback((value) => {
        dispatch(getCities(value));
    }, [dispatch]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);
    useEffect(() => {
        dispatch(getDrivingLicenseTypes());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getDrivingLicenseIssuingAuthority());
    }, [dispatch]);

    return <DrivingLicenseFormUI
            countries={countries}
            licenseTypeOptions={drivingLicenseTypes}
            customStateChange={customStateChange}
            issuingAuthority={issuingAuthority}
        />;
}
