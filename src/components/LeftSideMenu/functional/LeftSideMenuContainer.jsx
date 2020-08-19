import React, { useState, useEffect, useCallback } from 'react';
import { LeftSideMenuUI } from "../ui/LeftSideMenuUI"
import { HomeContainer } from '../../common/icons/Home/functional/HomeContainer';
import { PaperContainer } from '../../common/icons/Paper/functional/PaperContainer';
import { MessageContainer } from '../../common/icons/Message/functional/MessageContainer';
import { DriverContainer } from '../../common/icons/Driver/functional/DriverContainer';
import { OperatorContainer } from '../../common/icons/Operator/functional/OperatorContainer';
import { CartContainer } from '../../common/icons/Cart/functional/CartContainer';
import { useLocation } from 'react-router-dom';

const menuOptions = [
    { id: 0, component: HomeContainer, title: 'Home' },
    { id: 1, component: PaperContainer, title: 'Orders' },
    { id: 2, component: MessageContainer, title: 'Messages' },
    { id: 3, component: DriverContainer, title: 'Drivers' },
    { id: 4, component: OperatorContainer, title: 'Operators' },
    { id: 5, component: CartContainer, title: 'Vendors' },
];

const getActiveID = (pathname) => {
    if (pathname?.startsWith('/drivers/')) {
        return 3;
    }
        
    switch(pathname) {
        case '/':
        case '/dashboard':
            return 0;
        case '/orders':
        case '/order-detail':
            return 1;
        case '/messages':
            return 2;
        case '/drivers':
        case '/add-driver':
            return 3;
        case '/operators':
            return 4;
        case '/vendors': 
            return 5;
        default:
            return 0;
    }
}

export const LeftSideMenuContainer = () => {
    const {pathname} = useLocation();
    const [menuItems, setMenuItems] = useState(null);
    const [isFullOpened, setIsFullOpened] = useState(null);
    const [activeID, setActiveID] = useState(1);
    const handleMenuStateChange = useCallback(() => {
        setIsFullOpened(!isFullOpened);
    }, [isFullOpened]);

    useEffect(() => {
        const items = menuOptions.map(option => {
            const isActiveItem = activeID === option.id;
            return <li key={option.id} className={`Menu-Item ${isActiveItem ? 'Menu-Item_active' : ''}`}>
                <div className="Menu-Item_wrapper">{<option.component isActive={isActiveItem} />}</div>
                {isFullOpened ? <span className={`Menu-Item_text${isActiveItem ? '-black' : ''}`}>{option.title}</span> : null}
            </li>;
        });
        setMenuItems(items);
    }, [activeID, isFullOpened]);

    useEffect(() => {
        const activeID = getActiveID(pathname);
        setActiveID(activeID);
    }, [pathname]);

    return <LeftSideMenuUI 
            menuItems={menuItems}
            handleMenuStateChange={handleMenuStateChange} 
            opened={isFullOpened}
            />;
}