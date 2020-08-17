import React from 'react';
import './OrderDetailHeader.scss';
import { PaperContainer } from '../../../../common/icons/Paper/functional/PaperContainer';
import {NotificationAndProfileContainer} from '../../../../common/icons/NotificationAndProfile/functional/NotificationAndProfileContainer';

export const OrderDetailHeaderUI = () => {
    return (<header className="OrderDetailHeader">
        <div className="OrderDetailHeaderLeft">
            <div className="OrderDetailHeaderLeftWrapper">
                <div>
                    <PaperContainer isActive/>
                    <span className="OrderDetailHeaderLeft-OrderNumber">1101101</span>
                </div>
                <span className="OrderDetailHeaderLeft-SectionName">Home &#62; Orders</span>
            </div>
            <div className="OrderDetailLeftSideActions">
                <button className="OrderDetailLeftSideActions-Button OrderDetailLeftSideActions-Button_black">Assign</button>
                <button className="OrderDetailLeftSideActions-Button OrderDetailLeftSideActions-Button_white">Add pickup time</button>
                <button className="OrderDetailLeftSideActions-Button OrderDetailLeftSideActions-Button_white">Edit Pickup location</button>
            </div>
        </div>
        <div className="OrderDetailHeaderRight">
            <NotificationAndProfileContainer clas = 'Right' />
        </div>
    </header>);
}