import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Board from './components/Board'
import BoardReducer from './reducers/BoardReducer'

const store = createStore(BoardReducer);

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById('root'));
