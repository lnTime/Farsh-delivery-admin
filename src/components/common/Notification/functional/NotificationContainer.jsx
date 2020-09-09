import React, { useEffect } from 'react';
import { NotificationUI } from '../ui/NotificationUI';
import { useSelector, useDispatch } from 'react-redux';
import { getNotificationSelector } from '../../../../redux/notification/notificationSelectors';
import {closeNotification} from '../../../../redux/notification/notificationActions';
import { useCallback } from 'react';
import { useMemo } from 'react';
import styles from '../ui/Notification.module.scss';

export const NotificationContainer = () => {
    const {type, open, content} = useSelector(getNotificationSelector);
    const dispatch = useDispatch();
    const className = useMemo(() => {
        switch(type) {
            case 'success':
                return '';
            case 'error':
                return styles['Notification_error'];
            case 'warning':
                return styles['Notification_warning'];
        }
    }, [type]);
    useEffect(() => {
        if (open) {
            let interval = setTimeout(() => {
                dispatch(closeNotification());
                clearTimeout(interval);
            }, 3000);
        }
    }, [open, dispatch]);

    const closeNotificationHandler = useCallback(() => {
        dispatch(closeNotification());
    }, []);

    if (!open) {
        return null;
    }

    return <NotificationUI 
    closeNotificationHandler={closeNotificationHandler}
    notification={content}
    styles={styles}
    className={className}
    />;
}