import React from 'react';
import './ActivityTextual.scss';
import {ActivityNotificationsContainer} from '../functional/ActivityNotifications/functional/ActivityNotificationsContainer';

export const ActivityTextualUI = () => {
    return (<div className="BoardActivity">
        <span className="BoardActivity-Title">Recent Activity</span>
        <span className="BoardActivity-Description">past 12 hours</span>
        <ActivityNotificationsContainer />
    </div>);
}