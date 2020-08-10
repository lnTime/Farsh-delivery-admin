import React from 'react';
import { VendorFormUI } from '../ui/VendorFormUI';
import { useEffect } from 'react';

export const VendorFormContainer = ({ setData, setCurrentOnSubmit, data }) => {

    const onSubmit = formData => {

        fetch(`https://virtserver.swaggerhub.com/aliadnank/Farsh-Drivers/1.0.0/api/v1/drivers`, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        setData(data => ({ ...data, vendor: { ...formData } }))
    }

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, []);

    return <VendorFormUI />;
}