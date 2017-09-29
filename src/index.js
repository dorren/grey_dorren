import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import Board from './components/Board';
import BoardReducer from './reducers/BoardReducer';

import './index.css';

//const store = createStore(BoardReducer);
const store = createStore(BoardReducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById('root'));
