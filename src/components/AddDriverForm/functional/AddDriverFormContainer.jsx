import React, { useState, useMemo } from 'react';
import { AddDriverFormUI } from '../ui/AddDriverFormUI';
import {getComponent} from './helper';

export const AddDriverFormContainer = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [currentOnSubmit, setCurrentOnSubmit] = useState(null);
    const component = useMemo(() => getComponent(currentStep), [currentStep]);
    const [vehicleMakes, setVehicleMakes] = useState(null);

    return <AddDriverFormUI
        onSubmit={currentOnSubmit}
        setCurrentOnSubmit={setCurrentOnSubmit}
        Component={component}
        activeID={currentStep}
        setCurrentStep={setCurrentStep}
        vehicleMakes={vehicleMakes}
        setVehicleMakes={setVehicleMakes}
    />;
}
