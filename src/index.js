import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import Routes from './components/routes/routes';
import setAuthorizationTokens from './utils/setAuthorizationTokens';


const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk),
);

setAuthorizationTokens(localStorage.getItem('token'));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
