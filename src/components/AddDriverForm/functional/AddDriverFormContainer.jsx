import React, { useState } from 'react';
import { AddDriverFormUI } from '../ui/AddDriverFormUI';
import { ProfileInfoFormContainer } from './ProfileInfoForm/functional/ProfileInfoFormContainer';
import { RealNameInformationFormContainer } from './RealNameInformationForm/functional/RealNameInformationFormContainer';
import { DrivingLicenseContainer } from './DrivingLicenseForm/functional/DrivingLicenseContainer';
import { VehicleInfoFormContainer } from './VehicleInfoForm/functional/VehicleInfoFormContainer';
import { VendorFormContainer } from './VendorForm/functional/VendorFormContainer';
import { useMemo } from 'react';

export const getComponent = (step) => {
    switch (step) {
        case 1:
            return <ProfileInfoFormContainer />;
        case 2:
            return <RealNameInformationFormContainer />;
        case 3:
            return <DrivingLicenseContainer />;
        case 4:
            return <VehicleInfoFormContainer />;
        case 5:
            return <VendorFormContainer />;
        default:
            return null;
    }
}

export const getFormName = (step) => {
    switch (step) {
        case 1:
            return 'profileInfo';
        case 2:
            return 'realNameInformation';
        case 3:
            return 'drivingLicense';
        case 4:
            return 'vehicleInfo';
        case 5:
            return 'vendor';
        default:
            return '';
    }
}

export const AddDriverFormContainer = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const data = {};

    const component = useMemo(() => getComponent(currentStep), [currentStep]);

    const onSubmit = (formData) => {
        const formName = getFormName(currentStep);
        data[formName] = formData;
        setCurrentStep(currentStep + 1);
    }

    return <AddDriverFormUI
        onSubmit={onSubmit}
        component={component}
        activeID={currentStep}
    />;
}