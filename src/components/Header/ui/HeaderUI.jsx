import React from 'react';
import './Header.scss';
import { SearchContainer } from '../../common/icons/Search/functional/SearchContainer';
import { NotificationContainer } from '../../common/icons/Notification/functional/NotificationContainer';
import { ProfileContainer } from '../../common/icons/Profile/functional/ProfileContainer';


export const HeaderUI = ({ component = null, sectionName, isBigger, additionalComponent }) => {
    return (<header className="Header">
        <section className={`Left${isBigger ? '_bigger' : ''}`}>
            <div className="Left-Heading">
                {component}
                <span>{sectionName}</span>
                {additionalComponent}
            </div>
            <label className="Left-Label">
                <input type="text" placeholder="Search" className="Left-Input" />
                <SearchContainer className="Left-SearchIcon" />
            </label>
        </section>
        <section className="Right">
            <NotificationContainer />
            <ProfileContainer name="J" className="Right-Profile" />
        </section>
    </header>)
}