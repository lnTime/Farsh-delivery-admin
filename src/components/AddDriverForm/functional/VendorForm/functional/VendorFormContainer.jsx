import React, { useCallback, useEffect } from 'react';
import { VendorFormUI } from '../ui/VendorFormUI';
import { useDispatch } from 'react-redux';
import { updateVendorCreate } from '../../../../../redux/driver/driverActions'

export const VendorFormContainer = ({ setCurrentOnSubmit, setCurrentStep }) => {
    const dispatch = useDispatch();

    const onSubmit = useCallback(formData => {
        dispatch(updateVendorCreate(formData, setCurrentStep));
    }, [dispatch, setCurrentStep]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [onSubmit, setCurrentOnSubmit]);

    return <VendorFormUI  />;
}
