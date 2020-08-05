import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
// import reducer from './Store/reducer' // Yhis reducer is splited into 2 reducers
import thunk from 'redux-thunk'


import counterReducer from './Store/reducers/counter'
import resultReducer from './Store/reducers/result'
import {Provider} from 'react-redux';
const rootReducer = combineReducers(
  {
    ctr:counterReducer,
    rst:resultReducer
  }
)

const logger = (store) =>{
  return next => {
    return action =>{
      console.log('before next', store.getState());
      const result = next(action);
      console.log('after next', store.getState());
      return result;
    }
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
// const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
