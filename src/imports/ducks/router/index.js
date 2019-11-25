import Auth from './../../../screens/Auth';
import Home from './../../../screens/Home';
import {selectAccount} from './../account';
import Transactions from '../../../screens/Transactions';
import CreateTransaction from '../../../screens/CreateTransaction';

const SET_SCREEN = 'atm/router/SET_SCREEN';

export const screens = {
  auth: Auth,
  home: Home,
  transactions: Transactions,
  createTransaction: CreateTransaction,
};

const INITIAL_STATE = 'home';

export const selectScreen = state => {
  console.log('select screen', state);
  const account = selectAccount(state);

  if(!account) {
    return Auth;
  }

  return screens[state.ducks.router];
};

export default (state = INITIAL_STATE, {type, screenName}) => {
  switch(type) {
    case SET_SCREEN:
      return screenName;
    default:
      return state;
  }
}
