import React from 'react';
import { NotificationUI } from "../ui/NotificationUI"

export const NotificationContainer = ({className = ''}) => {
    return <div className={className}>
        <NotificationUI />
    </div>;
}