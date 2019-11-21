import atm from './../lib/atm';

const START_LOADING = 'atm/transactions/START_LOADING';
const RECEIVE_TRANSACTIONS = 'atm/transactions/RECEIVE_TRANSACTIONS';

const startLoadingAction = () => ({
  type: START_LOADING,
});

const receiveTransactionsAction = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions,
});

export const fetchTransactionsAction = () => async (dispatch) => {
  dispatch(startLoadingAction());
  const transactions = await atm.transactions.get();
  dispatch(receiveTransactionsAction(transactions));
};

export const selectTransactions = state => state.ducks.transactions.transactions;

export const selectTransactionsLoading = state => state.ducks.transactions.loading;

const INITIAL_STATE = {
  loading: false,
  transactions: [
    {
      'amount': '-12',
      'commission': 0,
      'id': 1,
      'source': 'Illya Kurochkin 4321432143214321',
      'type': 'TRANSFER',
      'status': true,
    },
    {
      'amount': '-34',
      'commission': 0,
      'id': 2,
      'source': 'м. Киїів, вул. Сковороди',
      'type': 'WITHDRAWAL',
      'status': true,
    },
    {
      'amount': '+12',
      'commission': 0,
      'id': 3,
      'source': 'Illya Kurochkin 4321432143214321',
      'type': 'TRANSFER',
      'status': false,
    },
  ],
};

export default (state = INITIAL_STATE, {type, tranactions}) => {
  switch (type) {
    case START_LOADING:
      return {...state, loading: true};
    case RECEIVE_TRANSACTIONS:
      return {...state, loading: false, tranactions};
    default:
      return state;
  }
}
