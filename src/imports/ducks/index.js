import {combineReducers} from 'redux';
import router from './router';
import account from './account';
import transactions from './transactions';

const rootReducer = combineReducers({
  router,
  account,
  transactions,
});

export default rootReducer;
