import React from 'react';
import './DriverDetails.scss';
import { NotificationAndProfileContainer } from '../../common/icons/NotificationAndProfile/functional/NotificationAndProfileContainer';
import {DriverBlackContainer} from '../../common/icons/DriverBlack/functional/DriverBlackContainer';

export const DriverDetailsUI = () => {
    return (<div className="DriverDetails">
        <header>
            <div className="DriverDetailsLeftSide">
                <div className="DriverDetailsLeftSideInformation">
                    <div className="DriverDetailsLeftSideInformation-Div"> 
                        <div>
                            <DriverBlackContainer />
                            <span className="DriverDetailsLeftSideInformation-DriverName">James Anderson</span>
                        </div>
                        <div>   
                            <span className="DriverDetailsLeftSideInformation-SectionName">Home > Drivers</span>
                        </div>  
                    </div>    
                    <div className="DriverDetailsLeftSideActions">
                        <button 
                            className="DriverDetailsLeftSideActions-Button DriverDetailsLeftSideActions-Button_black">
                                Assign task</button>
                        <button 
                            className="DriverDetailsLeftSideActions-Button DriverDetailsLeftSideActions-Button_white">
                            Message</button>
                    </div>
                </div>
            </div>
            <NotificationAndProfileContainer />
        </header>
    </div>)
}