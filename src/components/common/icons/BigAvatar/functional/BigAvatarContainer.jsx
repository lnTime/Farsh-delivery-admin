import React from 'react';
import { BigAvatarUI } from '../ui/BigAvatarUI';

export const BigAvatarContainer = ({className = ''}) => {
    return <div className={className}>
        <BigAvatarUI />
    </div>;
}