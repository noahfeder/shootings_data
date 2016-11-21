import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './reducers/';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from './Home';
import Data from './Data';
import About from './About';
import Show from './Show';
//TODO REMOVE FOR PROD
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));
export default store;

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="data" component={ Data } />
        <Route path="about" component={ About } />
        <Route path="show" component={ Show } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
