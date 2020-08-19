import React, { useState, useEffect } from 'react';
import { NewDriverSectionsUI } from '../ui/NewDriverSectionsUI';
import { CheckMarkContainer } from '../../../../common/icons/CheckMark/functional/CheckMarkContainer';
import '../ui/NewDriverSections.module.scss';
import styles from '../ui/NewDriverSections.module.scss';
const sections = [
    {id: 1, title: 'Profile Info'},
    {id: 2, title: 'Real name information'},
    {id: 3, title: 'Driving License'},
    {id: 4, title: 'Vehicle info'},
    {id: 5, title: 'Vendor'},
    {id: 6, title: 'Activation'}
];

export const NewDriverSectionsContainer = ({ activeID }) => {

    const [driverSections, setDriverSections] = useState(null);

    useEffect(() => {
        const items = sections.map(section => (<li
            key={section.id}
            className={`${styles['DriverSections-Item']} ${activeID === section.id || section.id < activeID ? `${styles['DriverSections-Item_active']}` : ''}  `}>
            <div className={`${section.id < activeID ? styles['DriverSections-DoneLine_block'] : styles['DriverSections-DoneLine_none']}`}></div>
            <div className={` ${styles['DriverSections-Item_count']}  ${section.id < activeID ? styles['DriverSections-Item_done'] : activeID === section.id ? styles['DriverSections-Item_active']  : ''}`}>
                {`${section.id < activeID ? ' ': section.id}`}
            </div>
            <CheckMarkContainer MarkClass={`${section.id < activeID ? 'DisplayBlock' : 'DisplayNone'}`} />
            <span className= {styles["DriverSections-Item_title"]}>{section.title}</span>
        </li>));
        setDriverSections(items);
    }, [activeID]);

    return <NewDriverSectionsUI
        driverSections={driverSections} />;
}
