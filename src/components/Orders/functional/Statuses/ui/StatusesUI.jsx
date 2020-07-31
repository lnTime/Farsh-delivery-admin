import React from 'react';
import './Statuses.scss';

export const StatusesUI = ({statusItems}) => {
    return <div className="Statuses">
            <ul>
            {statusItems}
            </ul>
        </div>;
}