import api from '../utils/api';

let headers = '';

const authorizationHeader = (card, pin) => window.btoa(`${card}:${pin}`);

const login = (card, pin) => {
  headers = {
    Authorization: 'Basic ' + authorizationHeader(card, pin),
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return api.get('/auth', {headers})
    .then(response => response.data)
    .then(data => console.log('/auth', data) || data)
    .catch(e => console.log(e));
};

const transactions = {
  get: () => api.get('/transactions', {headers})
    .then(response => response.data)
    .catch(e => console.log(e)),
};

export default {
  login,
  transactions,
};
