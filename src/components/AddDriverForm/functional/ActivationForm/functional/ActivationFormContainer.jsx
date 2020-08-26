import React, {useCallback, useEffect, useState} from 'react';
import { ActivationFormUI } from '../ui/ActivationFormUI';
import { useDispatch } from 'react-redux';
import { activateDriver} from '../../../../../redux/driver/driverActions'


export const ActivationFormContainer = ({ setCurrentOnSubmit }) => {
    const [activated, setActivated] = useState(true);
    const dispatch = useDispatch();

    const onSubmit = useCallback((formData) => {
        dispatch(activateDriver(formData, activated));
    }, [activated, dispatch]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [onSubmit, setCurrentOnSubmit]);

    return <ActivationFormUI
        activated={activated}
        setActivated={setActivated}
    />;
}
