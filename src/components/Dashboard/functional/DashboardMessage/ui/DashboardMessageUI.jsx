import React from 'react';
import './DashboardMessage.scss';

export const DashboardMessageUI = ({text}) => {
    return (<div className="DashboardMessage">
        <div className="DashboardMessage-Heading">
            Good morning, Admin
        </div>
        <div className="DashboardMessage-Description">
            {text}
        </div>
    </div>);
}