import React from 'react';
import { ProfileUI } from "../ui/ProfileUI"

export const ProfileContainer = ({name, className = ''}) => {
    return <ProfileUI name={name} className={className}/>;
}