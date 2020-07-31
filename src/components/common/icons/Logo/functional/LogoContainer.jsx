import React from 'react';
import { LogoUI } from "../ui/LogoUI"

export const LogoContainer = ({className = ''}) => {
    return (
        <div className={className}>
            <LogoUI />
        </div>
    );
}