import React from 'react';
import './DriverHistory.scss';

export const DriverHistoryUI = ({driverHistoryItems}) => {
    return (<div className="DriverHistory">
        <span className="DriverHistory-Title">Driver History</span>
        <ul className="DriverHistoryItems">
            {driverHistoryItems}
        </ul>
    </div>);
}