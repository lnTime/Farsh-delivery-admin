import React from 'react';
import './LeftSideInfo.scss';
import { WarningContainer } from '../functional/Warning/functional/WarningContainer';
import { OrdersInformationContainer } from '../functional/OrdersInformation/functional/OrdersInformationContainer';

export const LeftSideInfoUI = () => {
    return (<div className="LeftSideInfo">
        <div className="LeftSideInfo-Wrapper">
            <div className="MiniPersonalInfo">
                <span className="MiniPersonalInfo-DayLetters">Your Day</span>
                <span className="MiniPersonalInfo-Date">09/10/2020</span>
            </div>
            <WarningContainer />
            <OrdersInformationContainer />
        </div>
    </div>);
}