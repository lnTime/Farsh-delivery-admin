import React, { useState, useEffect } from 'react';
import { NewDriverSectionsUI } from '../ui/NewDriverSectionsUI';

const sections = [
    {id: 1, title: 'Profile Info'}, 
    {id: 2, title: 'Real name information'},
    {id: 3, title: 'Driving License'},
    {id: 4, title: 'Vehicle info'},
    {id: 5, title: 'Vendor'},
];

export const NewDriverSectionsContainer = ({activeID}) => {

    const [driverSections, setDriverSections] = useState(null);

    useEffect(() => {
        const items = sections.map(section => (<li 
                key={section.id} 
                className={`DriverSections-Item ${activeID === section.id ? 'DriverSections-Item_active' : ''}`}>
            <span className="DriverSections-Item_count">{section.id}</span>
            <span className="DriverSections-Item_title">{section.title}</span>
        </li>));
        setDriverSections(items);
    }, [activeID]);

    return <NewDriverSectionsUI
        driverSections={driverSections} />;
}