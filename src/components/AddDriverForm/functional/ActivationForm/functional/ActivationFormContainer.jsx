import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { ActivationFormUI } from '../ui/ActivationFormUI';

export const ActivationFormContainer = ({ setData, setCurrentOnSubmit, data }) => {
    const [activated, setActivated] = useState(true);

    const onSubmit = useCallback((formData) => {
        setData(data => {
            data.append('activation.activeFrom', formData.activationStartDate);
            data.append('activation.activeTo', formData.activationEndDate);
            data.append('activation.active', activated);
        })
        sendToServer();
    }, [activated, setData]);

    const sendToServer = useMemo(() => {
        fetch(`http://54.156.46.17:8080/api/v1/drivers`, {
            method: 'POST',
            body: data,
        });
    }, [data]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [onSubmit, setCurrentOnSubmit]);

    return <ActivationFormUI
        activated={activated}
        setActivated={setActivated}
    />;
}
