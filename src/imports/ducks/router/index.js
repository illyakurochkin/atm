import Auth from './../../../screens/Auth';
import Home from './../../../screens/Home';
import {selectAccount} from './../account';
import Transactions from '../../../screens/Transactions';
import CreateTransaction from '../../../screens/CreateTransaction';
import GetMoney from '../../../screens/GetMoney';
import PutMoney from '../../../screens/PutMoney';

const SET_SCREEN = 'atm/router/SET_SCREEN';

export const screens = {
  auth: Auth,
  home: Home,
  transactions: Transactions,
  createTransaction: CreateTransaction,
  getMoney: GetMoney,
  putMoney: PutMoney,
};

const INITIAL_STATE = 'auth';

export const selectScreen = state => selectAccount(state) ? screens[state.ducks.router] : Auth;

export default (state = INITIAL_STATE, {type, screenName}) => {
  switch(type) {
    case SET_SCREEN:
      return screenName;
    default:
      return state;
  }
}
