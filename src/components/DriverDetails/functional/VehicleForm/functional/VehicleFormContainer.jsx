import React from 'react';
import { VehicleFormUI } from '../ui/VehicleFormUI';

export const VehicleFormContainer = () => {

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
    />;
}