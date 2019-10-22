import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';

// middleware for making actions asynchronous
import thunkMiddleware from 'redux-thunk';
// will log to console all the actions that are run
import { createLogger } from 'redux-logger';

// pull our containered reducers
import products from './products/reducer';
import stores from './stores/reducer';
// import projects from './projects/reducer';

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger(),
);

// REDUX =====
const allReducers = combineReducers({
  stores,
  products,
  // projects,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a redux store using the combined reducer and middleware functions
export const store = createStore(allReducers, composeEnhancer(middleware));
