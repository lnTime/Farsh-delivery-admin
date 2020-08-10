import React from 'react';
import './OrderInformation.scss';

export const OrderInformationUI = () => {
    return (<div className="OrderInformation">
        <div className="OrderTechnical">
            <div>
                <span className="OrderTechnical-OrderNumberAlphabetical">Order no#</span>
                <span className="OrderTechnical-OrderNumber">1101101</span>
            </div>
            <div>
                <span className="OrderTechnical-OrderDateAlphabetical">Date</span>
                <span className="OrderTechnical-OrderDate">May 26, 2020</span>
            </div>
        </div>
    </div>);
}