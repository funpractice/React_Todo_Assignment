import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers } from "redux";
import { createStore } from 'redux';
import reducer from './store/reducer'
import visibilityFilter from './store/visibilityReducer'
import { Provider } from 'react-redux'

const todoApp = combineReducers({
  reducer,
  visibilityFilter
});
const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();