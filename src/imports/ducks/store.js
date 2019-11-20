import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {reducer as form} from 'redux-form';
import thunk from 'redux-thunk';
import ducks from '.';

const rootReducer = combineReducers({
  form,
  ducks,
});

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

export default () => createStore(
  rootReducer,
  enhancer,
);
