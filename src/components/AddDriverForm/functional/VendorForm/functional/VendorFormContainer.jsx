import React from 'react';
import { VendorFormUI } from '../ui/VendorFormUI';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const VendorFormContainer = ({ setData, setCurrentOnSubmit, data }) => {
    const onSubmit = useCallback(formData => {
        setData(data => {
            data.append('vendorId', formData.vendorId);
            return data;
        })        

        sendToServer();

    }, [setData, data]);

    const sendToServer = () => {
        fetch(`http://54.156.46.17:8080/api/v1/drivers`, {
            method: 'POST',
            body: data,
        });
    }


    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [onSubmit, setCurrentOnSubmit]);

    return <VendorFormUI  />;
}