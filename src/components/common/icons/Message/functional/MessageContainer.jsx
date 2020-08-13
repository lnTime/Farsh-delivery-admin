import React from 'react';
import { MessageUI } from "../ui/MessageUI"

export const MessageContainer = ({isActive}) => {
    return <MessageUI isActive={isActive}/>;
}