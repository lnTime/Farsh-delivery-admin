import React from 'react';
import { DrivingLicenseFormUI } from '../ui/DrivingLicenseFormUI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const DrivingLicenseContainer = ({setData, setCurrentStep, setCurrentOnSubmit}) => {
    const licenseTypeOptions = [{id: 'LTE', value: 'LTE'}];
    const [image, setImage] = useState({})

    const onSubmit = useCallback(formData => {
        if (!image.isFrontChoosed) {
            setImage({ ...image, hasFrontError: true })
            return false;
        } else if (!image.isBackChoosed) {
            setImage({ ...image, hasBackError: true })
            return false;
        }
        
        const transformedData = {
            ...formData,
            licenseIssuingCountry: {
                countryName: formData.issuingCountry,
                isoCode: 'sa',
            },
            driverLicenceFrontImgFile: image.front,
            driverLicenceBackImgFile: image.back,
        };
        setData(data => ({ ...data, drivingLicense: {...transformedData} }));
        setCurrentStep(currentStep => currentStep + 1);
    }, [setData, setCurrentStep, image]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);

    return <DrivingLicenseFormUI 
            licenseTypeOptions={licenseTypeOptions}
            image={image}
            setImage={setImage}
        />;
}