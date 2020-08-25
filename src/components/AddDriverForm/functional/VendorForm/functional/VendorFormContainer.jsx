import React from 'react';
import { VendorFormUI } from '../ui/VendorFormUI';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const VendorFormContainer = ({ setData, setCurrentOnSubmit, setCurrentStep }) => {
    const onSubmit = useCallback(formData => {
        setData(data => {
            data.append('vendorId', formData.vendorId);
            return data;
        })
        setCurrentStep(currentStep => currentStep + 1);
    }, [setData, setCurrentStep]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [onSubmit, setCurrentOnSubmit]);

    return <VendorFormUI  />;
}
