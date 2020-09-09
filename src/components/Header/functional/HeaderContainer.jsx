import React, { useState } from 'react';
import { HeaderUI } from "../ui/HeaderUI"

export const HeaderContainer = ({component, sectionName, handleSearchDrivers = () => {}, isBigger, additionalComponent = null}) => {
    const [inputValue, setInputValue] = useState('');

    return <HeaderUI 
        component={component} 
        sectionName={sectionName}
        additionalComponent={additionalComponent}
        isBigger={isBigger}
        handleSearchDrivers={handleSearchDrivers}
        inputValue={inputValue}
        setInputValue={setInputValue}
        />;
}