import React from 'react';
import './OrderDetailContent.scss';
import { OrderInformationContainer } from '../functional/OrderInformation/functional/OrderInformationContainer';
import { OrderLocationContainer } from '../functional/OrderLocation/functional/OrderLocationContainer';

export const OrderDetailContentUI = ({description}) => {
    return (<div className="OrderDetailContentInfo">
        <OrderInformationContainer />
        <OrderLocationContainer />
        <div>
            <div className="OrderDetailContentMiniInfoBlock">
                <div>
                    <span className="OrderDetailContentMiniInfoBlock-LightInfo">Assigned to</span>
                    <span className="OrderDetailContentMiniInfoBlock-BlackInfo">...</span>
                </div>
                <div>
                    <span className="OrderDetailContentMiniInfoBlock-LightInfo">Pickup time & Date</span>
                    <span className="OrderDetailContentMiniInfoBlock-BlackInfo">...</span>
                </div>
            </div>
            <div className="OrderDetailContentDescription">
                <span className="OrderDetailContentDescription-Title">Description</span>
                <span className="OrderDetailContentDescription-Content">{description}</span>
            </div>
        </div>
    </div>);
}