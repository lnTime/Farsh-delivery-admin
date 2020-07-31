import React from 'react';
import './ActivityNotifications.scss';

export const ActivityNotificationsUI = ({activityNotifications}) => {
    return (<ul className="ActivityNotifications">
        {activityNotifications}
    </ul>);   
}