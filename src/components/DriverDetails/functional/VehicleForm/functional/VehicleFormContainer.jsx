import React from 'react';
import  VehicleFormUI  from '../ui/VehicleFormUI';
import { useEditMode } from '../../../../common/custom-hooks/useEditMode';

export const VehicleFormContainer = () => {
    const [isEdit, handleClick] = useEditMode();
    const plateNumber = 'YUK-7812', 
        model = 1988, 
        make = 'GM', 
        registeredCountry = 'Saudi Arabia',
        state = 'Riyadh', 
        city = 'Makkah', 
        registrationNumber = 87123, 
        mvpi = 836232;

    return <VehicleFormUI 
            plateNumber={plateNumber}
            model={model}
            make={make}
            registeredCountry={registeredCountry}
            state={state}
            city={city}
            registrationNumber={registrationNumber}
            mvpi={mvpi}
            isEdit = {isEdit}
            handleClick = {handleClick}
    />;
}