import React from 'react';
import { LeftSideMenuContainer } from '../../LeftSideMenu/functional/LeftSideMenuContainer';
import { OrdersContainer } from '../../Orders/functional/OrdersContainer';
import styles from './App.module.scss';
import { Switch, Route } from 'react-router-dom';
import { DashboardContainer } from '../../Dashboard/functional/DashboardContainer';
import { AddDriverFormContainer } from '../../AddDriverForm/functional/AddDriverFormContainer';
import { DriverDetailsContainer } from '../../DriverDetails/functional/DriverDetailsContainer';
import { OrderDetailContainer } from '../../OrderDetail/functional/OrderDetailContainer';
import { SearchDriverContainer } from '../../SearchDriverSection/functional/SearchDriverSectionContainer';
import { SearchPhoneContainer } from '../../SearchPhone/functional/SearchPhoneContainer';
import { HeaderTopContainer } from '../../HeaderTop/functional/HeaderTopContainer';
import { LoginContainer } from '../../Login/functional/LoginContainer';
import { DriversContainer } from '../../Drivers/functional/DriversContainer';

export const AppUI = () => {
  return (
    <div className={styles.AppUI}>
      <LeftSideMenuContainer />
      <Switch>
        <Route exact path="/orders" component={OrdersContainer} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/add-driver" component={AddDriverFormContainer} />
        <Route exact path="/drivers/:id" component={DriverDetailsContainer} />
        <Route exact path="/order-detail" component={OrderDetailContainer} />
        <Route exact path = "/search-driver" component = {SearchDriverContainer} />
        <Route exact patch = "search-phone" component = {SearchPhoneContainer} />
        <HeaderTopContainer/>
        <Route exact path="/login" component={LoginContainer}/>
        <Route exact path="/drivers" component={DriversContainer}/>
      </Switch>
    </div>
  );
};
