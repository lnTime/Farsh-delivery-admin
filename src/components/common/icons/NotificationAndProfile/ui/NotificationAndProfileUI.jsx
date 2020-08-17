import React from 'react';
import './NotificationAndProfile.scss';
import {NotificationContainer} from '../../Notification/functional/NotificationContainer';
import {ProfileContainer} from '../../Profile/functional/ProfileContainer';

export const NotificationAndProfileUI = ({clas}) => {
    return (<section className={clas}>
        <NotificationContainer />
        <ProfileContainer name="J" className="Right-Profile" />
    </section>);
}