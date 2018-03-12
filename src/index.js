import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './components/routes/routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={ store }>
        <Routes />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
