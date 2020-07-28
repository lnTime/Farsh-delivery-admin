import React from 'react';
import { LeftSideMenuContainer } from '../../LeftSideMenu/functional/LeftSideMenuContainer';
import { OrdersContainer } from '../../Orders/functional/OrdersContainer';
import './App.scss'
import { Switch, Route } from 'react-router-dom';
import { DashboardContainer } from '../../Dashboard/functional/DashboardContainer';

export const AppUI = () => {
  return (
    <div className="AppUI">
      <LeftSideMenuContainer />
      <Switch>
        <Route exact path="/orders" component={OrdersContainer} />
        <Route exact path="/dashboard" component={DashboardContainer} />
      </Switch>
    </div>
  );
}
