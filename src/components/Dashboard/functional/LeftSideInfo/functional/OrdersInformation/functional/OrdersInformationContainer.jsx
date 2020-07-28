import React, { useState, useEffect } from 'react';
import { OrdersInformationUI } from '../ui/OrdersInformationUI';
import { PaperContainer } from '../../../../../../common/icons/Paper/functional/PaperContainer';

const orders = [
    { id: 1, orderNumber: 1101101, orderLocation: 'From: Centria Mall, Olaya St, Riyadh 12241', orderDate: 'Today, 5 PM' },
    { id: 2, orderNumber: 1101101, orderLocation: 'From: Centria Mall, Olaya St, Riyadh 12241', orderDate: 'Today, 11 AM' }
];

export const OrdersInformationContainer = () => {

    const [orderList, setOrderList] = useState(null);

    useEffect(() => {
        const items = orders.map(order => {
            return (<li key={order.id} className="OrdersInformationList-Item">
                <PaperContainer />
                <div className="OrderText">
                    <span className="OrderText-OrderNumber">#{order.orderNumber}</span>
                    <span className="OrderText-OrderLocation">{order.orderLocation}</span>
                </div>
                <span className="OrderText-OrderDate">
                    {order.orderDate}
                </span>
            </li>);
        });
        setOrderList(items);
    }, []);

    return <OrdersInformationUI orderList={orderList} />;
}