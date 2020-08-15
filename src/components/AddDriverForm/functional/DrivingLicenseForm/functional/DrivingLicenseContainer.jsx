import React from 'react';
import { DrivingLicenseFormUI } from '../ui/DrivingLicenseFormUI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { getCountryNameByISOCode } from '../../../../../redux/address/addressActions';

export const DrivingLicenseContainer = ({setData, setCurrentStep, setCurrentOnSubmit}) => {
    const licenseTypeOptions = [{id: 'LTE', value: 'LTE'}];
    const [image, setImage] = useState({})
    const countries = useSelector(getCountriesSelector);

    const onSubmit = useCallback(formData => {
        if (!image.isFrontChoosed) {
            setImage({ ...image, hasFrontError: true })
            return false;
        } else if (!image.isBackChoosed) {
            setImage({ ...image, hasBackError: true })
            return false;
        }
        
        setData(data => {
            data.append('licenseType', formData.licenseType);
            data.append('licenseNo', formData.licenseNo);
            data.append('licenseIssueDate', formData.licenseIssueDate);
            data.append('licenseExpiryDate', formData.licenseExpiryDate);
            data.append('licenseIssuingCountry.countryName', getCountryNameByISOCode(countries, formData.issuingCountry));
            data.append('licenseIssuingCountry.isoCode', formData.issuingCountry);
            data.append('licenseIssuingAuthority', formData.licenseIssuingAuthority);
            data.append('driverLicenceFrontImgFile', image.front);
            data.append('driverLicenceBackImgFile', image.back);
            return data;
        });
        setCurrentStep(currentStep => currentStep + 1);
    }, [setData, setCurrentStep, image]);

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