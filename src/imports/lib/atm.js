import api from '../utils/api';
import _ from 'lodash';

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

const getMoney = (amount) => api.post('/transactions/withdraw', {}, {params: {atmId: 1, amount: amount * 100}})
  .catch(e => {
    throw _.get(e.request, 'responseText', e.message || JSON.stringify(e));
  });

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
        console.log('e', e);
        console.log('e.message', e.message);
        console.log('e.response', e.response);
        console.log('e.request', e.request);
        console.log(JSON.parse(JSON.stringify(e)));
        throw _.get(e.request, 'responseText', e.message || JSON.stringify(e));
      }),
};

export default {
  login,
  getMoney,
  transactions,
};
