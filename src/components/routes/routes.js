import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Index from '../index/index';

const Routes = () =>(
    <Router>
        <Route path="/" component={ Index } />
    </Router>
);

export default Routes;