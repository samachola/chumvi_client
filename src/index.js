import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import Routes from './components/routes/routes';
import setAuthorizationTokens from './utils/setAuthorizationTokens';
import rootReducer from './reducers/rootReducer';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

setAuthorizationTokens(localStorage.getItem('token'));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
