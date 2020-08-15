import React from 'react';
import { DriverDetailsHeaderUI } from '../ui/DriverDetailsHeaderUI';
import { useSelector } from 'react-redux';
import { getNameSelector } from '../../../../../redux/driver/driverSelectors';

export const DriverDetailsHeaderContainer = () => {
    const name = useSelector(getNameSelector);

    return <DriverDetailsHeaderUI name={name} />;
}