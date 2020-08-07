import React from 'react';
import './OrderLocation.scss';
import {CycleContainer} from '../../../../../../common/icons/Cycle/functional/CycleContainer';
import {BlackLocationContainer} from '../../../../../../common/icons/BlackLocation/functional/BlackLocationContainer';

export const OrderLocationUI = () => {
    return (<div className="OrderLocation">
        <div className="OrderLocation-Icon">
            <CycleContainer />
            <div />
            <BlackLocationContainer />
        </div>
        <div className="OrderLocation_right">
            <div className="OrderLocation-Pickup">
                <span className="OrderLocation-Title">Pickup</span>
                <span className="OrderLocation-Value">C/122412, Al Safrat, Riyadh</span>
            </div>
            <div className="OrderLocation-DropOff">
                <span className="OrderLocation-Title">Drop off</span>
                <span className="OrderLocation-Value">Centria Mall, Olaya St, Riyadh 12241</span>
            </div>
        </div>
    </div>);
}