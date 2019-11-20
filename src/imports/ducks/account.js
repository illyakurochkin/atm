import atm from '../lib/atm';

const START_LOADING = 'atm/account/START_LOADING';
const RECEIVE_ACCOUNT = 'atm/account/RECEIVE_ACCOUNT';

const startLoadingAction = () => ({
  type: START_LOADING,
});

const receiveAccountAction = account => ({
  type: RECEIVE_ACCOUNT,
  account,
});

export const loginAction = (card, pin) => async dispatch => {
  dispatch(startLoadingAction());
  const account = await atm.login(card, pin);
  dispatch(receiveAccountAction(account));
};

export const selectAccount = state => state.ducks.account;

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, {type, account}) => {
  switch (type) {
    case START_LOADING:
      return {...state, loading: true};
    case RECEIVE_ACCOUNT:
      return {...state, loading: false, account};
    default:
      return state;
  }
}
