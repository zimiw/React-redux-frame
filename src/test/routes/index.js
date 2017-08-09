import { Router, Route, browserHistory } from 'react-router';
import { App } from '../containers';
import React from 'react';

export default (
  <Router history={browserHistory}>
    <Route path="/test" component={App} />
  </Router>
)
