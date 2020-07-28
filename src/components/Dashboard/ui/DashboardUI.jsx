import React from 'react';
import './Dashboard.scss';
import { LeftSideInfoContainer } from '../functional/LeftSideInfo/functional/LeftSideInfoContainer';
import { HeaderContainer } from '../../Header/functional/HeaderContainer';
import {HomeContainer} from '../../common/icons/Home/functional/HomeContainer';
import { DashbardMessageContainer } from '../functional/DashboardMessage/functional/DashboardMessageContainer';
import { ActivityDiagramContainer } from '../functional/ActivityDiagram/functional/ActivityDiagramContainer';
import { ActivityTextualContainer } from '../functional/ActivityTextual/functional/ActivityTextualContainer';

export const DashboardUI = () => {
    return <>
        <LeftSideInfoContainer />
        <div className="DashboardRightSide">
            <HeaderContainer sectionName="Home" component={<HomeContainer />} isBigger />
            <div className="Content">
                <DashbardMessageContainer />
                <div className="Activity">
                    <ActivityDiagramContainer />
                    <ActivityTextualContainer />
                </div>
            </div>
        </div>
    </>;
}