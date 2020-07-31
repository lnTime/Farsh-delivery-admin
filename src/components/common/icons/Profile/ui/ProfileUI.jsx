import React from 'react';
import './Profile.scss';

export const ProfileUI = ({name, className}) => {
    return <div className={`Profile ${className}`}>
        {name}
    </div>
}