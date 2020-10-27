import React, {useCallback, useEffect, useState} from 'react';
import { ActivationFormUI } from '../ui/ActivationFormUI';
import { useDispatch } from 'react-redux';
import { activateDriver} from '../../../../../redux/driver/driverActions'
import { useHistory } from 'react-router-dom';


export const ActivationFormContainer = ({ setCurrentOnSubmit }) => {
    const [activated, setActivated] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();

    const updateHistory = useCallback(() => {
        history.push(`/drivers`);
    }, [history]);

    const goToDriver = useCallback((id) => {
        history.push(`/drivers/${id}`);
    }, [history]);

    const onSubmit = useCallback((formData) => {
        dispatch(activateDriver(formData, activated, updateHistory, goToDriver));
    }, [activated, dispatch, updateHistory, goToDriver]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [onSubmit, setCurrentOnSubmit]);

    return <ActivationFormUI
        activated={activated}
        setActivated={setActivated}
    />;
}
