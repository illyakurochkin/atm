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

  if(account) {
    dispatch(receiveAccountAction(account));
  }
};

export const logoutAction = () => receiveAccountAction(null);

export const selectAccount = state => state.ducks.account.account;
export const selectAccountLoading = state => state.ducks.account.loading;

// const INITIAL_STATE = {
//   loading: false,
//   account: null,
// };

const INITIAL_STATE = {
  loading: false,
  account: {
    'end_date': '2022-01-02',
    'number': '1122334455667788',
    'amount': '23',
    'client': {
      'firstname': 'Michael',
      'birthdate': '1999-11-22',
      'phone': '0777777777',
      'id': '1',
      'email': 'team_lead@teamleadmail.com',
      'lastname': 'Fediuchenko',
    },
    'creditLimit': '500',
    'type': 'CREDIT',
    'start_date': '2019-01-02',
    'surplier': null,
  },
};

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
