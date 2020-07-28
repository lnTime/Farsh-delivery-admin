import React, { useState, useEffect } from 'react';
import { StatusesUI } from "../ui/StatusesUI"

const statusOptions = [
    { id: 1, title: 'All', count: 167 },
    { id: 2, title: 'Pending', count: 55 },
    { id: 3, title: 'Accepted', count: 32 },
    { id: 4, title: 'Rejected', count: 27 },
];

export const StatusesContainer = () => {
    const [statusItems, setStatusItems] = useState(null);
    const activeID = 1;

    useEffect(() => {
        const items = statusOptions.map(status => {
            const isActive = status.id === activeID;
            return (<li key={status.id} className={`Statuses-Item ${isActive ? 'Statuses-Item_active' : ''}`}>
                <span className={`Statuses-Title ${isActive ? 'Statuses-Title_active' : ''}`}>{status.title}</span>
                <span className={`Statuses-Count ${isActive ? 'Statuses-Count_active' : ''}`}>{status.count}</span>
            </li>);
        });
        setStatusItems(items);
    }, []);

    return <StatusesUI statusItems={statusItems} />
}