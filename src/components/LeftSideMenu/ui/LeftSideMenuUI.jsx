import React from 'react';
import './LeftSideMenu.scss';
import { CarContainer } from '../../common/icons/Car/functional/CarContainer';
import { LogoContainer } from '../../common/icons/Logo/functional/LogoContainer';

export const LeftSideMenuUI = ({ menuItems, handleMenuStateChange, opened }) => {
    return (
        <nav className={`NavBar${opened === false ? '_closeAnimated' : 
        opened === true ? '_animated' : ''}`} onClick={handleMenuStateChange}>
            {opened ? <LogoContainer className="NavBar-Logo"/> : <CarContainer className="NavBar-Logo" />}
            <ul className="Menu">
                {menuItems}
            </ul>
        </nav>
    );
};