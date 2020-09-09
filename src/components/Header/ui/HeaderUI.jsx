import React from 'react';
import './Header.scss';
import { SearchContainer } from '../../common/icons/Search/functional/SearchContainer';
import { NotificationContainer } from '../../common/icons/Notification/functional/NotificationContainer';
import { ProfileContainer } from '../../common/icons/Profile/functional/ProfileContainer';


export const HeaderUI = ({ component = null, inputValue, setInputValue,
    handleSearchDrivers, sectionName, isBigger, additionalComponent }) => {
    return (<header className="Header">
        <section className={`Left${isBigger ? '_bigger' : ''}`}>
            <div className="Left-Heading">
                {component}
                <span>{sectionName}</span>
                {additionalComponent}
            </div>
            <form onSubmit={(e) => handleSearchDrivers(e, inputValue)}>
                <label className="Left-Label">
                    <input value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                        placeholder="Search"
                        className="Left-Input" />
                    <SearchContainer 
                    onClick={(e) => handleSearchDrivers(e, inputValue)}
                    className="Left-SearchIcon" />
                </label>
            </form>
        </section>
        <section className="Right">
            <NotificationContainer />
            <ProfileContainer name="J" className="Right-Profile" />
        </section>
    </header>)
}