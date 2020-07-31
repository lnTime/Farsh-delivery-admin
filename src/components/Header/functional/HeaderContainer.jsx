import React from 'react';
import { HeaderUI } from "../ui/HeaderUI"

export const HeaderContainer = ({component, sectionName, isBigger}) => {
    return <HeaderUI 
        component={component} 
        sectionName={sectionName}
        isBigger={isBigger}
        />;
}