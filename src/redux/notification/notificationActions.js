import { notificationConstants } from "./notificationConstants";

export const openNotification = (notification) => 
({type: notificationConstants.OPEN_NOTIFICATION, payload: notification});

export const closeNotification = (notification) => 
({type: notificationConstants.CLOSE_NOTIFICATION, payload: notification});