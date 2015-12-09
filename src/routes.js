import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './components/Application.react';

export default (
  <Route name="creative list" path="/" component={Application}></Route>
);