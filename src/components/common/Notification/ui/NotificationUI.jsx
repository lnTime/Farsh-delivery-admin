import React from 'react';
import { NotifyContainer } from '../../icons/Notify/functional/NotifyContainer';

export const NotificationUI = ({notification, closeNotificationHandler, className, styles}) => {
    return (<div className={`${styles.Notification} ${className}`}>
        <NotifyContainer />
        <div className={`${styles['Notification-Content']} ${styles.Content}`}>
            <span className={styles['Content-Title']}>{notification.title}</span>
            <span className={styles['Content-Description']}>{notification.description}</span>    
            <div className={styles['Content-Actions']}>
                {
                    notification.additionalComponent ? 
                        <button 
                            className={`${styles['Content-Button']} ${styles['Content-Button_view']}`}
                            onClick={notification.additionalComponent.handler}
                        >
                            View
                        </button>
                    : null
                }
                <button 
                    onClick={closeNotificationHandler}
                    className={`${styles['Content-Button']} ${styles['Content-Button_clear']}`}>
                        Clear
                </button>
            </div>
        </div>
    </div>);
}