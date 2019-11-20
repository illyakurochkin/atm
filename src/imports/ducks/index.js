import {combineReducers} from 'redux';
import router from './router';
import account from './account';

const rootReducer = combineReducers({
  router,
  account,
});

export default rootReducer;
