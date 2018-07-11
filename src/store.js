import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';

const initialState = {};
const middlewares = [thunk];
let composeEnhancer = compose;

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(...middlewares)));

export default store;
