import React from 'react';
import './OrdersInformation.scss';

export const OrdersInformationUI = ({orderList}) => {
    return (<div className="OrdersInformation">
        <span className="OrdersInformation-Title">Orders received today</span>
        <ul className="OrdersInformationList">
            {orderList}
        </ul>
    </div>);
}