import React from 'react';
import {HeaderContainer} from '../../Header/functional/HeaderContainer';
import './Orders.scss';
import { StatusesContainer } from '../functional/Statuses/functional/StatusesContainer';
import { DataContainer } from '../functional/Data/functional/DataContainer';
import { PaperContainer } from '../../common/icons/Paper/functional/PaperContainer';

export const OrdersUI = () => {
    return <div className="Orders">
            <HeaderContainer component={<PaperContainer isActive />} sectionName="Orders" />
            <StatusesContainer />
            <DataContainer />
        </div>
}