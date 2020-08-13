import React from 'react';
import { VendorFormUI } from '../ui/VendorFormUI';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const VendorFormContainer = ({ setData, setCurrentOnSubmit, data }) => {
    const onSubmit = useCallback(formData => {

        fetch(`https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers`, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        setData(data => ({ ...data, vendor: { ...formData } }))
    }, [setData, data]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [onSubmit, setCurrentOnSubmit]);

    return <VendorFormUI  />;
}