import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';

import rootReducer from './rootReducer';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export default store;
