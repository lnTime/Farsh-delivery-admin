import React from 'react';
import { CarUI } from "../ui/CarUI";

export const CarContainer = ({className = null}) => {
    return (
        <div className={className}>
            <CarUI />
        </div>
    );
};