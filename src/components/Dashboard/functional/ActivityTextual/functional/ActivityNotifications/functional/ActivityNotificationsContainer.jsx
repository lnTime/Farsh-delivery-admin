import React, { useEffect, useState } from 'react';
import { ActivityNotificationsUI } from '../ui/ActivityNotificationsUI';
import avatarSRC from '../../../../../../../assets/avatars/avatar-47.png';

const notifications = [
    { id: 1, src: avatarSRC, date: 'Just now', text: 'You have received new Order from <b>John Doe</b>' },
    { id: 2, src: avatarSRC, date: 'Yesterday', text: 'You have received new rating 4.5 from <b>John Doe</b>' },
    { id: 3, src: avatarSRC, date: 'May 2', text: 'You’ve received a new message from <b>Nathan Doe</b>' },
    { id: 4, src: avatarSRC, date: 'April 29', text: 'Your request for Order <b>#3456123</b> was accepted by <b>John Doe</b>' },
    { id: 5, src: avatarSRC, date: 'April 30', text: 'You’ve received a new message from <b>Nathan Doe</b>' },
];

export const ActivityNotificationsContainer = () => {

    const [activityNotifications, setActivityNotifications] = useState(null);

    useEffect(() => {
        const items = notifications.map(notification => (<li className="ActivityNotifications-Item" key={notification.id}>
            <img src={notification.src} alt="Notification"/>
            <div className="ActivityNotificationItemContent">
                <span className="ActivityNotificationItemContent-Date">{notification.date}</span>
                <span dangerouslySetInnerHTML={{ __html: notification.text }} className="ActivityNotificationItemContent-Text" />
            </div>
        </li>));
        setActivityNotifications(items);
    }, [])


    return <ActivityNotificationsUI activityNotifications={activityNotifications} />;
}