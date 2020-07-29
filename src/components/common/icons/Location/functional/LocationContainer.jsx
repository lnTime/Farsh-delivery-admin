import React from 'react';
import { LocationUI } from '../ui/LocationUI';

export const LocationContainer = ({className = 'LocIcon'}) => {
    return <div className={className}>
        <LocationUI />
    </div>;
}