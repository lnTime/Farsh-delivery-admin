import React, { useEffect } from 'react';
import { DriverDetailsUI } from '../ui/DriverDetailsUI';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverData } from '../../../redux/driver/driverActions';
import { getDriverSelector } from '../../../redux/driver/driverSelectors';

export const DriverDetailsContainer = ({match}) => {
    const profile = useSelector(getDriverSelector);
    const dispatch = useDispatch();
    const { id } = match.params;
    window.profile = profile;
    useEffect(() => {
        dispatch(getDriverData(id));
    }, [id, dispatch]);

    if (!profile) {
        return null;
    }


    return <DriverDetailsUI id={id} />;
}