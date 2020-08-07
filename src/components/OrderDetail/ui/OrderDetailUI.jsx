import React from 'react';
import './OrderDetail.scss';
import { OrderDetailHeaderContainer } from '../functional/OrderDetailHeader/functional/OrderDetailHeaderContainer';
import { OrderDetailContentContainer } from '../functional/OrderDetailContent/functional/OrderDetailContentContainer';
import { OrderMapContainer } from '../functional/OrderMap/functional/OrderMapContainer';

export const OrderDetailUI = () => {
    return (<div className="OrderDetail">
        <div className="OrderDetailContent">
            <OrderDetailHeaderContainer />
            <div style={{display: 'flex'}}>
                <OrderDetailContentContainer />
                <OrderMapContainer />
            </div>
        </div>
    </div>);
}