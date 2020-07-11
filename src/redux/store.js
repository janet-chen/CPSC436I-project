import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export default store;