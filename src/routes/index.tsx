import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/Github_Explorer" exact component={Dashboard} />
    <Route
      path="/Github_Explorer/repository/:repository+"
      component={Repository}
    />
  </Switch>
);

export default Routes;
