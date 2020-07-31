import React from 'react';
import './NewDriverSections.scss';

export const NewDriverSectionsUI = ({driverSections}) => {
    return (<ul className="DriverSections">
        {driverSections}
    </ul>)
}