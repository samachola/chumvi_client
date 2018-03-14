import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from '../signup/signup';
import Login from '../login/login';
import Dashboard from '../dashboard/dashboard';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </BrowserRouter>
);

export default Routes;
