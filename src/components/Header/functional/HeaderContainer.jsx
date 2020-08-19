import React from 'react';
import { HeaderUI } from "../ui/HeaderUI"

export const HeaderContainer = ({component, sectionName, isBigger, additionalComponent = null}) => {
    return <HeaderUI 
        component={component} 
        sectionName={sectionName}
        additionalComponent={additionalComponent}
        isBigger={isBigger}
        />;
}