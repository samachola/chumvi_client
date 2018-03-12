import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Signup from '../signup/signup';

const Routes = () =>(
    <Router>
        <Route path="/" component={ Signup } />
    </Router>
);

export default Routes;