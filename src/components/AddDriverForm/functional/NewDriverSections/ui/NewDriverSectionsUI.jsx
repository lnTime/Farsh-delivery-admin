import React from 'react';
import styles from './NewDriverSections.module.scss';
import './NewDriverSections.module.scss';

export const NewDriverSectionsUI = ({driverSections}) => {
    return (<ul className= {styles.DriverSections}>
        {driverSections}
    </ul>)
}