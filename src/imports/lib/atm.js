import axios from 'axios';
import api from '../utils/api';

let headers = '';

const authorizationHeader = (card, pin) => window.btoa(`${card}:${pin}`);

const login = (card, pin) => {
  axios.defaults.headers = {
    Authorization: 'Basic ' + authorizationHeader(card, pin),
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return api.get('/auth')
    .then(response => response.data)
    .catch((e) => {
      console.log('ERR', e);
      console.log('ERR', Object.keys(e));
      console.log('ERR', Object.keys(e).map(k => e[k]));
      console.log('ERR', JSON.stringify(e.toJSON()));
      return null;
    });
};

const transactions = {
  get: () => api.get('/transactions', {headers})
    .then(response => response.data)
    .catch(() => []),
};

export default {
  login,
  transactions,
};
