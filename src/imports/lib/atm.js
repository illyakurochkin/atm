import api from '../utils/api';

let headers = '';

const authorizationHeader = (card, pin) => window.btoa(`${card}:${pin}`);

const saveHeaders = (card, pin) => {
  headers = {
    Authorization: 'Basic ' + authorizationHeader(card, pin),
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
};

const login = (card, pin) => {
  saveHeaders(card, pin);
  return api.get('/auth', {headers})
    .then(response => response.data)
    .catch(e => console.log(e));
};

const mapResponseToTransactions = (response) => response.data.map(transaction => ({
  ...transaction,
  amount: Number(transaction.amount / 100).toFixed(2),
}));

const transactions = {
  get: () => api.get('/transactions', {headers})
    .then(mapResponseToTransactions)
    .catch(e => console.log('/transactions', e)),

  create: ({receiverCard: receiverNumber, amount}) =>
    api.post('/transaction/transfer', {}, {params: {receiverNumber, amount: amount * 100}, headers})
      .then(response => response.data)
      .then(data => console.log('/transaction/transfer', data))
      .catch(e => {
        throw e.response.data;
      }),
};

export default {
  login,
  transactions,
};
