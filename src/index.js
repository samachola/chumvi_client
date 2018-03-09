import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './components/routes/routes';


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
