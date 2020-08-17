import React from 'react';
import { NotificationAndProfileContainer } from '../../common/icons/NotificationAndProfile/functional/NotificationAndProfileContainer';
import styles from './HeaderTop.module.scss'
import { DriverContainer } from '../../common/icons/Driver/functional/DriverContainer';


export const HeaderTopUI = () => {
    return (
        <>
            <div className={styles.HeaderTop}>
                <div className={styles.LeftSection}>
                    <div className = {styles.IconHeadingWrap}>
                        <DriverContainer/>
                        <h1 className = {styles.HeaderTop__H1}>Add New Driver</h1>
                    </div>
                    <span className = {styles.HeaderTop__span}> Home  &#62;  Drivers</span>
                </div>
                <div className={styles.RightSection}>
                    <NotificationAndProfileContainer clas = 'Right100'/>
                </div>
            </div>
        </>
    )
}