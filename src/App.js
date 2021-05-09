import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/Homepage/HomePage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvents from './components/views/TablesEvents/TablesEvents';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrder from './components/views/WaiterOrder/TablesOrder';
import Kitchen from './components/views/Kitchen/Kitchen';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEvents} />
        </Switch>
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;
