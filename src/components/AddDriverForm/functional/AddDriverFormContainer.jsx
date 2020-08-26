import React, { useState, useMemo } from 'react';
import { AddDriverFormUI } from '../ui/AddDriverFormUI';
import {getComponent} from './helper';

export const AddDriverFormContainer = () => {
    const [currentStep, setCurrentStep] = useState(6);
    const [currentOnSubmit, setCurrentOnSubmit] = useState(null);
    const [data, setData] = useState(new FormData());
    const component = useMemo(() => getComponent(currentStep), [currentStep]);

    window.data = data;

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
