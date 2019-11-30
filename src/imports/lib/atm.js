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
    .then(data => console.log('/auth', data) || data)
    .catch(e => console.log(e));
};

const mapResponseToTransactions = (response) => response.data
  .map(transaction => ({...transaction, amount: Number(transaction.amount).toFixed(2)}));

const transactions = {
  get: () => api.get('/transactions', {headers})
    .then(mapResponseToTransactions)
    .then(data => console.log('/transactions', data) || data)
    .catch(e => console.log('/transactions', e)),
};

export default {
  login,
  transactions,
};
