import React, { useState, useEffect } from 'react';
import { DriverDetailsUI } from '../ui/DriverDetailsUI';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverData } from '../../../redux/driver/driverActions';
import { getDriverSelector } from '../../../redux/driver/driverSelectors';

export const DriverDetailsContainer = ({match}) => {
    const profile = useSelector(getDriverSelector);
    const dispatch = useDispatch();
    window.profile = profile;
    useEffect(() => {
        dispatch(getDriverData(match.params.id));
    }, []);

    if (!profile) {
        return null;
    }



    return <DriverDetailsUI />;
}