import React from 'react';
import styles from './NewDriverSectionsModule.scss';

export const NewDriverSectionsUI = ({driverSections}) => {
    return (<ul className= {styles.DriverSections}>
        {driverSections}
    </ul>)
}