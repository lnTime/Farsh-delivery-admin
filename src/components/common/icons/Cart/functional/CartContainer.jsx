import React from 'react';
import { CartUI } from "../ui/CartUI"

export const CartContainer = ({isActive}) => {
    return <CartUI isActive={isActive}/>;
}