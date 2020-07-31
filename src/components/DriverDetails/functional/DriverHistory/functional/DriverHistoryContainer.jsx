import React, { useState, useEffect } from 'react';
import { DriverHistoryUI } from '../ui/DriverHistoryUI';
import avatarSRC from '../../../../../assets/avatars/avatar-47.png'

const history = [
    {id: 1, date: 'May 24, 2020', title: 'John Doe started an Order <b>1231313</b>', img: avatarSRC},
    {id: 2, date: 'May 24, 2020', title: 'John Doe started an Order <b>1231313</b>', img: avatarSRC},
    {id: 3, date: 'May 24, 2020', title: 'John Doe started an Order <b>1231313</b>', img: avatarSRC},
];

export const DriverHistoryContainer = () => {

    const [driverHistoryItems, setDriverHistoryItems] = useState(null);

    useEffect(() => {
        const items = history.map(item => <li key={item.id} className="DriverHistoryItems-Item">
            <img src={item.img} alt="Avatar" />
            <div className="DriverHistoryItemContent">
                <span className="DriverHistoryItemContent-Date">{item.date}</span>
                <span className="DriverHistoryItemContent-Title" dangerouslySetInnerHTML={{__html: item.title}}/> 
            </div>
        </li>);
        setDriverHistoryItems(items);
    }, []);

    return <DriverHistoryUI driverHistoryItems={driverHistoryItems}/>;
}