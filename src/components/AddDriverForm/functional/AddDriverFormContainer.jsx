import React, { useState, useMemo } from 'react';
import { AddDriverFormUI } from '../ui/AddDriverFormUI';
import {getComponent} from './helper';
import { useEffect } from 'react';

export const AddDriverFormContainer = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [currentOnSubmit, setCurrentOnSubmit] = useState(null);
    const [data, setData] = useState(new FormData());
    const component = useMemo(() => getComponent(currentStep), [currentStep]);    
    
    window.data = data;

    useEffect(() => {
        fetch(`http://54.156.46.17:8080/api/v1/drivers?pageNo=0&pageSize=10`);
    }, []);

    return <AddDriverFormUI
        onSubmit={currentOnSubmit}
        setCurrentOnSubmit={setCurrentOnSubmit}
        Component={component}
        activeID={currentStep}
        setData={setData}
        data={data}
        setCurrentStep={setCurrentStep}
    />;
}