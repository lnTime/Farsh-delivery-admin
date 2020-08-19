import React, { useState, useEffect } from 'react';
import { NewDriverSectionsUI } from '../ui/NewDriverSectionsUI';
import { CheckMarkContainer } from '../../../../common/icons/CheckMark/functional/CheckMarkContainer';

const sections = [
    { id: 1, title: 'Profile Info' },
    { id: 2, title: 'Real name information' },
    { id: 3, title: 'Driving License' },
    { id: 4, title: 'Vehicle info' },
    { id: 5, title: 'Vendor' },
];

export const NewDriverSectionsContainer = ({ activeID }) => {

    const [driverSections, setDriverSections] = useState(null);

    useEffect(() => {
        const items = sections.map(section => (<li
            key={section.id}
            className={`DriverSections-Item ${activeID === section.id || section.id < activeID ? 'DriverSections-Item_active' : ''}  `}>
            <div className={`${section.id < activeID ? 'DriverSections-DoneLine_block' : 'DriverSections-DoneLine_none'}`}></div>
            <div className={`DriverSections-Item_count ${section.id < activeID ? 'DriverSections-Item_done' : activeID === section.id ? 'DriverSections-Item_active' : ''}`}>
                {`${section.id < activeID ? ' ': section.id}`}
            </div>
            <CheckMarkContainer MarkClass={`${section.id < activeID ? 'DisplayBlock' : 'DisplayNone'}`} />
            <span className="DriverSections-Item_title">{section.title}</span>
        </li>));
        setDriverSections(items);
    }, [activeID]);

    return <NewDriverSectionsUI driverSections={driverSections} />;
}