import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Pages
import Index from 'pages/';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
