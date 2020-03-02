import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Main from './Main';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/store/:storeId" component={App} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
