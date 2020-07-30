import React from 'react';
import './NotificationAndProfile.scss';
import {NotificationContainer} from '../../Notification/functional/NotificationContainer';
import {ProfileContainer} from '../../Profile/functional/ProfileContainer';

export const NotificationAndProfileUI = () => {
    return (<section className="Right">
        <NotificationContainer />
        <ProfileContainer name="J" className="Right-Profile" />
    </section>);
}