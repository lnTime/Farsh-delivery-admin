import React from 'react';
import { LeftSideMenuContainer } from '../../LeftSideMenu/functional/LeftSideMenuContainer';
import { OrdersContainer } from '../../Orders/functional/OrdersContainer';
import './App.scss'
import { Switch, Route } from 'react-router-dom';
import { DashboardContainer } from '../../Dashboard/functional/DashboardContainer';
import { AddDriverFormContainer } from '../../AddDriverForm/functional/AddDriverFormContainer';
import { DriverDetailsContainer } from '../../DriverDetails/functional/DriverDetailsContainer';
import { OrderDetailContainer } from '../../OrderDetail/functional/OrderDetailContainer';
import { LoginContainer } from '../../Login/functional/LoginContainer';

export const AppUI = () => {
  return (
    <div className="AppUI">
      <LeftSideMenuContainer />
      <Switch>
        <Route exact path="/orders" component={OrdersContainer} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/add-driver" component={AddDriverFormContainer} />
        <Route exact path="/driver-details" component={DriverDetailsContainer} />
        <Route exact path="/order-detail" component={OrderDetailContainer} />
        <Route exact path="/login" component={LoginContainer}/>
      </Switch>
    </div>
  );
};
