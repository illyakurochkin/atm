import axios from 'axios';
import api from '../utils/api';


let headers = '';

const authorizationHeader = (card, pin) => window.btoa(`${card}:${pin}`);

const login = (card, pin) => {
  axios.defaults.headers = {Authorization: 'Basic ' + authorizationHeader(card, pin)};
  return api.get('/auth')
    .then(response => response.data)
    .catch(() => null);
};

const transactions = {
  get() {
    return api.get('/transactions', {headers})
      .then(response => response.data)
      .catch(() => []);
  }
};

export default {
  login,
  transactions,
};
