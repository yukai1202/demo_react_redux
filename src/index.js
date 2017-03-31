import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import { browserHistory } from 'react-router';
//import { syncHistoryWithStore } from 'react-router-redux';
//import configureStore from './store/configureStore';
//import App from './components/app';

//const store = configureStore();
//const history = syncHistoryWithStore(browserHistory, store);
//const store = configureStore();
//const createStoreWithMiddleware = applyMiddleware()(createStore);
import todoApp from './reducers';
import App from './components/app';
let store = createStore(todoApp);


ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>
  , document.querySelector('.container')
);

